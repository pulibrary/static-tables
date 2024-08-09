export default {
  name: 'Table',
  props: {
    rows: Array,
    columns: Array,
    loadingComplete: Boolean
  },
  template: `
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" scope="col">{{column[0]}}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="rows.length">
          <template v-for="row in rows" :key="row.id">
            <tr>
              <td v-for="column in columns" :key="column.id">{{row[column[1]]}}</td>
            </tr>
        </template>
        </template>
        <template v-else-if="!rows.length && loadingComplete">
          <tr>
            <td class="empty-results">No records found</td>
          </tr>
        </template>
      </tbody>
    </table>`
};
