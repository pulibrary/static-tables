import { describe, test, expect, vi} from 'vitest';
import { mount } from '@vue/test-utils';
import Table from './Table';

global.fetch = vi.fn();

describe('Table', () => {
    test('get', () => {
        const wrapper = mount(Table, 
            { props: { rows: [{Date: '2024-02-28',
                               City: 'Princeton',
                               State: 'New Jersey' }],
                       columns: [ 'Date', 'City', 'State']}})
      
        wrapper.get('table') //=> found; returns DOMWrapper
        const headings = wrapper.findAll('th');
        expect(headings[0].text()).toEqual('Date');
        expect(headings[1].text()).toEqual('City');
        expect(headings[2].text()).toEqual('State');

      
        expect(() => wrapper.get('.not-there')).toThrowError()
      })
})
