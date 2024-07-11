export default {
  data_columns: [
    ['First Name', 'fname'],
    ['Last Name', 'lname'],
    ['Degree', 'degree'],
    ['Year Awarded', 'year'],
    ['Year of Death', 'death'],
    ['File', 'file']
  ],
  data_filters: [
    {
      id: 'first-name',
      name: 'First Name',
      type: 'text',
      aria_label: 'First Name to filter by',
      data_columns: ['fname']
    },
    {
      id: 'last-name',
      name: 'Last Name',
      type: 'text',
      aria_label: 'Last Name to filter by',
      data_columns: ['lname']
    },
    {
      id: 'year',
      name: 'Year Received',
      type: 'text',
      aria_label: 'Year Received',
      data_columns: ['year']
    }
  ],
  header_title: 'The Department of Special Collections',
  page_title: 'Honorary Degree Recipients, 1748-2001',
  table_title: 'Browse Honorary Degree Recipients',
  description: `<p>Lists honorary degree recipients for the years 1748-2001, the date the degree was awarded, the date of the individual's death (if known), the degree received, and the existence of an informational folder in the Honorary Degree Records the Mudd Manuscript Library.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgZTSBRVuT3EZVegY1wAPpjgqV_TJvHAqbuLiWj7eAuPAk3UNpFkgzjxZEK3RwPzJi3Log0sdwRwaX/pub?output=csv'
};
