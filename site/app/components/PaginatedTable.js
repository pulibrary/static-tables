import { DataService } from '../services/DataService.js';

import Table from './Table.js';
import TableDescription from './TableDescription.js';
import TableTitle from './TableTitle.js';
import SelectFilter from './SelectFilter.js';
import TextFilter from './TextFilter.js';
import Pagination from './Pagination.js';

export default {
  name: 'PaginatedTable',
  components: {
    Pagination,
    Table,
    TableDescription,
    TableTitle,
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
      date: '',
      name: '',
      auctionHouse: '',
      city: '',
      rows: [],
      filteredRows: [],
      filteredRowsCount: null
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
      let rows = this.rows
        .filter(
          row => row.Date.toLowerCase().indexOf(this.date.toLowerCase()) !== -1
        )
        .filter(
          row => row.Name.toLowerCase().indexOf(this.name.toLowerCase()) !== -1
        )
        .filter(
          row =>
            this.auctionHouse === '' ||
            row['Auction House'] === this.auctionHouse
        )
        .filter(row => this.city === '' || row.City === this.city)
        .sort(this.sorter);
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
    dateConfig() {
      return this.dataFilters.find(filter => filter.id === 'date');
    },
    handleDateChange(value) {
      this.date = value;
      this.filterRows();
    },
    nameConfig() {
      return this.dataFilters.find(filter => filter.id === 'name');
    },
    handleNameChange(value) {
      this.name = value;
      this.filterRows();
    },
    auctionHouseConfig() {
      return this.dataFilters.find(filter => filter.id === 'auction-house');
    },
    handleAuctionHouseChange(value) {
      this.auctionHouse = value;
      this.filterRows();
    },
    cityConfig() {
      return this.dataFilters.find(filter => filter.id === 'city');
    },
    handleCityChange(value) {
      this.city = value;
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
            <div class="col">
              <TextFilter :config="dateConfig()" @changed="handleDateChange"></TextFilter>
            </div>
            <div class="col">
              <TextFilter :config="nameConfig()" @changed="handleNameChange"></TextFilter>
            </div>
            <div class="col">
              <SelectFilter :config="auctionHouseConfig()" :rows="rows" @selected="handleAuctionHouseChange"></SelectFilter>
            </div>
            <div class="col">
              <SelectFilter :config="cityConfig()" :rows="rows" @selected="handleCityChange"></SelectFilter>
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
