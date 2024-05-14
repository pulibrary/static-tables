import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TextFilter from './TextFilter';

describe('TextFilter', () => {
  test('it takes a name from the config prop', () => {
    const wrapper = mount(TextFilter, {
      props: { config: { name: 'City' } }
    });

    expect(wrapper.get('label').text()).toEqual('City');
  });

  test('it uses the id to associate the label and the input', () => {
    const wrapper = mount(TextFilter, {
      props: { config: { name: 'City', id: 'my-city' } }
    });

    expect(wrapper.get('label').attributes('for')).toEqual('my-city');
    expect(wrapper.get('input').attributes('id')).toEqual('my-city');
  });

  test('it takes an aria label from the config prop', () => {
    const wrapper = mount(TextFilter, {
      props: { config: { aria_label: 'The best filter' } }
    });
    expect(wrapper.get('input').attributes('aria-label')).toEqual(
      'The best filter'
    );
  });

  test('it emits an event when the value changes', () => {
    const wrapper = mount(TextFilter, { props: { config: {} } });

    wrapper.get('input').setValue('bronze');

    expect(wrapper.emitted()['changed'].length).toEqual(1);
    expect(wrapper.emitted()['changed'][0]).toEqual(['bronze']);
  });
});
