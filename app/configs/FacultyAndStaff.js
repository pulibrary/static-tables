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
        return [
          ['AER', 'Aeronautical Engineering Department'],
          ['ANT', 'Anthropology Department'],
          ['ARC', 'Architecture School'],
          ['AAR', 'Art and Archaeology Department'],
          ['AST', 'Astrophysical Sciences Department'],
          ['BIO', 'Biology Department'],
          ['CHE', 'Chemical Engineering Department'],
          ['CHM', 'Chemistry Department'],
          ['CEO', 'Civil Engineering and Operations Research Department'],
          ['CLA', 'Classics Department'],
          ['COL', 'Comparative Literature Department'],
          ['COS', 'Computer Science Department'],
          ['CRE', 'Creative Writing Program'],
          ['EAS', 'East Asian Studies Department'],
          ['EEB', 'Ecology and Evolutionary Biology Department'],
          ['ECO', 'Economics Department'],
          ['EEN', 'Electrical Engineering Department'],
          ['EGI', 'Engineering, Basic Engineering Department'],
          ['ENG', 'English Department'],
          ['GEO', 'Geology Department'],
          ['GLL', 'Germanic Languages and Literature Department'],
          ['HIS', 'History Department'],
          ['IND', 'Independent Concentration'],
          ['MAT', 'Mathematics Department'],
          ['MEC', 'Mechanical and Aerospace Engineering Department'],
          ['MED', 'Medieval Studies Department'],
          ['MOL', 'Modern Languages Department'],
          ['MBI', 'Molecular Biology Department'],
          ['MUS', 'Music Department'],
          ['NES', 'Near Eastern Studies Department'],
          ['ORS', 'Oriental Studies Department'],
          ['PHI', 'Philosophy Department'],
          ['PHY', 'Physics Department'],
          ['POL', 'Politics Department'],
          ['PSY', 'Psychology Department'],
          ['REL', 'Religion Department'],
          ['RLL', 'Romance Languages and Literatures Department'],
          ['SLA', 'Slavic Languages and Literature Department'],
          ['SOC', 'Sociology Department'],
          ['HUM', 'Special Program in Humanities'],
          ['STA', 'Statistics Department'],
          ['THE', 'Theatre Department'],
          ['WWS', 'Princeton School of Public and International Affairs']
        ];
      }
    }
  ],
  header_title: 'Faculty and Professional Staff',
  page_title: 'Faculty and Professional Staff Index, 1764-2006',
  table_title: 'Browse Faculty and Professional Staff',
  description: `Index for Faculty & Professional Research, Technical & Library Personnel files, 1764-2004. Contains the name, death date, departure date, and department for Princeton University personnel. (Files for some trustees, administrators, and others may also be found). <a href="https://library.princeton.edu/special-collections/policies/access-policy-university-archives-collections">Explanation of&nbsp;Access to personnel files.</a>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vT6C8TSC7172snyq5ahuuZskizCxTCOFV1H6CPjCxd2Q9ui4Rr_kM86x3fzkmrjsr3PP1mPXAj_IzaQ/pub?gid=156830145&single=true&output=csv'
};
