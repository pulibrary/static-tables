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
      bannerUrl: marquandBannerUrl
    };
  },
  computed: {
    metadataConfig() {
      return DataMetadata[this.desiredRoute];
    },
    desiredRoute() {
      const routePath = window.location.pathname.split('/').pop();
      return routes[routePath] || routes['marquand'];
    },
    dataUrl() {
      return DataSources[this.desiredRoute];
    },
    dataColumns() {
      return DataColumns[this.desiredRoute];
    },
    dataFilters() {
      return DataFilters[this.desiredRoute];
    },
    sorterMethod() {
      if (this.desiredRoute === 'marquand') {
        return sortByDate;
      } else {
        return (a, b) => {
          return -1;
        };
      }
    }
  },
  template: `
    <Header :title="metadataConfig.header_title"></Header>
    <div class="container">
      <div class="container">
        <img :src="bannerUrl" class="img-fluid" width="1200" height="265" alt="geometric pattern" />
        <h2 class="page-title bg-black text-white">{{ metadataConfig.page_title }}</h2>
      </div>
      <PaginatedTable
        :sorter="sorterMethod"
        :dataUrl="dataUrl"
        :dataColumns="dataColumns"
        :dataTableDescription="metadataConfig.description"
        :dataTableTitle="metadataConfig.table_title"
        :dataFilters="dataFilters"
      ></PaginatedTable>
    </div>
    <Footer></Footer>`
};
