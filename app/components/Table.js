export default {
  name: 'Table',
  props: {
    rows: Array,
    columns: Array
  },
  template: `
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" scope="col">{{column[0]}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td v-for="column in columns" scope="row">{{row[column[1]]}}</td>
        </tr>
      </tbody>
    </table>`
};
