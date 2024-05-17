import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.js';

let wrapper;
describe('App', () => {
  beforeEach(() => {
    wrapper = mount(App, {});
  });
  test('page title', () => {
    expect(wrapper.find('.page-title').text()).toBe(
      'Marquand Library of Art and Archaeology'
    );
  }),
    test('header title', () => {
      expect(wrapper.find('.header-title').text()).toBe(
        'Marquand Sales Catalogs'
      );
    });
  describe('Routing', () => {
    test('changing page title by url', () => {
      Object.defineProperty(window, 'location', {
        value: new URL(
          'https://library.princeton.edu/static_tables/faculty-and-professional-staff-index'
        )
      });
      wrapper = mount(App);
      expect(wrapper.find('.page-title').text()).toBe(
        'Faculty and Professional Staff Index, 1764-2006'
      );
    });
    test('navigating to honorary degrees page', () => {
      Object.defineProperty(window, 'location', {
        value: new URL(
          'https://library.princeton.edu/static_tables/honorary-degree-index'
        )
      });
      wrapper = mount(App);
      expect(wrapper.find('.page-title').text()).toBe(
        'Honorary Degree Recipients, 1748-2001'
      );
    });
    test('navigating to princeton alumni memorial index', () => {
      Object.defineProperty(window, 'location', {
        value: new URL(
          'https://library.princeton.edu/static_tables/princeton-alumni-weekly-memorial-index'
        )
      });
      wrapper = mount(App);
      expect(wrapper.find('.page-title').text()).toBe(
        'Princeton Alumni Weekly Memorial Index, 1894-2011'
      );
    });
  });
  describe('Banner', () => {
    test('Shows a banner when there is a banner_url', () => {
      Object.defineProperty(window, 'location', {
        value: new URL('https://library.princeton.edu/static_tables/marquand')
      });
      wrapper = mount(App);
      expect(wrapper.find('.banner').exists()).toBeTruthy();
    });
  });
  describe('Banner', () => {
    test('Does not shows a banner when there is not a banner_url', () => {
      Object.defineProperty(window, 'location', {
        value: new URL(
          'https://library.princeton.edu/static_tables/honorary-degree-index'
        )
      });
      wrapper = mount(App);
      expect(wrapper.find('.banner').exists()).toBeFalsy();
    });
  });
});
