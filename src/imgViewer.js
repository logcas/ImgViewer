import Vue from 'vue';
import ImgViewer from '@/ImgViewer.vue';
import AlloyFinger from 'alloyfinger';
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue';
Vue.use(AlloyFingerPlugin, {
    AlloyFinger
});

export default {
  install() {
    let ImgViewerConstructor = Vue.extend(ImgViewer);
    let viewer = new ImgViewerConstructor().$mount();
    document.body.appendChild(viewer.$el);
    console.log('install');
    let showViewer = (el) => (e) => {
      let src = el.src;
      viewer.showViewer(src);
    }
    Vue.directive('viewer', {
      bind(el) {
        console.log('bind directives');
        el.$viewerHandler = showViewer(el);
        el.addEventListener('click', el.$viewerHandler);
      },
      unbind(el) {
        el.removeEventListener('click', el.$viewerHandler);
      }
    });
  }
}