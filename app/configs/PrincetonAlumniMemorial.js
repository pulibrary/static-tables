export default {
  data_columns: [
    ['Name', 'subject'],
    ['Undg Class', 'class_year'],
    ['Grad Class', 'class_grade'],
    ['Publication', 'publication'],
    ['Volume', 'volume'],
    ['No', 'no'],
    ['Date', 'publish_date'],
    ['Page', 'page']
  ],
  data_filters: [
    {
      id: 'name',
      name: 'Name',
      type: 'text',
      aria_label: 'Alumni full name',
      data_column: 'subject'
    },
    {
      id: 'class-year',
      name: 'Undg Class',
      type: 'text',
      aria_label: 'Undergraduate Class Year to filter by',
      data_column: 'class_year'
    },
    {
      id: 'class-grade',
      name: 'Grad Class',
      type: 'text',
      aria_label: 'Graduate Class Year to filter by',
      data_column: 'class_grade'
    }
  ],
  header_title: 'The Department of Special Collections',
  page_title: 'Princeton Alumni Weekly Memorial Index, 1894-2011',
  table_title: 'Browse Princeton Alumni Weekly Memorial',
  description: `<p>Covers all alumni for whom obituaries appeared in the Princeton Alumni Weekly and its predecessor, the Alumni Princetonian, between April 1894 and July 2011. Includes some faculty and honorary class members.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQolIZqKCTZO7sMU_AGEIaJXXtLS65iR2Q7cMIcVkVPi5eCt_55R7WaaRgfrCCMvQYqvFS9JkkQgAyR/pub?output=csv'
};
