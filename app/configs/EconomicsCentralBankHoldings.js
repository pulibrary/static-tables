export default {
  data_columns: [
    ['Region', 'Region'],
    ['Bank Name', 'Bank Name'],
    ['Title', 'Title'],
    ['Call number', 'Call number'],
    ['Last Bound', 'Last Bound'],
    ['Current Issues in PF', 'Current Issues in PF'],
    ['Bank WebSite', 'Bank WebSite'],
    ['Notes', 'Notes']
  ],
  data_filters: [
    {
      id: 'region',
      name: 'Region',
      type: 'text',
      aria_label: 'Region of the Central Bank Holdings',
      data_columns: ['Region']
    },
    {
      id: 'bank-name',
      name: 'Bank Name',
      type: 'text',
      aria_label: 'Bank Name of the Central Bank Holdings',
      data_columns: ['Bank Name']
    },
    {
      id: 'title',
      name: 'Title',
      type: 'text',
      aria_label: 'Title of the Central Bank Holdings',
      data_columns: ['Title']
    }
  ],
  header_title: 'Economics Central Bank Holdings',
  page_title: 'Economics Central Bank Holdings',
  table_title: 'Browse Economics Central Bank Holdings',
  description: '',
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSCEidoWUHyuJ5N-2LNne99Nb8Hpmbsp2CjoLBNQP3M0JfW0hLMSQGilJDGAUoAB-afu0pl87obXUMC/pub?output=csv'
};
