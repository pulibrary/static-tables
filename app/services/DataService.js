import Papa from 'papaparse';

export class DataService {
  static fetchData(url, callback) {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: function (results) {
        callback(results.data);
      }
    });
  }
}
