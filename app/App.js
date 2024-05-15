import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PaginatedTable from './components/PaginatedTable.js';
import DataColumns from './configs/DataColumns.js';
import DataSources from './configs/DataSources.js';
import DataMetadata from './configs/DataMetadata.js';
import DataFilters from './configs/DataFilters.js';
import marquandBannerUrl from './assets/images/marquand-banner_0.jpg';
import { sortByDate } from './utilities/SortingUtilities.js';

// prettier-ignore
const routes = {
  'marquand': 'marquand',
  'faculty-and-professional-staff-index': 'faculty_and_staff'
};

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
      dataTableDescription: DataMetadata.marquand.description,
      dataTableTitle: DataMetadata.marquand.table_title,
      dataFilters: DataFilters.marquand,
      dataHeaderTitle: DataMetadata.marquand.header_title,
      bannerUrl: marquandBannerUrl
    };
  },
  computed: {
    currentConfig() {
      return DataMetadata[this.desiredRoute];
    },
    dataPageTitle() {
      return this.currentConfig.page_title;
    },
    desiredRoute() {
      const routePath = window.location.pathname.split('/').pop();
      return routes[routePath] || routes['marquand'];
    }
  },
  template: `
    <Header :title="dataHeaderTitle"></Header>
    <div class="container">
      <div class="container">
        <img :src="bannerUrl" class="img-fluid" width="1200" height="265" alt="geometric pattern" />
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
