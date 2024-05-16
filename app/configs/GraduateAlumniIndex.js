import SharedConfig from './Shared';

export default {
  data_columns: [
    ['Last Name', 'lastname'],
    ['First Name', 'firstname'],
    ['Year', 'year'],
    ['Department', 'department'],
    ['Death Date', 'deathdate'],
    ['Photos', 'photos'],
    ['Box', 'box'],
    ['Oversize', 'oversize']
  ],
  data_filters: [
    {
      id: 'last-name',
      name: 'Last Name',
      type: 'text',
      aria_label: 'Last Name to search by',
      data_column: 'lastname'
    },
    {
      id: 'first-name',
      name: 'First Name',
      type: 'text',
      aria_label: 'First Name to search by',
      data_column: 'firstname'
    },
    {
      id: 'graduation-date',
      name: 'Graduation Date',
      type: 'text',
      aria_label: 'Graduation Date to search by',
      data_column: 'year'
    },
    {
      id: 'department-code',
      name: 'Department Code',
      type: 'select',
      aria_label: 'Department code to filter by',
      data_column: 'department',
      options_generator: () => {
        return SharedConfig.department_options;
      }
    }
  ],
  header_title: 'Graduate Alumni Index', // title for the site header (appears next to PUL logo)
  page_title: 'Princeton University Graduate Alumni Index, 1839-1998', // title for page
  table_title: '', // title for table
  description: `<p>Index of graduate alumni from 1839 to 1998. Provides the name, graduate school class, department, and death date, if any, of alumni, as well as note if photographs of the individual exist. Please note that for more recent graduates, files may not have yet been transferred to the Mudd Manuscript Library and therefore will not be found in this database.</p>\
                <p>In addition, much, if not all, of living graduates' files are closed to conform with personal privacy law established under the Family Educational Rights and Privacy Act (the Buckley Amendment) of 1974. These records open 5 years after an individual's death.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vT32SMAsuvzUwK7mBPRiSViim_zezSB4ZDUjYxiVEiwy7K-2EzwIKRTeYPqy-MuNlJH-XegCfswrDY8/pub?gid=342159918&single=true&output=csv'
};
