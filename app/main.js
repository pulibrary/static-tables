import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'lux-design-system/dist/style.css';

const app = createApp(App);

app.mount('#app');
