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
  test('it uses the id to associate the label and the select', () => {
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
  test('it can generate values based on provided rows and configured options_generator', () => {
    const wrapper = mount(SelectFilter, {
      props: {
        config: {
          options_generator: rows => {
            return rows.filter(row => row.startsWith('c'));
          }
        },
        rows: ['cat', 'dog', 'cheetah']
      }
    });
    const options = wrapper.findAll('option');

    expect(options.length).toEqual(3);
    expect(options[0].text()).toEqual('- Any -');
    expect(options[1].text()).toEqual('cat');
    expect(options[2].text()).toEqual('cheetah');
  });
  test('it emits an event when option is selected', () => {
    const wrapper = mount(SelectFilter, {
      props: {
        config: {
          id: 'city',
          options_generator: () => ['Option 1', 'Option 2']
        },
        rows: []
      }
    });

    wrapper.get('select').setValue('Option 2');

    expect(wrapper.emitted()['filterChange'].length).toEqual(1);
    expect(wrapper.emitted()['filterChange'][0]).toEqual([
      { field: 'city', value: 'Option 2' }
    ]);
  });
});
