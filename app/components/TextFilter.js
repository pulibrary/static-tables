export default {
  name: 'TextFilter',
  template: `
      <label :for="config.id" class="form-label">{{ config.name }}</label>
      <input :id="config.id"
             :aria-label="config.aria_label"
             @input="handleInput"
             class="form-control"
             type="search"
             >
      `,
  props: ['config'],
  emits: ['filterChange'],
  methods: {
    handleInput(event) {
      this.$emit('filterChange', {
        field: this.config.id,
        value: event.target.value
      });
    }
  }
};
