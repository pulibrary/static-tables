import SharedConfig from './Shared';
import { sortByName } from '../utilities/SortingUtilities';

export default {
  data_columns: [
    ['Last Name', 'lname'],
    ['First Name', 'fname'],
    ['Department', 'dept'],
    ['Death Date', 'death'],
    ['Departure from University', 'leave'],
    ['Box Number', 'box']
  ],
  data_filters: [
    {
      id: 'last-name',
      name: 'Last Name',
      type: 'text',
      data_column: 'lname'
    },
    {
      id: 'first-name',
      name: 'First Name',
      type: 'text',
      data_column: 'fname'
    },
    {
      id: 'department',
      name: 'Department',
      type: 'select',
      data_column: 'dept',
      options_generator: () => {
        return SharedConfig.department_options;
      }
    }
  ],
  sorter_method: sortByName,
  header_title: 'Faculty and Professional Staff',
  page_title: 'Faculty and Professional Staff Index, 1764-2006',
  table_title: 'Browse Faculty and Professional Staff',
  description: `Index for Faculty & Professional Research, Technical & Library Personnel files, 1764-2004. Contains the name, death date, departure date, and department for Princeton University personnel. (Files for some trustees, administrators, and others may also be found). <a href="https://library.princeton.edu/special-collections/policies/access-policy-university-archives-collections">Explanation of&nbsp;Access to personnel files.</a>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vT6C8TSC7172snyq5ahuuZskizCxTCOFV1H6CPjCxd2Q9ui4Rr_kM86x3fzkmrjsr3PP1mPXAj_IzaQ/pub?gid=156830145&single=true&output=csv'
};
