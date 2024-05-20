import { describe, test, expect } from 'vitest';
import { sortByDate, sortByName } from './SortingUtilities';

describe('SortingUtilities', () => {
  describe('sortByDate()', () => {
    test("it sorts using Marquand's date format", () => {
      const sortedData = [
        {
          Date: '25-May-23',
          name: 'Mario Buatta: Prince of Interiors Volume One'
        },
        {
          Date: '11-17-Oct-22',
          name: "Alfred Stieglitz, Georgia O'Keefe, Juan Hamilton: Passage"
        },
        { Date: '23-24-Jan-20', name: 'African-American Fine Art' }
      ];
      const unsortedData = [
        {
          Date: '25-May-23',
          name: 'Mario Buatta: Prince of Interiors Volume One'
        },
        { Date: '23-24-Jan-20', name: 'African-American Fine Art' },
        {
          Date: '11-17-Oct-22',
          name: "Alfred Stieglitz, Georgia O'Keefe, Juan Hamilton: Passage"
        }
      ];

      expect(unsortedData.sort(sortByDate)).toEqual(sortedData);
    });
  });
  describe('sortByName()', () => {
    test('it sorts by last then first name', () => {
      const unsortedData = [
        { lname: 'Fox', fname: 'Jeanne M.' },
        { lname: 'Fernandez-Cifuentes', fname: 'Luis' },
        { lname: 'Freeland', fname: 'Stephen John' },
        { lname: 'Fox', fname: 'Annette B.' }
      ];
      const sortedData = [
        { lname: 'Fernandez-Cifuentes', fname: 'Luis' },
        { lname: 'Fox', fname: 'Annette B.' },
        { lname: 'Fox', fname: 'Jeanne M.' },
        { lname: 'Freeland', fname: 'Stephen John' }
      ];
      expect(unsortedData.sort(sortByName)).toEqual(sortedData);
    });
  });
});
