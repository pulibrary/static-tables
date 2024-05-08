import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Table from './Table';

describe('Table', () => {
    test('headers', () => {
        const wrapper = mount(Table, 
            { props: { rows: [{Date: '2024-02-28',
                               City: 'Princeton',
                               State: 'New Jersey' }],
                       columns: [ ['A Date', 'Date'], ['Some City', 'City'], ['My State', 'State']]}})
      
        wrapper.get('table') //=> found; returns DOMWrapper
        const headings = wrapper.findAll('th');
        expect(headings[0].text()).toEqual('A Date');
        expect(headings[1].text()).toEqual('Some City');
        expect(headings[2].text()).toEqual('My State');
    })
    test('rows', () => {
        const wrapper = mount(Table, 
            { props: { rows: [{Date: '2024-02-28',
                               City: 'Princeton',
                               State: 'New Jersey' }],
                       columns: [ ['A Date', 'Date'], ['Some City', 'City'], ['My State', 'State']]}})
      
        wrapper.get('table') //=> found; returns DOMWrapper
        const cells = wrapper.findAll('tbody td');
        expect(cells[0].text()).toEqual('2024-02-28');
        expect(cells[1].text()).toEqual('Princeton');
        expect(cells[2].text()).toEqual('New Jersey');
    })
})
