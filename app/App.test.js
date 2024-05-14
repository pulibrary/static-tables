import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.js';

describe('App', () => {
  test('page title', () => {
    const wrapper = mount(App, {
      props: {}
    });
    expect(wrapper.find('.page-title').text()).toBe(
      'Marquand Library of Art and Archaeology'
    );
  }),
    test('header title', () => {
      const wrapper = mount(App, {
        props: {}
      });
      expect(wrapper.find('.header-title').text()).toBe(
        'Marquand Sales Catalogs'
      );
    });
});
