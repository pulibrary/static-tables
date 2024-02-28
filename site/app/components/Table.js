export default {
  name: 'Table',
  props: {
    rows: Array,
    columns: Array,
  },
  template: `
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" scope="col">{{column}}</th>
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
