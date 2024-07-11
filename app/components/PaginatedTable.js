import { DataService } from '../services/DataService.js';

import Table from './Table.js';
import TableDescription from './TableDescription.js';
import TableTitle from './TableTitle.js';
import SearchSelectFilter from './SearchSelectFilter.js';
import SelectFilter from './SelectFilter.js';
import TextFilter from './TextFilter.js';
import Pagination from './Pagination.js';
import { FilterSet } from '../utilities/FilterSet.js';

export default {
  name: 'PaginatedTable',
  components: {
    Pagination,
    Table,
    TableDescription,
    TableTitle,
    SearchSelectFilter,
    SelectFilter,
    TextFilter
  },
  props: {
    sorter: {
      type: Function
    },
    dataUrl: {
      type: String,
      required: true
    },
    dataColumns: {
      type: Array,
      required: true,
      default() {
        return [''];
      }
    },
    dataTableDescription: {
      type: String,
      required: false,
      default() {
        return '';
      }
    },
    dataTableTitle: {
      type: String,
      required: false,
      default() {
        return '';
      }
    },
    dataFilters: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      pageSize: 100,
      page: 1,
      rows: [],
      filteredRows: [],
      filteredRowsCount: null,
      filterSet: new FilterSet(this.dataFilters)
    };
  },
  watch: {
    rows(oldRows, newRows) {
      if (newRows) {
        this.filterRows();
      }
    },
    pageSize(oldPageSize, newPageSize) {
      if (newPageSize) {
        this.filterRows();
      }
    },
    page(oldPage, newPage) {
      if (newPage) {
        this.filterRows();
      }
    }
  },
  methods: {
    handlePageSize(size) {
      this.pageSize = size;
      this.filterRows();
    },
    handlePageChange(page) {
      this.page = page;
      this.filterRows();
    },
    filterRows() {
      let rows = this.filterSet.filterRows(this.rows).sort(this.sorter);
      const first = this.firstEntry() - 1;
      const last = this.lastEntry();
      this.filteredRowsCount = rows.length;
      this.filteredRows = rows.slice(first, last);

      if (this.page > this.lastPage()) {
        this.page = 1;
      }
    },
    lastPage() {
      return Math.ceil(this.filteredRowsCount / this.pageSize);
    },
    firstEntry() {
      return (this.page - 1) * this.pageSize + 1;
    },
    lastEntry() {
      return this.page * this.pageSize;
    },
    totalEntries() {
      return this.filteredRows.length;
    },
    handleFilterChange(change) {
      this.filterSet.setValue(change.field, change.value);
      this.filterRows();
    },
    setData(rows) {
      this.rows = rows;
    }
  },
  created() {
    DataService.fetchData(this.dataUrl, this.setData);
  },
  template: `
    <div class="container">
      <TableTitle :title="dataTableTitle"></TableTitle>
      <TableDescription :description="dataTableDescription"></TableDescription>
      Displaying {{firstEntry()}} - {{lastEntry()}} of {{filteredRowsCount}}.
      <Pagination :lastPage="lastPage()" @pageSizeChange="handlePageSize" @pageChange="handlePageChange">
        <div class="container">
        <form>
          <div class="row">
            <div class="col" v-for="filter in dataFilters">
              <TextFilter v-if="filter.type === 'text'" :config="filter" @filterChange="handleFilterChange"></TextFilter>
              <SelectFilter v-else-if="filter.type === 'select'" :config="filter" @filterChange="handleFilterChange" :rows="rows"></SelectFilter>
              <SearchSelectFilter v-else-if="filter.type === 'search-select'" :config="filter" @filterChange="handleFilterChange" :rows="rows"></SearchSelectFilter>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
          </div>
        </form>
      </div>
      <Table :columns="dataColumns" :rows="filteredRows"></Table>
    </Pagination>      
    </div>`
};
