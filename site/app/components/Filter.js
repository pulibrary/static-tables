export default {
  name: 'Filter',
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
  `
};
