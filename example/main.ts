import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
// Register icon sprite
import App from './App.vue';
import AnYiProcessEE from '../src';
import '@arco-design/web-vue/dist/arco.css';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js-color-picker/colors/color-picker.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css';
import 'bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css';
import 'diagram-js-minimap/assets/diagram-js-minimap.css';
import 'bpmn-js-bpmnlint/dist/assets/css/bpmn-js-bpmnlint.css';

createApp(App).use(ArcoVue).use(AnYiProcessEE).mount('#app');
