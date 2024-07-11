export class FilterSet {
  constructor(configuration) {
    this.configuration = configuration;
    this.filters = {};
    configuration.forEach(configEntry => {
      this.filters[configEntry.id] = new Filter(
        configEntry.type,
        configEntry.data_column
      );
    });
  }

  setValue(column, value) {
    this.filters[column].setValue(value);
  }

  filterRows(rows) {
    return rows.filter(row => this.everyFilterMatchesRow(row));
  }

  everyFilterMatchesRow(row) {
    return Object.values(this.filters).every(filter => {
      return filter.rowMatchesFilter(row);
    });
  }
}

class Filter {
  constructor(type, data_column) {
    this.type = type;
    this.data_column = data_column;
    this.value = '';
  }

  setValue(value) {
    this.value = value;
  }

  rowMatchesFilter(row) {
    if (this.type === 'text' || this.type === 'search-select') {
      return (
        row[this.data_column]
          .toLowerCase()
          .indexOf(this.value.toLowerCase()) !== -1
      );
    } else if (this.type === 'select') {
      return this.value === '' || row[this.data_column] === this.value;
    } else {
      return false;
    }
  }
}
