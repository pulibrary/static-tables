export default {
  // An array of two-item arrays. The inner arrays should have ['HeaderForDisplay', 'HeaderOnCsv']
  // for example ['First Name', 'fname']
  data_columns: [
    ['Last Name', 'lname'],
    ['First Name', 'fname'],
    ['Class Year', 'year'],
    ['Graduate', 'graduate'],
    ['Photos', 'photos'],
    ['Oversize', 'oversize'],
    ['Box', 'box']
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
      data_columns: ['lname']
    },
    {
      id: 'first-name',
      name: 'First Name',
      type: 'text',
      aria_label: 'First Name for search',
      data_columns: ['fname']
    },
    {
      id: 'class-year',
      name: 'Class Year',
      type: 'text',
      aria_label: 'Class Year for search',
      data_columns: ['year']
    }
  ],
  header_title: '', // title for the site header (appears next to PUL logo)
  page_title: 'Undergraduate Alumni Index, 1748-1920', // title for page
  table_title: 'Browse Undergraduate Alumni, 1748-1920', // title for table
  description: `<p>Index for all undergraduate alumni from the Princeton classes of 1748 to 1920. There is some non-graduate information for individuals through the Class of 1947. Provides the name, class year, and graduation status of alumni, and note if photos or images of the individual exist. It also lists the number of the box in which biographical information can be found within the Undergraduate Alumni Files held at the Mudd Manuscript Library.</p>`, // description for table - can include html tags
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRGl0mvredbe3Prz52Clty9DAPw9rX9G-bRH5Jo1L6vl-SsEL-mu083N6FFaokrYzcKywV_mZ-Ti_qu/pub?gid=1243476553&single=true&output=csv'
};
