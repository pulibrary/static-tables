export default {
  data_columns: [
    ['Title', 'Title'],
    ['Covers', 'Covers'],
    ['Print', 'Print'],
    ['Call Number', 'Call number'],
    ['Electronic', 'Electronic']
  ],
  data_filters: [
    {
      id: 'title',
      name: 'Title',
      type: 'text',
      aria_label: 'Title of company directory',
      data_columns: ['Title']
    }
  ],
  header_title: 'Economics Company Directories',
  page_title: 'Economics Company Directories',
  table_title: 'Browse Economics Company Directories',
  description: '',
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSmzmRiQl8KEONh-3r5gF6t57AMP5t3AxR2909EDUhXP6T9oG9Uq22Wse4G49AH7CYKnubZb2AfZu4u/pub?output=csv'
};
