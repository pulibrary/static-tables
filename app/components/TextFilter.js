export default {
  name: 'TextFilter',
  template: `
      <label :for="config.id" class="form-label">{{ config.name }}</label>
      <input class="form-control" :id="config.id" :aria-label="config.aria_label" type="search" @input="handleInput">
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
