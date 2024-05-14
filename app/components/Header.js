import logo from '../assets/images/pul-logo-new.svg';

export default {
  name: 'Header',
  props: {
    title: String
  },
  template: `
    <div class="header navbar navbar-dark bg-black">
      <div class="container-fluid">
        <a class="navbar-brand h1" href="#">
          <img :src="logo" alt="" class="img-responsive d-inline-block align-text-center">
          <span class="header-title navbar-text">{{ title }}</span>
        </a>
      </div>
    </div>`,
  data() {
    return {
      logo: logo
    };
  }
};
