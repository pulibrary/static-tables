import { describe, test, expect, vi } from 'vitest';
import { DataService } from './DataService';

global.fetch = vi.fn();

describe('DataService', () => {
  describe('fetchData()', () => {
    test.skip('it retrieves data from the google doc', async () => {
      const expected = [
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
      ];
      const csv =
        "ID,Date,Auction House,City,Sale #,Name,Catalog\r\n0,19-Jan-00,Christie's East,New York,8337,American Vision: Painting and Decorative Arts,Christie's East-(Firm) Box 6\r\n1,21-Jan-00,Christie's,New York,9314,Important American Furniture,Christie's New York-3 Box 23\r\n2,21-Jan-00,Christie's,New York,9426,The Joseph and Bathsheba Pope Valuables Cabinet,Christie's New York-3 Box 23\r\n3,21-22-Jan-00,Sotheby's,New York,7420,Important Americana,Sotheby's New York-4 Box 35";

      function createFetchResponse(data) {
        return { text: () => new Promise(resolve => resolve(data)) };
      }

      fetch.mockResolvedValue(createFetchResponse(csv));

      const catalogs = await DataService.fetchData('www.example.com');

      expect(fetch).toHaveBeenCalledWith('www.example.com');

      expect(catalogs).toEqual(expected);
    });
  });
});
