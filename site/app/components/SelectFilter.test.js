import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SelectFilter from './SelectFilter';

describe('SelectFilter', () => {
  test('it takes a name from the config prop', () => {
    const wrapper = mount(SelectFilter, {
      props: { config: { name: 'City' } }
    });

    expect(wrapper.get('label').text()).toEqual('City');
  });
  test('it uses the id to associate the select and the input', () => {
    const wrapper = mount(SelectFilter, {
      props: { config: { name: 'City', id: 'my-city' } }
    });

    expect(wrapper.get('label').attributes('for')).toEqual('my-city');
    expect(wrapper.get('select').attributes('id')).toEqual('my-city');
  });
  test('it takes an aria label from the config prop', () => {
    const wrapper = mount(SelectFilter, {
      props: { config: { aria_label: 'The best filter' } }
    });
    expect(wrapper.get('select').attributes('aria-label')).toEqual(
      'The best filter'
    );
  });
});
