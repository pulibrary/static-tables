export default {
  name: 'TableTitle',
  props: {
    title: String
  },
  template: `
  <div class="table-title">
    <h2>{{ title }}</h2>
  </div>
  `
};
