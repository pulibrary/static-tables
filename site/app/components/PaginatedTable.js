import { parse } from '../../assets/js/csv-parse/sync.js';

import Table from './Table.js'

export default {
  name: 'PaginatedTable',
  components: {
    Table
  },
  props: {
    sorter: {
      type: Function
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
    },
    date(oldDate, newDate) {
      this.filterRows();
    },
    name(oldName, newName) {
      this.filterRows();
    },
    auctionHouse(oldAH, newAH) {
      this.filterRows();
    },
    city(oldCity, newCity) {
      this.filterRows();
    }
  },
  methods: {
    filterRows() {
      let rows = this.rows
        .filter(row => row.Date.toLowerCase().indexOf(this.date.toLowerCase()) !== -1)
        .filter(row => row.Name.toLowerCase().indexOf(this.name.toLowerCase()) !== -1)
        .filter(row => this.auctionHouse === '' || row['Auction House'] === this.auctionHouse)
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
    setPageSize(size) {
      this.pageSize = size;
    },
    setPage(page) {
      this.page = page;
    },
    lastPage() {
      return Math.ceil(this.filteredRowsCount / this.pageSize);
    },
    availablePages() {
      const min = this.page < 5 ? 1 : this.page - 4;
      const lastPage = this.lastPage();
      const max = lastPage <= this.page + 4 ? lastPage : this.page + 4;
      const length = max - min + 1;

      return Array.from({length: length}, (x, i) => i + min);
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
    auctionHouseOptions() {
      return [...new Map(this.rows.map(row => [row['Auction House'].trim(), row['Auction House']])).values()];
    },
    cityOptions() {
      return [...new Map(this.rows.map(row => [row.City.trim(), row.City])).values()]
        .filter(c => c !== '');
    },
  },
  created() {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRJirkpoJFVLXjXLkA2pe70Q6sIS5WrpUjcJuvIW69BkYb9d-yQzypsBmyiOYzjQbrj01Pa8pgXJhLh/pub?output=csv")
      .then(res => res.text())
      .then(data => {
        this.rows = parse(data, { columns: true });
      })
      .catch(err => {
        console.log(err)
      });
  },
  template: `
    <div class="container">
      <h2>Browse Sales Catalogs</h2>
      <p>Questions about sale catalog holdings may be directed to a Marquand staff member in Firestone or <a href="mailto:marquand@princeton.edu">e-mail</a> with the specifics of what is needed. Many current sales catalogs from Christie's, Sotheby's, Bonham's, Phillips, Swann, William Doyle and others have been boxed by city and date and are mostly off-site out at ReCAP (browse below). These require 1-2 business days' notice at least and up to a week if many catalogs are needed. Marquand has many more catalogs from c. 1820s-1990s for more than 250 auction houses, both cataloged and un-cataloged. Book and coin sales, unless mixed content, are handled by Special Collections in Firestone Library.</p>
        Displaying {{firstEntry()}} - {{lastEntry()}} of {{filteredRowsCount}}.
      <div>Show <a href="#" v-on:click="setPageSize(5)">5</a> | <a href="#" v-on:click="setPageSize(10)">10</a> | <a href="#" v-on:click="setPageSize(20)">20</a> | <a href="#" v-on:click="setPageSize(40)">40</a> | <a href="#" v-on:click="setPageSize(60)">60</a> results per page.</div>
      <div class="container">
        <form>
          <div class="row">
            <div class="col">
              <label for="date" class="form-label">Date</label>
              <input v-model="date" id="date" type="text" class="form-control" aria-label="Date to filter by">
            </div>
            <div class="col">
              <label for="name" class="form-label">Name</label>
              <input v-model="name" id="name" type="text" class="form-control" aria-label="Name of auction">
            </div>
            <div class="col">
              <label for="auction-house" class="form-label">Auction House</label>
              <select v-model="auctionHouse" id="auction-house" class="form-select" aria-label="Auction House to filter by">
                <option selected value="">- Any -</option>
                <option v-for="ah in auctionHouseOptions()" :value="ah">{{ah}}</option>
              </select>
            </div>
            <div class="col">
              <label for="city" class="form-label">City</label>
              <select v-model="city" id="city" class="form-select" aria-label="City to filter by">
                <option selected value="">- Any -</option>
                <option v-for="c in cityOptions()" :value="c">{{c}}</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
          </div>
        </form>
      </div>
      <Table :rows="filteredRows"></Table>
      <div class="container">
        <div class="btn-group">
          <button v-if="page !== 1" v-on:click="setPage(1)" type="button" class="btn btn-outline-dark">&lt;&lt; first</button>
          <button v-if="page !== 1" v-on:click="setPage(page - 1)" type="button" class="btn btn-outline-dark">&lt; previous</button>
          <div v-for="pageNumber, index in availablePages()" class="btn-group">
            <button v-if="index === 0 && pageNumber !== 1" class="btn btn-outline-dark" disabled>...</button>
            <button v-on:click="setPage(pageNumber)" type="button" class="btn btn-outline-dark" :class="{ active: pageNumber === page}">{{pageNumber}}</button>
            <button v-if="index === availablePages().length - 1 && pageNumber !== lastPage()" type="button" class="btn btn-outline-dark" disabled>...</button>
          </div>
          <button v-if="page !== lastPage()" v-on:click="setPage(page + 1)" type="button" class="btn btn-outline-dark">next &gt;</button>
          <button v-if="page !== lastPage()" v-on:click="setPage(lastPage())" type="button" class="btn btn-outline-dark">last &gt;&gt;</button>
        </div>
      </div>
    </div>`
}
