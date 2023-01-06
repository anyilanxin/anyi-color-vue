import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
// Register icon sprite
import App from './App.vue';
import AnYiColorVue from '../src';
import '@arco-design/web-vue/dist/arco.css';

createApp(App).use(ArcoVue).use(AnYiColorVue).mount('#app');
