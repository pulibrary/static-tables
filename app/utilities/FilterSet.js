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
    if (this.type === 'text') {
      return (
        row[this.data_column]
          .toLowerCase()
          .indexOf(this.value.toLowerCase()) !== -1
      );
    } else if (this.type === 'select') {
      return this.value === '' || row[this.data_column] === this.value;
    } else if (this.type === 'boolean_text') {
      const values = [this.value[0], this.value[1]];
      const first_value_matches =
        row[this.data_column].toLowerCase().indexOf(values[0].toLowerCase()) !==
        -1;
      const second_value_matches =
        row[this.data_column].toLowerCase().indexOf(values[1].toLowerCase()) !==
        -1;
      return first_value_matches && second_value_matches;
    } else {
      return false;
    }
  }
}
