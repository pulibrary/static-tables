import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Filter from './Filter';
import DataColumns from '../configs/DataColumns.js';

describe('Filter', () => {
  test('form labels', () => {
    const wrapper = mount(Filter, {
      props: {
        dataColumns: []
      }
    });
    wrapper.get('form');
    const [firstLabel, secondLabel, thirdLabel, fourthLabel] =
      wrapper.findAll('label');
    expect(firstLabel.text()).toEqual('Date');
    expect(secondLabel.text()).toEqual('Name');
    expect(thirdLabel.text()).toEqual('Auction House');
    expect(fourthLabel.text()).toEqual('City');
  });
  test('form fields', () => {
    const wrapper = mount(Filter, {
      props: {
        dataColumns: []
      }
    });
    wrapper.get('form');
    const [firstInput, secondInput] = wrapper.findAll('input');

    expect(firstInput.attributes('aria-label')).toBe('Date to filter by');
    expect(firstInput.attributes('type')).toBe('text');
    expect(secondInput.attributes('aria-label')).toBe('Name of auction');
    expect(secondInput.attributes('type')).toBe('text');

    const [firstDropdown, secondDropdown] = wrapper.findAll('select');

    expect(firstDropdown.attributes('aria-label')).toBe(
      'Auction House to filter by'
    );
    expect(firstDropdown.text()).toBe('- Any -');
    expect(secondDropdown.attributes('aria-label')).toBe('City to filter by');
    expect(secondDropdown.text()).toBe('- Any -');
  });
  test('form options', async () => {
    const wrapper = mount(Filter, {
      props: {
        dataColumns: []
      }
    });
    wrapper.setData({
      rows: [
        {
          ID: '0',
          Date: '19-Jan-00',
          'Auction House': "Christie's East",
          City: 'New York',
          'Sale #': '8337',
          Name: 'American Vision: Painting and Decorative Arts',
          Catalog: "Christie's East-(Firm) Box 6"
        },
        {
          ID: '1',
          Date: '21-Jan-00',
          'Auction House': "Christie's",
          City: 'New York',
          'Sale #': '9314',
          Name: 'Important American Furniture',
          Catalog: "Christie's New York-3 Box 23"
        },
        {
          ID: '2',
          Date: '21-Jan-00',
          'Auction House': "Christie's",
          City: 'New York',
          'Sale #': '9426',
          Name: 'The Joseph and Bathsheba Pope Valuables Cabinet',
          Catalog: "Christie's New York-3 Box 23"
        },
        {
          ID: '3',
          Date: '21-22-Jan-00',
          'Auction House': "Sotheby's",
          City: 'Madrid',
          'Sale #': '7420',
          Name: 'Important Americana',
          Catalog: "Sotheby's Madrid-4 Box 35"
        }
      ]
    });
    // My IDE claims this 'await' is unnecessary, but if I remove it the test fails
    await wrapper.find('select');
    const [firstSelect, secondSelect] = wrapper.findAll('select');
    const firstSelectOptions = firstSelect.findAll('option');
    expect(firstSelectOptions[0].text()).toBe('- Any -');
    expect(firstSelectOptions[1].text()).toBe("Christie's East");
    expect(firstSelectOptions[2].text()).toBe("Christie's");
    expect(firstSelectOptions[3].text()).toBe("Sotheby's");
    const secondSelectOptions = secondSelect.findAll('option');
    expect(secondSelectOptions[0].text()).toBe('- Any -');
    expect(secondSelectOptions[1].text()).toBe('New York');
    expect(secondSelectOptions[2].text()).toBe('Madrid');
  });
  test('filtering', async () => {
    const wrapper = mount(Filter, {
      props: {
        dataColumns: DataColumns.marquand
      }
    });
    wrapper.setData({
      rows: [
        {
          ID: '0',
          Date: '19-Jan-00',
          'Auction House': "Christie's East",
          City: 'New York',
          'Sale #': '8337',
          Name: 'American Vision: Painting and Decorative Arts',
          Catalog: "Christie's East-(Firm) Box 6"
        },
        {
          ID: '1',
          Date: '21-Jan-00',
          'Auction House': "Christie's",
          City: 'New York',
          'Sale #': '9314',
          Name: 'Important American Furniture',
          Catalog: "Christie's New York-3 Box 23"
        },
        {
          ID: '2',
          Date: '21-Jan-00',
          'Auction House': "Christie's East",
          City: 'Madrid',
          'Sale #': '9426',
          Name: 'The Joseph and Bathsheba Pope Valuables Cabinet',
          Catalog: "Sotheby's Madrid-3 Box 23"
        },
        {
          ID: '3',
          Date: '21-22-Jan-00',
          'Auction House': "Sotheby's",
          City: 'Madrid',
          'Sale #': '7420',
          Name: 'Important Americana',
          Catalog: "Sotheby's Madrid-4 Box 35"
        }
      ]
    });
    await wrapper.find('select');

    const [firstSelect, secondSelect] = wrapper.findAll('select');

    await firstSelect.setValue("Christie's East");
    const cellsAfterFirstSelect = wrapper.findAll('tbody td');
    expect(cellsAfterFirstSelect.length).toBe(12);
    // expect(cellsAfterFirstSelect[1].text()).toEqual("Christie's East");
    // expect(cellsAfterFirstSelect[2].text()).toEqual("Madrid");
    // expect(cellsAfterFirstSelect[7].text()).toEqual("Christie's East");
    // expect(cellsAfterFirstSelect[8].text()).toEqual("New York");

    await secondSelect.setValue('New York');
    const cellsAfterSecondSelect = wrapper.findAll('tbody td');
    expect(cellsAfterSecondSelect.length).toBe(6);
    // expect(cellsAfterSecondSelect[1].text()).toEqual("Christie's East");
    // expect(cellsAfterFirstSelect[2].text()).toEqual("New York");
  });
});
