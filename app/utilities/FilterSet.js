export class FilterSet {
  constructor(configuration) {
    this.configuration = configuration;
    this.filters = {};
    configuration.forEach(configEntry => {
      this.filters[configEntry.id] = new Filter(
        configEntry.type,
        configEntry.data_columns
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
  constructor(type, data_columns) {
    this.type = type;
    this.data_columns = data_columns;
    this.value = '';
  }

  setValue(value) {
    this.value = value;
  }

  normalizeString(str) {
    return str.toLowerCase().normalize('NFD');
  }

  rowMatchesFilter(row) {
    if (this.type === 'text' || this.type === 'search-select') {
      const normalizedSearchString = this.normalizeString(this.value);
      // creates an object that contains only the columns we are filtering on
      let filtered_row = this.data_columns.reduce(
        (res, key) => ((res[key] = row[key]), res),
        {}
      );

      return Object.values(filtered_row).some(element =>
        this.normalizeString(element).includes(normalizedSearchString)
      );
      // this.data_columns.some((column) => row[column.toLowerCase()].indexOf(this.value.toLowerCase()) !== -1)
    } else if (this.type === 'select') {
      let column_values = this.data_columns.map(column => row[column]);
      return this.value === '' || column_values.includes(this.value);
    } else {
      return false;
    }
  }
}
