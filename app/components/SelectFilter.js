export default {
  name: 'SelectFilter',
  template: `
      <label :for="config.id" class="form-label">{{ config.name }}</label>
      <select :id="config.id"
              :aria-label="config.aria_label"
              @change="handleChange"
              class="form-select">
          <option selected value="">- Any -</option>
          <option v-for="option in options">{{option}}</option>
      </select>
      `,
  props: ['config', 'rows'],
  emits: ['filterChange'],
  computed: {
    options() {
      if (this.config.options_generator && this.rows) {
        return this.config.options_generator(this.rows);
      } else {
        return [];
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('filterChange', {
        field: this.config.id,
        value: event.target.value
      });
    }
  }
};
