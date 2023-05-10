export default {
  name: 'Table',
  props: {
    rows: Array
  },
  template: `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Auction House</th>
          <th scope="col">City</th>
          <th scope="col">Sale</th>
          <th scope="col">Name</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td scope="row">{{row.Date}}</td>
          <td>{{row['Auction House']}}</td>
          <td>{{row.City}}</td>
          <td>{{row['Sale #']}}</td>
          <td>{{row.Name}}</td>
          <td>{{row.Catalog}}</td>
        </tr>
      </tbody>
    </table>`
  }
