export default {
  name: 'TextFilter',
  template: `
      <label :for="config.id" class="form-label">{{ config.name }}</label>
      <input class="form-control" :id="config.id" :aria-label="config.aria_label" type="text" @input="handleInput">
      `,
  props: ['config'],
  emits: ['changed'],
  methods: {
    handleInput(event) {
      this.$emit('changed', event.target.value);
    }
  }
};
