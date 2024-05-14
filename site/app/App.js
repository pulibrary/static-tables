import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PaginatedTable from './components/PaginatedTable.js';
import DataColumns from './configs/DataColumns.js';
import DataSources from './configs/DataSources.js';
import DataTableDescription from './configs/DataTableDescription.js';
import DataTableTitle from './configs/DataTableTitle.js';
import DataFilters from './configs/DataFilters.js';
import DataPageTitle from './configs/DataPageTitle.js';
import DataHeaderTitle from './configs/DataHeaderTitle.js';
import { sortByDate } from './utilities/SortingUtilities.js';

export default {
  name: 'App',
  components: {
    PaginatedTable,
    Header,
    Footer
  },
  data() {
    return {
      sorterMethod: sortByDate,
      dataUrl: DataSources.marquand,
      dataColumns: DataColumns.marquand,
      dataTableDescription: DataTableDescription.marquand,
      dataTableTitle: DataTableTitle.marquand,
      dataFilters: DataFilters.marquand,
      dataPageTitle: DataPageTitle.marquand,
      dataHeaderTitle: DataHeaderTitle.marquand
    };
  },
  template: `
    <Header :title="dataHeaderTitle"></Header>
    <div class="container">
      <div class="container">
        <img :src="'./assets/images/marquand-banner_0.jpg'" class="img-fluid" width="1200" height="265" alt="geometric pattern" />
        <h2 class="page-title bg-black text-white">{{ dataPageTitle }}</h2>
      </div>
      <PaginatedTable
        :sorter="sorterMethod"
        :dataUrl="dataUrl"
        :dataColumns="dataColumns"
        :dataTableDescription="dataTableDescription"
        :dataTableTitle="dataTableTitle"
        :dataFilters="dataFilters"
      ></PaginatedTable>
    </div>
    <Footer></Footer>`
};
