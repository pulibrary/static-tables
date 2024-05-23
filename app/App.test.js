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
  });
  test('header title', () => {
    expect(wrapper.find('a.lux-app-name').text()).toBe(
      'Marquand Sales Catalogs'
    );
  });
  test('It has a footer', () => {
    expect(wrapper.find('#app > div.lux-library-footer')).toBeTruthy;
  });
  test('sorterMethod defaults to marquand date sorter', () => {
    const unsortedData = [
      { Date: '25-May-23' },
      { Date: '11-17-Oct-22' },
      { Date: '23-24-Jan-20' }
    ];
    const sortedData = [
      { Date: '25-May-23' },
      { Date: '11-17-Oct-22' },
      { Date: '23-24-Jan-20' }
    ];

    expect(unsortedData.sort(wrapper.vm.sorterMethod)).toEqual(sortedData);
  });
  describe('Accessibility', () => {
    test('heading levels', () => {
      expect(wrapper.find('h1').exists()).toBe(true);
    });
    test('main content', () => {
      expect(wrapper.find('main').exists()).toBe(true);
      expect(wrapper.findAll('main').length).toBe(1);
    });
  }),
    describe('Routing', () => {
      describe('faculty and professional index', () => {
        beforeEach(() => {
          Object.defineProperty(window, 'location', {
            value: new URL(
              'https://library.princeton.edu/static_tables/faculty-and-professional-staff-index'
            )
          });
          wrapper = mount(App);
        });
        test('it shows the faculty and professional title', () => {
          expect(wrapper.find('.page-title').text()).toBe(
            'Faculty and Professional Staff Index, 1764-2006'
          );
        });
        test('sorterMethod sorts by last name', () => {
          const unsortedData = [{ lname: 'A' }, { lname: 'C' }, { lname: 'B' }];
          const sortedData = [{ lname: 'A' }, { lname: 'B' }, { lname: 'C' }];

          expect(unsortedData.sort(wrapper.vm.sorterMethod)).toEqual(
            sortedData
          );
        });
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
      test('navigating to world war II memorial index', () => {
        Object.defineProperty(window, 'location', {
          value: new URL(
            'https://library.princeton.edu/static_tables/world-war-ii-memorial-book'
          )
        });
        wrapper = mount(App);
        expect(wrapper.find('.page-title').text()).toBe(
          'World War II Memorial Book'
        );
      });
      test('it works with a slash at the end', () => {
        Object.defineProperty(window, 'location', {
          value: new URL(
            'https://library.princeton.edu/princeton-alumni-weekly-memorial-index/'
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
      // Since these images are purely decorative, the alt text should be empty,
      // so that screen readers don't announce the file name
      expect(wrapper.find('.banner').attributes('alt')).toBe('');
    });
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
