import { describe, test, expect } from 'vitest';
import { FilterSet } from './FilterSet';

describe('FilterSet', () => {
  test('you can set values of filters', () => {
    const filterSet = new FilterSet([
      { id: 'name', type: 'text', data_column: 'Name' },
      { id: 'city', type: 'select', data_column: 'City' }
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
});
