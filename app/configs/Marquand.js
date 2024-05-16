export default {
  data_columns: [
    ['Date', 'Date'],
    ['Auction House', 'Auction House'],
    ['City', 'City'],
    ['Sale', 'Sale #'],
    ['Name', 'Name'],
    ['Notes', 'Catalog']
  ],
  data_filters: [
    {
      id: 'date',
      name: 'Date',
      type: 'text',
      aria_label: 'Date to filter by',
      data_column: 'Date'
    },
    {
      id: 'name',
      name: 'Name',
      type: 'text',
      aria_label: 'Name of auction',
      data_column: 'Name'
    },
    {
      id: 'auction-house',
      name: 'Auction House',
      type: 'select',
      aria_label: 'Auction House to filter by',
      data_column: 'Auction House',
      options_generator: rows => {
        return [
          ...new Set(
            rows.map(row => {
              return row['Auction House'].trim();
            })
          )
        ];
      }
    },
    {
      id: 'city',
      name: 'City',
      type: 'select',
      aria_label: 'City to filter by',
      data_column: 'City',
      options_generator: rows => {
        return [
          ...new Set(
            rows.map(row => {
              return row.City.trim();
            })
          )
        ].filter(c => c !== '');
      }
    }
  ],
  header_title: 'Marquand Sales Catalogs',
  page_title: 'Marquand Library of Art and Archaeology',
  table_title: 'Browse Sales Catalogs',
  description: `<p>Questions about sale catalog holdings may be directed to a Marquand staff member in Firestone or <a href="mailto:marquand@princeton.edu">e-mail</a> with the specifics of what is needed. \
                Many current sales catalogs from Christie's, Sotheby's, Bonham's, Phillips, Swann, William Doyle and others have been boxed by city and date and are mostly off-site out at ReCAP (browse below). \
                These require 1-2 business days' notice at least and up to a week if many catalogs are needed. Marquand has many more catalogs from c. 1820s-1990s for more than 250 auction houses, both cataloged and un-cataloged. \
                Book and coin sales, unless mixed content, are handled by Special Collections in Firestone Library.</p>`,
  data_sources:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJirkpoJFVLXjXLkA2pe70Q6sIS5WrpUjcJuvIW69BkYb9d-yQzypsBmyiOYzjQbrj01Pa8pgXJhLh/pub?output=csv'
};
