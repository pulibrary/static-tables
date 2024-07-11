export default {
  // An array of two-item arrays. The inner arrays should have ['HeaderForDisplay', 'HeaderOnCsv']
  // for example ['First Name', 'fname']
  data_columns: [
    ['Full Name', 'full_name'],
    ['Trustee Type', 'trustee_type'],
    ['Dates of Service', 'dates_of_service'],
    ['University Status', 'university_status'],
    ['First Year', 'first_year']
  ],
  // An array of objects
  // required strings: id, name, type, aria_label, data_column
  // optional function: options_generator
  data_filters: [
    {
      id: 'trustee-name',
      name: 'Trustee Name',
      type: 'text',
      aria_label: 'Trustee name to filter by',
      data_columns: ['full_name']
    },
    {
      id: 'trustee-type',
      name: 'Trustee Type',
      type: 'search-select',
      aria_label: 'Trustee Type to filter by',
      data_columns: ['trustee_type'],
      options_generator: () => [
        ['Alumni', 'Alumni'],
        ['Charter', 'Charter'],
        ['ex Officio', 'ex Officio'],
        ['Term', 'Term'],
        ['President', 'President'],
        ['Governor', 'Governor']
      ]
    }
  ],
  header_title: '', // title for the site header (appears next to PUL logo)
  page_title: 'Trustee Index, 1746-2001', // title for page
  table_title: 'Browse Trustees', // title for table
  description: `<p>Indexes the names of those who have served on the Princeton University Board of Trustees from 1746-2001. Contains dates and type of service, and Princeton class affiliation, if applicable, for each University trustee. Those trustees labeled as current were serving as of 2001.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQI4uYn9QlDCTfc4CiHko25CvuqPSe8HRKRDKcuDLT2SS1JNYpjTiMe3PjvfFE-LR7Ea8bzwrVFPNgd/pub?gid=1480844741&single=true&output=csv'
};
