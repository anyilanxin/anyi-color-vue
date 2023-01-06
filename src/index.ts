import { App } from 'vue';
import AnYiChrome from './AnYiChrome';
import AnYiSketch from './AnYiSketch';
import AnYiPhotoshop from './AnYiPhotoshop';
import AnYiTwitter from './AnYiTwitter';

import './styles/index.less';
const components = {
  AnYiChrome,
  AnYiSketch,
  AnYiPhotoshop,
  AnYiTwitter,
};

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export { AnYiChrome, AnYiSketch, AnYiPhotoshop, AnYiTwitter };

const Components = {
  ...components,
  install,
};

export default Components;
