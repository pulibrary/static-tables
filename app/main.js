import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import HoneybadgerVue from '@honeybadger-io/vue';
import 'lux-design-system/dist/style.css';

const app = createApp(App);

const config = {
  apiKey: import.meta.env.VITE_HONEYBADGER_API_KEY,
  environment: import.meta.env.VITE_HONEYBADGER_ENV
};

app.use(HoneybadgerVue, config);

app.mount('#app');
