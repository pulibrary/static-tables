export default {
  name: 'TableDescription',
  props: {
    description: String
  },
  template: `
  <div class="description">
    <div v-html=description></div>
  </div>
  `
};
