export default {
  name: 'SelectFilter',
  template: `
      <label :for="config.id">{{ config.name }}</label>
      <select :id="config.id"
              :aria-label="config.aria_label">
      </select>
      `,
  props: ['config']
};
