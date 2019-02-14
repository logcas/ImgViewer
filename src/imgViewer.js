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
    const ImageGroups = {};
    let defaultId = 0;
    //! 为什么只能传一个参数呢？
    let showViewer = (option) => (e) => {
      viewer.showViewer(option);
    }
    Vue.directive('viewer', {
      bind(el, { arg }) {
        console.log('bind directives');
        console.log('args: ', arg);
        // 如果arg没有，则单独一组
        if(!arg) {
          arg = 'default' + defaultId++;
        };
        ImageGroups[arg] || (ImageGroups[arg] = []);
        ImageGroups[arg].push({
          url: el.src,
          width: 0,
          height: 0,
        });
        let idx = ImageGroups[arg].length - 1;
        console.log('arg:' ,arg);
        el.$viewerHandler = showViewer({
          group: ImageGroups[arg], 
          index: idx
        });
        el.addEventListener('click', el.$viewerHandler);
      },
      unbind(el) {
        el.removeEventListener('click', el.$viewerHandler);
      }
    });
  }
}