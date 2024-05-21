export default {
  department_options: [
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
  ],
  // A function that returns another function, suitable for use
  // as an options_generator
  valuesFromColumn: column => {
    return rows => {
      return [
        ...new Set(
          rows.map(row => {
            return row[column].trim();
          })
        )
      ]
        .filter(c => c !== '')
        .map(value => [value, value])
        .sort();
    };
  }
};
