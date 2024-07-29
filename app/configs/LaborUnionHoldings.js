export default {
  data_columns: [
    ['Title', 'Title'],
    ['Publisher', 'Publisher'],
    ['Holdings & Location', 'Holdings & Location'],
    ['Comments', 'Comments']
  ],
  data_filters: [
    {
      id: 'title',
      name: 'Title',
      type: 'text',
      aria_label: 'Title to search by',
      data_columns: ['Title']
    },
    {
      id: 'publisher',
      name: 'Publisher',
      type: 'text',
      aria_label: 'Publisher to search by',
      data_columns: ['Publisher']
    }
  ],
  header_title: 'Industrial Relations Labor Union Publications', // title for the site header (appears next to PUL logo)
  page_title: 'Industrial Relations Labor Union Publications', // title for page
  table_title: 'Labor Union Publications', // title for table
  description: `Current issues of the Industrial Relations Library union publications are shelved in the Current Periodicals area. The location of the bound volumes or microfilm of these titles are indicated below and in the <a href="https://catalog.princeton.edu">Catalog</a>.`, // description for table - can include html tags
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqwrSDj4diU3kzC78N7RQqD5Neme4XVDYnizG9k5MkdyAj1Z8n4Yn0dM5esWvF3ptZfATWjVjlOWSs/pub?gid=100892039&single=true&output=csv'
};
