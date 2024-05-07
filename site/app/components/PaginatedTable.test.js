import { describe, test, expect, vi} from 'vitest';
import { mount } from '@vue/test-utils';
import PaginatedTable from './PaginatedTable';
import { sortByDate } from '../utilities/SortingUtilities.js';

describe('PaginatedTable', () => {
  test('form labels', () => {
    const wrapper = mount(PaginatedTable, 
      { props: 
        {dataUrl: 'http://www.example.com/',
         dataColumns: [],
         sorter: '' }
      })
      wrapper.get('form')
      const [firstLabel, secondLabel, thirdLabel, fourthLabel] = wrapper.findAll('label');
      expect(firstLabel.text()).toEqual('Date')
      expect(secondLabel.text()).toEqual('Name')
      expect(thirdLabel.text()).toEqual('Auction House')
      expect(fourthLabel.text()).toEqual('City')
  })

  test('form fields', () => {
    const wrapper = mount(PaginatedTable, 
      { props: 
        {dataUrl: 'http://www.example.com/',
         dataColumns: [],
         sorter: '' }
      })
    wrapper.get('form')
    const [firstInput, secondInput] = wrapper.findAll('input');
    
    expect(firstInput.attributes('aria-label')).toBe('Date to filter by')
    expect(firstInput.attributes('type')).toBe('text')
    expect(secondInput.attributes('aria-label')).toBe('Name of auction')
    expect(secondInput.attributes('type')).toBe('text')

    const [firstDropdown, secondDropdown] = wrapper.findAll('select')

    expect(firstDropdown.attributes('aria-label')).toBe('Auction House to filter by')
    expect(firstDropdown.text()).toBe('- Any -')
    expect(secondDropdown.attributes('aria-label')).toBe('City to filter by')
    expect(secondDropdown.text()).toBe('- Any -')
  })

  test('form options', async () => {
    const wrapper = mount(PaginatedTable, 
      { props: 
        {dataUrl: 'https://www.example.com',
         dataColumns: [],
         sorter: sortByDate }
      })
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
          City: 'New York',
          'Sale #': '7420',
          Name: 'Important Americana',
          Catalog: "Sotheby's New York-4 Box 35"
        }
      ]
    })
    await wrapper.find('select')

    const firstSelectOptions = wrapper.findAll('option')
    expect(firstSelectOptions[0].text()).toBe('- Any -')
    expect(firstSelectOptions[1].text()).toBe("Christie's East")
    expect(firstSelectOptions[2].text()).toBe("Christie's")
    expect(firstSelectOptions[3].text()).toBe("Sotheby's")
  })
})
