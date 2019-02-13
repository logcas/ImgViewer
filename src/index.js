import Vue from 'vue';
import App from './App.vue';
import imgViewer from './imgViewer';

Vue.use(imgViewer);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});

if (module.hot) {
  module.hot.accept();
}