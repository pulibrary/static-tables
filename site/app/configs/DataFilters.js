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
      options_method: 'auctionHouseOptions'
    },
    {
      id: 'city',
      name: 'City',
      type: 'select',
      aria_label: 'City to filter by',
      data_column: 'City',
      options_method: 'cityOptions'
    }
  ]
};
