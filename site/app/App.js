import Footer from './components/Footer.js';
import Header from './components/Header.js';
import PaginatedTable from './components/PaginatedTable.js';

export default {
  name: 'App',
  components: {
    PaginatedTable,
    Header,
    Footer
  },
  template: `
    <Header></Header>
    <div class="container">
      <div class="container">
        <img :src="'./assets/images/marquand-banner_0.jpg'" class="img-fluid" width="1200" height="265" alt="geometric pattern" />
        <h2 class="bg-black text-white">Marquand Library of Art and Archaeology</h2>
      </div>
      <PaginatedTable></PaginatedTable>
    </div>
    <Footer></Footer>`
}
