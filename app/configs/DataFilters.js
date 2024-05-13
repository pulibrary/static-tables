export default {
  marquand: [
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
  ]
};
