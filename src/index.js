import Vue from 'vue';
import App from './App.vue';
import imgViewer from '../dist/imgViewer';

Vue.use(imgViewer);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});