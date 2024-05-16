export default {
  // An array of two-item arrays. The inner arrays should have ['HeaderForDisplay', 'HeaderOnCsv']
  // for example ['First Name', 'fname']
  data_columns: [['', '']],
  // An array of objects
  // required strings: id, name, type, aria_label, data_column
  // optional function: options_generator
  data_filters: [
    {
      id: '',
      name: '',
      type: '',
      aria_label: '',
      data_column: ''
    }
    // example with options_generator
    // {
    //   id: 'auction-house',
    //   name: 'Auction House',
    //   type: 'select',
    //   aria_label: 'Auction House to filter by',
    //   data_column: 'Auction House',
    //   options_generator: rows => {
    //     return [
    //       ...new Set(
    //         rows.map(row => {
    //           return row['Auction House'].trim();
    //         })
    //       )
    //     ];
    //   }
    // }
  ],
  header_title: '', // title for the site header (appears next to PUL logo)
  page_title: '', // title for page
  table_title: '', // title for table
  description: ``, // description for table - can include html tags
  data_sources: '' // link to google sheet with /pub?output=csv at the end
};
