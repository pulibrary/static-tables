import { parse } from '../../assets/js/csv-parse/sync.js';

export class DataService {
  static fetchData(url) {
    return fetch(url)
    .then(res => res.text())
    .then(data => {
      return parse(data, { columns: true });
    })
    .catch(err => {
      console.log(err)
    });
  }
}
