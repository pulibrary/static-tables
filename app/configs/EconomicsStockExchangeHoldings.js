export default {
  data_columns: [
    ['Country', 'Country'],
    ['Exchange', 'Exchange'],
    ['Title', 'Title'],
    ['Call Number', 'Call number'],
    ['Last Bound', 'Last Bound'],
    ['Current Issues in PF', 'Current Issues in PF'],
    ['Web Site', 'Web Site'],
    ['Notes', 'Notes']
  ],
  data_filters: [
    {
      id: 'country',
      name: 'Country',
      type: 'text',
      aria_label: 'Country of Stock Exchange Holdings',
      data_columns: ['Country']
    },
    {
      id: 'title',
      name: 'Title',
      type: 'text',
      aria_label: 'Title of Stock Exchange Holdings',
      data_columns: ['Title']
    }
  ],
  header_title: 'Economics Stock Exchange Holdings',
  page_title: 'Economics Stock Exchange Holdings',
  table_title: 'Browse Economics Company Directories',
  description: '',
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDWuLL_x9yJH70etT2KKuRd2gb5F3RCpnaHfvHry5w36RPmsCPOVLTcopfzDf6V712LhpzdMyhRVUu/pub?output=csv'
};
