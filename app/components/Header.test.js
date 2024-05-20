import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from './Header';

describe('Header', () => {
  test('it takes a header title from the config', () => {
    const wrapper = mount(Header, {
      props: {
        title: 'Marquand Sales Catalogs'
      }
    });

    expect(wrapper.get('a.lux-app-name').text()).toEqual(
      'Marquand Sales Catalogs'
    );
  });
});
