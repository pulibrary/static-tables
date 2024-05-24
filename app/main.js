import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import HoneybadgerVue from '@honeybadger-io/vue';
import Honeybadger from '@honeybadger-io/js';
import 'lux-design-system/dist/style.css';

const app = createApp(App);

const config = {
  apiKey: env.VITE_HONEYBADGER_API_KEY,
  environment: env.VITE_HONEYBADGER_ENV
};

app.use(HoneybadgerVue, config);

app.mount('#app');

// TODO: Remove after testing
Honeybadger.notify('Testing Honeybadger!');
