export default {
  marquand: [
    {
      id: 'auction-house',
      name: 'Auction House',
      aria_label: 'Auction House to filter by',
      data_column: 'Auction House',
      model: 'auctionHouse',
      options_method: 'auctionHouseOptions'
    },
    {
      id: 'city',
      name: 'City',
      aria_label: 'City to filter by',
      data_column: 'City',
      model: 'city',
      options_method: 'cityOptions'
    }
  ]
};
