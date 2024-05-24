import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PaginatedTable from './components/PaginatedTable.js';
import Routes from './configs/Routes.js';

export default {
  name: 'App',
  components: {
    PaginatedTable,
    Header,
    Footer
  },
  computed: {
    metadataConfig() {
      const routePath = window.location.pathname
        .split('/')
        .filter(n => n)
        .pop();
      return Routes[routePath] || Routes['marquand-catalogs'];
    },
    sorterMethod() {
      const defaultSorter = () => 1;
      return this.metadataConfig.sorterMethod || defaultSorter;
    },
    bannerUrl() {
      return this.metadataConfig.banner_url || null;
    }
  },
  template: `
    <Header :title="metadataConfig.header_title"></Header>
    <main>
      <div class="container">
        <div class="container">
          <img v-if="bannerUrl" :src="bannerUrl" class="img-fluid banner" width="1200" height="265" alt="" />
          <h1 class="page-title bg-black text-white">{{ metadataConfig.page_title }}</h1>
        </div>
        <PaginatedTable
          :sorter="sorterMethod"
          :dataUrl="metadataConfig.data_sources"
          :dataColumns="metadataConfig.data_columns"
          :dataTableDescription="metadataConfig.description"
          :dataTableTitle="metadataConfig.table_title"
          :dataFilters="metadataConfig.data_filters"
        ></PaginatedTable>
      </div>
    </main>
    <Footer></Footer>`
};
