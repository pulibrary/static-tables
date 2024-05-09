export default {
  name: 'TableDescription',
  props: {
    description: String
  },
  template: `
  <div class="table-title">
    <h2>Browse Sales Catalogs</h2>
  </div>
  <div class="description">
    <div v-html=description></div>
  </div>
  `
};
