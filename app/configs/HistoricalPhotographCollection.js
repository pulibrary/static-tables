import Shared from './Shared';

export default {
  // An array of two-item arrays. The inner arrays should have ['HeaderForDisplay', 'HeaderOnCsv']
  // for example ['First Name', 'fname']
  data_columns: [
    ['Division', 'division'],
    ['Box', 'box'],
    ['Item #', 'item_num'],
    ['Subseries', 'subseries'],
    ['General Subject', 'general_sub'],
    ['Specific Subject', 'specific_sub'],
    ['Notes', 'notes'],
    ['Dates', 'date_taken'],
    ['Publication', 'publication'],
    ['Photographer', 'photographer'],
    ['Image Type', 'image_type'],
    ['Negative #', 'negative_num'],
    ['Image #', 'image_num'],
    ['Provenance', 'provenance'],
    ['Online Image', 'online_image']
  ],
  // An array of objects
  // required strings: id, name, type, aria_label, data_column
  // optional function: options_generator
  data_filters: [
    {
      id: 'subject',
      name: 'Subject',
      type: 'text',
      // concatenated_subjects is not displayed, it's a column
      // in the CSV that uses a formula to combine the
      // general_sub and specific_sub columns
      data_column: 'concatenated_subjects'
    },
    {
      id: 'division',
      name: 'Division',
      type: 'select',
      data_column: 'division',
      options_generator: Shared.valuesFromColumn('division')
    },
    {
      id: 'photographer',
      name: 'Photographer',
      type: 'text',
      data_column: 'photographer'
    },
    {
      id: 'image_type',
      name: 'Image Type',
      type: 'select',
      data_column: 'image_type',
      options_generator: () => {
        return [
          ['Albumen', 'Albumen'],
          ['Ambrotype', 'Ambrotype'],
          ['Carte de Visite', 'Carte de Visite'],
          ['Collodion', 'Collodion'],
          ['Cyanotype', 'Cyanotype'],
          ['Daguerreotype', 'Daguerreotype'],
          ['Gelatin developing-out paper', 'Gelatin developing-out paper'],
          ['Gelatin printing-out paper', 'Gelatin printing-out paper'],
          [
            'Matte collodion with gold and platinum toning',
            'Matte collodion with gold and platinum toning'
          ],
          ['Negative', 'Negative'],
          ['Paper print', 'Paper print'],
          ['Paper (proof sheet)', 'Paper (proof sheet)'],
          ['Paper (color)', 'Paper (color)'],
          ['Paper (proof sheet, color)', 'Paper (proof sheet, color)'],
          ['Platinotype', 'Platinotype'],
          ['Silver gelatin', 'Silver gelatin'],
          ['Stereograph', 'Stereograph'],
          ['Tintype', 'Tintype']
        ];
      }
    }
  ],
  header_title: 'Special Collections', // title for the site header (appears next to PUL logo)
  page_title: 'Princeton University Historical Photograph Collection', // title for page
  table_title: 'Browse Princeton University Historical Photograph Collection', // title for table
  description: `<p>This database contains descriptive information on over 20,000 photographs found within the University Archives Historical Photograph Collection. You may conduct a keyword search to retrieve a listing of photographs that meet your criteria. Information returned will include a general description of the photograph along with pertinent details, such as dates, photographer, and image type, as well as the collection, box, and image number. In addition to this database, finding aids for some divisions (Campus Life, Grounds and Buildings, andStudent Photograph Albums) of the Historical Photograph Collection are available on the web. Furthermore, this database does not include all the photographs extant within the University Archives. Additional information will be added as photos are cataloged.</p>
                <p>The Mudd Manuscript Library would like to acknowledge the Friends of the Princeton University Library for their generous support in making this database web-accessible.</p>`, // description for table - can include html tags
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpS593dqJb1MOn8CGIdQmQhc0c6kSOj_8vjwFi6wRjopVknmYKaePMCyburNl2DNJura16aYBH0ara/pub?gid=856275511&single=true&output=csv'
};
