export default {
  name: 'SearchSelectFilter',
  template: `
  <label :for="config.id" class="form-label">{{ config.name }}</label>
  <input type="search"
         :list="toListName(config.id)"
         :id="config.id"
         :aria-label="config.aria_label"
         class="form-select"
         @input="handleInput"
  />
  <datalist :id="toListName(config.id)">
    <option selected value="">- Any -</option>
    <option v-for="option in options" :value="option[0]">{{option[1]}}</option>
  </datalist>
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
    handleInput(event) {
      this.$emit('filterChange', {
        field: this.config.id,
        value: event.target.value
      });
    },
    toListName(id) {
      return `${id}-list`;
    }
  }
};
