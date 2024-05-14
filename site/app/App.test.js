import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.js';
import * as Papa from '../assets/js/papaparse/papaparse.js';
window.Papa = Papa;

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
