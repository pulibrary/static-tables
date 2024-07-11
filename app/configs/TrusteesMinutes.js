export default {
  // An array of two-item arrays. The inner arrays should have ['HeaderForDisplay', 'HeaderOnCsv']
  // for example ['First Name', 'fname']
  data_columns: [
    ['Subject', 'subject'],
    ['Volume', 'volume'],
    ['Page', 'page']
  ],
  // An array of objects
  // required strings: id, name, type, aria_label, data_column
  // optional function: options_generator
  data_filters: [
    {
      id: 'subject',
      name: 'Subject',
      type: 'text',
      aria_label: 'First subject for search',
      data_columns: ['subject']
    }
  ],
  header_title: '', // title for the site header (appears next to PUL logo)
  page_title: 'Trustees Minutes, 1746-1894', // title for page
  table_title: 'Browse Trustees Minutes', // title for table
  description: `<p>This index lists the general heading, specific subject heading, and the volume and page number for topics which may be found \
                within the first four volumes of the minutes of the Board of Trustees (1746-1894). This information was collected from two volumes \
                of indices created contemporaneously with the meeting minutes. Therefore, 18th and 19th-century spelling, terms, and usage have not \
                been altered.</p>\
                <p>The Mudd Manuscript Library would like to acknowledge the Friends of the Princeton University Library for their generous support \
                in making this database web-accessible.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_385Pys0S3JDwsS5aONfQwipOFG2F4E-pNRKP83PfaBJJLZlpebKk5Ef6xAt_Mnox_c3gMub62UF-/pub?gid=1148423002&single=true&output=csv' // link to google sheet with /pub?output=csv at the end
};
