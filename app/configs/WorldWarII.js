export default {
  data_columns: [
    ['Name', 'name'],
    ['Rank and Branch of service', 'rank'],
    ['Date of Death', 'death_date'],
    ['Place of Death', 'place'],
    ['Class Year', 'year']
  ],
  data_filters: [
    {
      id: 'name',
      name: 'Name',
      type: 'text',
      aria_label: 'Alumnus or Princeton student full name',
      data_columns: ['name']
    },
    {
      id: 'rank',
      name: 'Rank/Branch of',
      type: 'text',
      aria_label: 'Rank/Branch of Service to filter by',
      data_columns: ['rank']
    },
    {
      id: 'death-date',
      name: 'Date of Death',
      type: 'text',
      aria_label: 'Date of Death to filter by',
      data_columns: ['death_date']
    },
    {
      id: 'place',
      name: 'Place of Death',
      type: 'text',
      aria_label: 'Place of Death to filter by',
      data_columns: ['place']
    },
    {
      id: 'class-year',
      name: 'Class Year',
      type: 'text',
      aria_label: 'Class Year to filter by',
      data_columns: ['year']
    }
  ],
  header_title: 'The Department of Special Collections',
  page_title: 'World War II Memorial Book',
  table_title: 'Browse Princeton Alumni Weekly Memorial',
  description: `<p>Provides the name, date and place of death, class year, and rank and branch of service for each Princeton student or alumnus who died in service to his country during the Second World War.</p><p>Please note: This index is not actively updated and may contain outdated or incorrect information. Nonetheless, it serves as a useful resource for locating historical information in our collections. If you have questions, please reach out to us through the <a href="https://library.princeton.edu/services/special-collections/ask-special-collections">Ask Special Collections form</a>.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_PhGijlYPCZzz6Jo4KfC2g2QradwezOL4bX6atGiwtRgcY6eMoGosLZoep3N-x888GYE5uAxBShXc/pub?output=csv'
};
