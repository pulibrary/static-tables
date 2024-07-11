import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PaginatedTable from './PaginatedTable';
import { sortByDate } from '../utilities/SortingUtilities.js';
import Marquand from '../configs/Marquand.js';

describe('PaginatedTable', () => {
  test('table title', () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'http://www.example.com/',
        dataColumns: [],
        sorter: sortByDate,
        dataTableTitle: 'Any old title',
        dataFilters: Marquand.data_filters
      }
    });
    const title = wrapper.get('.table-title');
    expect(title.text()).toEqual('Any old title');
  });

  test('table description', () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'http://www.example.com/',
        dataColumns: [],
        sorter: sortByDate,
        dataTableDescription: 'directed to a Marquand staff member',
        dataFilters: Marquand.data_filters
      }
    });
    const description = wrapper.get('.description');
    expect(description.text()).include('directed to a Marquand staff member');
  });
  test('form labels', () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'http://www.example.com/',
        dataColumns: [],
        sorter: sortByDate,
        dataFilters: Marquand.data_filters
      }
    });
    wrapper.get('form');
    const [firstLabel, secondLabel, thirdLabel, fourthLabel] =
      wrapper.findAll('label');
    expect(firstLabel.text()).toEqual('Date');
    expect(secondLabel.text()).toEqual('Auction Name');
    expect(thirdLabel.text()).toEqual('Auction House');
    expect(fourthLabel.text()).toEqual('City');
  });

  test('form fields', () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'http://www.example.com/',
        dataColumns: [],
        sorter: sortByDate,
        dataFilters: Marquand.data_filters
      }
    });
    wrapper.get('form');
    const [firstInput, secondInput] = wrapper.findAll('input');

    expect(firstInput.attributes('aria-label')).toBe('Date to filter by');
    expect(firstInput.attributes('type')).toBe('search');
    expect(secondInput.attributes('aria-label')).toBe(
      'Auction name for search'
    );
    expect(secondInput.attributes('type')).toBe('search');
    const [firstDropdown, secondDropdown] = wrapper.findAll('select');

    expect(firstDropdown.attributes('aria-label')).toBe(
      'Auction House to filter by'
    );
    expect(firstDropdown.text()).toBe('- Any -');
    expect(secondDropdown.attributes('aria-label')).toBe('City to filter by');
    expect(secondDropdown.text()).toBe('- Any -');
  });

  test('form options', async () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'https://www.example.com',
        dataColumns: [],
        sorter: sortByDate,
        dataFilters: Marquand.data_filters
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
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'https://www.example.com',
        dataColumns: Marquand.data_columns,
        sorter: sortByDate,
        dataFilters: Marquand.data_filters
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
    expect(cellsAfterFirstSelect[1].text()).toEqual("Christie's East");
    expect(cellsAfterFirstSelect[2].text()).toEqual('Madrid');
    expect(cellsAfterFirstSelect[7].text()).toEqual("Christie's East");
    expect(cellsAfterFirstSelect[8].text()).toEqual('New York');

    await secondSelect.setValue('New York');
    const cellsAfterSecondSelect = wrapper.findAll('tbody td');
    expect(cellsAfterSecondSelect.length).toBe(6);
    expect(cellsAfterSecondSelect[1].text()).toEqual("Christie's East");
    expect(cellsAfterFirstSelect[2].text()).toEqual('New York');
  });

  test('search-select', async () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'https://www.example.com',
        dataColumns: [
          ['Full Name', 'full_name'],
          ['Trustee Type', 'trustee_type']
        ],
        sorter: () => 1,
        dataFilters: [
          {
            id: 'trustee-type',
            name: 'Trustee Type',
            type: 'search-select',
            aria_label: 'Trustee Type to filter by',
            data_columns: ['trustee_type'],
            options_generator: () => {
              return [
                ['Alumni', 'Alumni'],
                ['Charter', 'Charter'],
                ['ex Officio', 'ex Officio']
              ];
            }
          }
        ]
      }
    });
    wrapper.setData({
      rows: [
        {
          full_name: 'Leon Abbett',
          trustee_type: 'Governor of NJ, ex Officio'
        },
        {
          full_name: "Julius Ochs Adler '14",
          trustee_type: 'Alumni Trustee, Charter Trustee'
        }
      ]
    });
    await wrapper.find('datalist');

    const cellsBeforeSearch = wrapper.findAll('tbody td');
    expect(cellsBeforeSearch.length).toEqual(4);
    const searchInput = wrapper.find('input[type="search"]');
    await searchInput.setValue('Alumni');
    const cellsAfterSearch = wrapper.findAll('tbody td');
    expect(cellsAfterSearch.length).toEqual(2);
    expect(cellsAfterSearch[0].text()).toEqual("Julius Ochs Adler '14");
    expect(cellsAfterSearch[1].text()).toEqual(
      'Alumni Trustee, Charter Trustee'
    );
  });

  test('pagination', async () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'https://www.example.com',
        dataColumns: Marquand.data_columns,
        sorter: sortByDate,
        dataFilters: Marquand.data_filters
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
        },
        {
          Date: '21-22-Jan-00',
          'Auction House': 'house',
          City: 'Any',
          Name: 'Fifth city'
        },
        {
          Date: '21-22-Jan-00',
          'Auction House': 'house',
          City: 'Any',
          Name: 'Sixth city'
        }
      ]
    });
    await wrapper.find('.paging');
    const cellsBeforeRepaging = wrapper.findAll('tbody td');
    expect(wrapper.text()).include('Displaying 1 - 100 of 6');
    expect(wrapper.text()).include(
      'Show 5 | 10 | 20 | 40 | 60 results per page.'
    );
    expect(cellsBeforeRepaging.length).toBe(36);
    // Click first link to show 5 results per page
    await wrapper.find('.paging a').trigger('click');
    const cellsAfterRepaging = wrapper.findAll('tbody td');
    expect(cellsAfterRepaging.length).toBe(30);
  });
  test('page selection', async () => {
    const wrapper = mount(PaginatedTable, {
      props: {
        dataUrl: 'https://www.example.com',
        dataColumns: Marquand.data_columns,
        sorter: sortByDate,
        dataFilters: Marquand.data_filters
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
        },
        {
          Date: '21-22-Jan-00',
          'Auction House': 'house',
          City: 'Any',
          Name: 'Fifth city'
        },
        {
          Date: '21-22-Jan-00',
          'Auction House': 'house',
          City: 'Any',
          Name: 'Sixth city'
        }
      ]
    });
    await wrapper.find('.container.paging');
    const bottomPaginationOne = wrapper.find('.container.paging');
    expect(bottomPaginationOne.text()).toBe('1');
    // Click first link to show 5 results per page
    await wrapper.find('#size-5').trigger('click');
    const bottomPaginationTwo = wrapper.find('.container.paging');
    expect(bottomPaginationTwo.text()).toBe('12next >last >>');
    await wrapper
      .find('.btn-group.btn-group:nth-child(2) button')
      .trigger('click');
    const bottomPaginationThree = wrapper.find('.container.paging');
    expect(bottomPaginationThree.text()).toBe('<< first< previous12');
    expect(
      bottomPaginationThree.findAll('.btn-group div')[1].find('button').element
        .classList
    ).toContain('active');
    const cells = wrapper.findAll('tbody td');
    expect(cells.length).toBe(6);
  });
});
