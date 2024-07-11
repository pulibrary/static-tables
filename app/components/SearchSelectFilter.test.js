import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchSelectFilter from './SearchSelectFilter';

describe('SearchSelectFilter', () => {
  test('it is a search box', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: { config: { name: 'City' } }
    });

    expect(wrapper.get('input').attributes('type')).toEqual('search');
  });
  test('it takes a name from the config prop', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: { config: { name: 'City' } }
    });

    expect(wrapper.get('label').text()).toEqual('City');
  });
  test('it uses the id to associate the label and the select', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: { config: { name: 'City', id: 'my-city' } }
    });

    expect(wrapper.get('label').attributes('for')).toEqual('my-city');
    expect(wrapper.get('input').attributes('id')).toEqual('my-city');
  });
  test('it takes an aria label from the config prop', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: { config: { aria_label: 'The best filter' } }
    });
    expect(wrapper.get('input').attributes('aria-label')).toEqual(
      'The best filter'
    );
  });
  test('it takes a list name from the config prop', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: { config: { id: 'cities' } }
    });
    expect(wrapper.get('input').attributes('list')).toEqual('cities-list');
  });
  test('it has a datalist associated with the input list', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: { config: { id: 'cities' } }
    });
    expect(wrapper.get('datalist').attributes('id')).toEqual('cities-list');
  });
  test('it can generate values based on provided rows and configured options_generator', () => {
    const wrapper = mount(SearchSelectFilter, {
      props: {
        config: {
          options_generator: () => {
            return [
              ['Alumni', 'Alumni'],
              ['Charter', 'Charter'],
              ['ex Officio', 'ex Officio'],
              ['Term', 'Term'],
              ['President', 'President'],
              ['Governor', 'Governor']
            ];
          }
        },
        rows: ['Alumni', 'Charter', 'ex Officio']
      }
    });
    const options = wrapper.findAll('option');

    expect(options.length).toEqual(7);
    expect(options[0].text()).toEqual('- Any -');
    expect(options[1].text()).toEqual('Alumni');
    expect(options[2].text()).toEqual('Charter');
  });
  test('it emits an event when option is selected', async () => {
    const wrapper = mount(SearchSelectFilter, {
      props: {
        config: {
          id: 'trustee-type',
          options_generator: () => {
            return [
              ['Alumni', 'Alumni'],
              ['Charter', 'Charter'],
              ['ex Officio', 'ex Officio'],
              ['Term', 'Term'],
              ['President', 'President'],
              ['Governor', 'Governor']
            ];
          }
        },
        rows: []
      }
    });

    const searchInput = wrapper.find('input[type="search"]');
    await searchInput.setValue('Alumni');

    expect(wrapper.find('input[type="search"]').element.value).toBe('Alumni');

    expect(wrapper.emitted()['filterChange'].length).toEqual(1);
    expect(wrapper.emitted()['filterChange'][0]).toEqual([
      { field: 'trustee-type', value: 'Alumni' }
    ]);
  });
});
