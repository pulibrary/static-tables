import { sortByName } from '../utilities/SortingUtilities';

export default {
  // An array of two-item arrays. The inner arrays should have ['HeaderForDisplay', 'HeaderOnCsv']
  // for example ['First Name', 'fname']
  data_columns: [
    ['Last Name', 'lname'],
    ['First Name', 'fname'],
    ['Class Year', 'year'],
    ['Public File', 'pubfile'],
    ['Academic File', 'academicfile']
  ],
  // An array of objects
  // required strings: id, name, type, aria_label, data_column
  // optional function: options_generator
  data_filters: [
    {
      id: 'last-name',
      name: 'Last Name',
      type: 'text',
      aria_label: 'Last Name for search',
      data_column: 'lname'
    },
    {
      id: 'first-name',
      name: 'First Name',
      type: 'text',
      aria_label: 'First Name for search',
      data_column: 'fname'
    },
    {
      id: 'class-year',
      name: 'Class Year',
      type: 'text',
      aria_label: 'Class Year for search',
      data_column: 'year'
    }
  ],
  sorterMethod: sortByName,
  header_title: '', // title for the site header (appears next to PUL logo)
  page_title: 'Undergraduate Alumni Index, 1921-2015', // title for page
  table_title: 'Browse Undergraduate Alumni, 1921-2015', // title for table
  description: `<p>Index for undergraduate alumni from the classes of 1921 to 2015. Provides the name, class year, type of file available, and relevant box number for records found in the Mudd Manuscript Library. Undergraduate records from this period are kept in two series: the <em>Bureau of Alumni Records Public Information Files</em> and the <em>Dean of the College Undergraduate Academic Files</em>.</p>`, // description for table - can include html tags
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfusqZoYTJupe7q9eFx6IO7zpyx4sILrwBugftYs5o2cgwamFwnkZ0qJfk6_AgdboQGJsSrsb4mfVM/pub?gid=1803047540&single=true&output=csv'
};
