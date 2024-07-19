export default {
  data_columns: [
    ['Publisher', 'Publisher'],
    ['Title', 'Title'],
    ['Continues', 'Continues'],
    ['Call Number', 'Call Number'],
    ['Bound Holdings', 'Bound Holdings'],
    ['Unbound Holdings', 'Unbound Holdings']
  ],
  data_filters: [
    {
      id: 'title',
      name: 'Title',
      type: 'text',
      aria_label: 'Title of working paper',
      data_columns: ['Title']
    },
    {
      id: 'publisher',
      name: 'Publisher',
      type: 'select',
      aria_label: 'Publisher of working paper',
      data_columns: ['Publisher'],
      options_generator: rows => {
        return [
          ...new Set(
            rows.map(row => {
              return row['Publisher'].trim();
            })
          )
        ].map(value => [value, value]);
      }
    }
  ],
  header_title: 'Economics Working Papers Data Sets',
  page_title: 'Economics Working Papers',
  table_title: 'Browse Working Papers',
  description:
    'While most recent working papers are now freely available online, Princeton has historical collections in paper and microfilm. Any questions can be directed to <a href="mailto:bordelon@princeton.edu">bordelon@Princeton.edu</a>',
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vShRFRLg6w_R9X-RxFJzPzTm2WT0RGbT0aUKYPl3mDuAqCJpQWG0rtnOMWRcIim5jJ63Y6ZMQ_zBlwY/pub?output=csv'
};
