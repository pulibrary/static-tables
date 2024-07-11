import { describe, test, expect } from 'vitest';
import { FilterSet } from './FilterSet';

describe('FilterSet', () => {
  test('you can set values of filters', () => {
    const filterSet = new FilterSet([
      { id: 'name', type: 'text', data_columns: ['Name'] },
      { id: 'city', type: 'select', data_columns: ['City'] }
    ]);
    const rows = [
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
      }
    ];
    filterSet.setValue('name', 'Painting');

    const filtered = filterSet.filterRows(rows);
    expect(filtered.length).toEqual(1);
    expect(filtered[0].Name).toEqual(
      'American Vision: Painting and Decorative Arts'
    );
  });
  describe('multi-column search', () => {
    const rows = [
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
      }
    ];
    const filterSet = new FilterSet([
      {
        id: 'multi',
        name: 'Multi',
        type: 'text',
        aria_label: 'Multi-field Search',
        data_columns: ['Auction House', 'Name']
      }
    ]);
    test('multi-search can find values in auction-house', () => {
      filterSet.setValue('multi', 'East');

      const filtered = filterSet.filterRows(rows);
      expect(filtered.length).toEqual(1);
      expect(filtered[0].Name).toEqual(
        'American Vision: Painting and Decorative Arts'
      );
    });
    test('multi-search can find values in Name', () => {
      filterSet.setValue('multi', 'Furniture');

      const filtered = filterSet.filterRows(rows);
      expect(filtered.length).toEqual(1);
      expect(filtered[0].Name).toEqual('Important American Furniture');
    });
  });
  describe('boolean search', () => {
    const filterSet = new FilterSet([
      {
        id: 'subject_one',
        name: 'Subject',
        type: 'text',
        aria_label: 'Subject for search',
        data_columns: ['subject']
      },
      {
        id: 'subject_two',
        name: 'Subject',
        type: 'text',
        aria_label: 'Subject for search',
        data_columns: ['subject']
      }
    ]);

    const rows = [
      {
        id: '381',
        subject: 'Appropriation, to Com. on Bathhouse & c.',
        volume: 'Volume 4',
        page: 'Page 11'
      },
      {
        id: '548',
        subject:
          'Bath & Wash House, $100 appropriated for experiments respecting',
        volume: 'Volume 4',
        page: 'Page 11'
      },
      {
        id: '2823',
        subject: 'Finley Samuel, Takes baths  Sept. 1761',
        volume: 'Volume 1',
        page: 'Page 93'
      }
    ];
    test('you can do AND searches', () => {
      filterSet.setValue('subject_one', 'bath');
      filterSet.setValue('subject_two', 'house');
      const filtered = filterSet.filterRows(rows);
      expect(filtered.length).toEqual(2);
      expect(filtered[0].subject).toEqual(
        'Appropriation, to Com. on Bathhouse & c.'
      );
      expect(filtered[1].subject).toEqual(
        'Bath & Wash House, $100 appropriated for experiments respecting'
      );
    });
    test('you cannot do AND searches on a single filter', () => {
      filterSet.setValue('subject_one', 'bath house');
      const filtered = filterSet.filterRows(rows);
      expect(filtered.length).toEqual(0);
    });
    test.skip('you can do OR searches', () => {
      filterSet.setValue('subject_one', 'bath');
      filterSet.setValue('subject_two', 'house');
      const filtered = filterSet.filterRows(rows);
      expect(filtered.length).toEqual(3);
    });
  });
});
