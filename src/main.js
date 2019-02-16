import Vue from 'vue';
import axios from 'axios';
import createStore from './store';
import configMixin from './util/config-mixin';
import Mapboard from './components/Mapboard.vue';
import mergeDeep from './util/merge-deep';
import generateUniqueId from './util/unique-id';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';
import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity';
import { faGavel } from '@fortawesome/free-solid-svg-icons/faGavel';
library.add(faSpinner, faBook, faWrench, faUniversity, faGavel);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import philaVueDatafetch from '@philly/vue-datafetch';
const controllerMixin = philaVueDatafetch.controllerMixin;

// helper function to auto-assign ids to horizontal tables
function assignTableIds(comps) {
  for (let comp of comps) {
    const options = comp.options || {};
    const innerComps = options.components || options.tables;

    // if this is a "group" component, recurse
    if (innerComps) {
      assignTableIds(innerComps);
      // return;
    }

    // skip comps that aren't horizontal tables
    if (comp.type !== 'horizontal-table') {
      continue;
    }

     const id = generateUniqueId();
     comp._id = id;
     // the id also needs to get passed to the horizontal table component, so
     // use the options object.
     comp.options.tableId = id;
  }
}

function assignHorizontalTableGroupIds(comps) {
  for (let comp of comps) {
    const options = comp.options || {};
    const innerComps = options.tables;

    // if this is a "group" component, recurse
    if (!innerComps) {
      continue;
    }

    // skip comps that aren't horizontal table groups
    if (comp.type !== 'horizontal-table-group') {
      continue;
    }

     const id = generateUniqueId();
     comp._id = id;
     // the id also needs to get passed to the horizontal table component, so
     // use the options object.
     comp.options.horizontalTableGroupId = id;
  }
}

function initMapboard(clientConfig) {
  const baseConfigUrl = clientConfig.baseConfig;
  // console.log('baseConfigUrl:', baseConfigUrl);

  // get base config
  return axios.get(baseConfigUrl).then(response => {
    // console.log('in axios, clientConfig:', clientConfig);
    const data = response.data;
    // const data = baseConfigUrl;

    // parse raw js. yes, it's ok to use eval :)
    // http://stackoverflow.com/a/87260/676001
    const baseConfigFn = eval(data);
    const { gatekeeperKey } = clientConfig;
    const baseConfig = baseConfigFn({ gatekeeperKey });

    // deep merge base config and client config
    const config = mergeDeep(baseConfig, clientConfig);
    // const config = mergeDeep(baseConfigUrl, clientConfig);

    // assign table ids
    for (let topic of config.topics) {
      assignTableIds(topic.components);
      assignHorizontalTableGroupIds(topic.components);
    }

    // make config accessible from each component via this.$config
    Vue.use(configMixin, config);

    // create store
    const store = createStore(config);

    // mix in controller
    Vue.use(controllerMixin, { config, store });
    // Vue.use(controllerMixin, { config, store, eventBus });

    Vue.component('font-awesome-icon', FontAwesomeIcon);
    // Vue.config.productionTip = false

    const customComps = clientConfig.customComps || [];
    // console.log('mapboard main.js, customComps:', customComps);
    for (let key of Object.keys(customComps)) {
      Vue.component(key, customComps[key]);
    }

    // mount main vue
    const vm = new Vue({
      el: config.el || '#mapboard',
      render: h => h(Mapboard),
      store
    });

  }).catch(err => {
    console.error('Error loading base config:', err);
  });
}

export default initMapboard;

// also expose the vue component as a named export
export { Mapboard };
