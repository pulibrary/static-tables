export default {
  data_columns: [
    ['Name', 'name'],
    ['Rank and Branch of service', 'rank'],
    ['Year of Death', 'death_date'],
    ['Place of Death', 'place'],
    ['Class Year', 'year']
  ],
  data_filters: [
    {
      id: 'name',
      name: 'Name',
      type: 'text',
      aria_label: 'Alumnus or Princeton student full name',
      data_column: 'name'
    },
    {
      id: 'rank',
      name: 'Rank/Branch of',
      type: 'text',
      aria_label: 'Rank/Branch of Service to filter by',
      data_column: 'rank'
    },
    {
      id: 'death-date',
      name: 'Year of Death',
      type: 'text',
      aria_label: 'Year of Death to filter by',
      data_column: 'death_date'
    },
    {
      id: 'place',
      name: 'Place of Death',
      type: 'text',
      aria_label: 'Place of Death to filter by',
      data_column: 'place'
    },
    {
      id: 'class-year',
      name: 'Class Year',
      type: 'text',
      aria_label: 'Class Year to filter by',
      data_column: 'year'
    }
  ],
  header_title: 'The Department of Special Collections',
  page_title: 'World War II Memorial Book',
  table_title: 'Browse Princeton Alumni Weekly Memorial',
  description: `<p>Provides the name, date and place of death, class year, and rank and branch of service for each Princeton student or alumnus who died in service to his country during the Second World War.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_PhGijlYPCZzz6Jo4KfC2g2QradwezOL4bX6atGiwtRgcY6eMoGosLZoep3N-x888GYE5uAxBShXc/pub?output=csv'
};
