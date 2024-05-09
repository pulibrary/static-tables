import Table from './Table.js';

export default {
  name: 'Filter',
  components: {
    Table
  },
  props: {
    dataColumns: {
      type: Array,
      required: true,
      default() {
        return [''];
      }
    }
  },
  data() {
    return {
      auctionHouse: '',
      date: '',
      name: '',
      city: '',
      rows: [],
      filteredRows: []
    };
  },
  watch: {
    rows(oldRows, newRows) {
      if (newRows) {
        this.filterRows();
      }
    }
  },
  methods: {
    auctionHouseOptions() {
      return [
        ...new Map(
          this.rows.map(row => [
            row['Auction House'].trim(),
            row['Auction House']
          ])
        ).values()
      ];
    },
    cityOptions() {
      return [
        ...new Map(this.rows.map(row => [row.City.trim(), row.City])).values()
      ].filter(c => c !== '');
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
    firstEntry() {
      return (this.page - 1) * this.pageSize + 1;
    },
    lastEntry() {
      return this.page * this.pageSize;
    }
  },
  template: `
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
  <Table :columns="dataColumns" :rows="filteredRows"></Table>
  `
};
