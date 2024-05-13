export default {
  name: 'Header',
  props: {
    title: String
  },
  template: `
    <div class="header navbar navbar-dark bg-black">
      <div class="container-fluid">
        <a class="navbar-brand h1" href="#">
<<<<<<< HEAD
          <img src="./assets/images/pul-logo-new.svg" alt="" class="img-responsive d-inline-block align-text-center">
          <span class="header-title navbar-text">{{ title }}</span>
=======
          <img src="./app/assets/images/pul-logo-new.svg" alt="" class="img-responsive d-inline-block align-text-center">
          <span class="navbar-text">Marquand Sales Catalogs</span>
>>>>>>> d8bf48a (Moved assets and using port 5173)
        </a>
      </div>
    </div>`
};
