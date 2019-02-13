# ImgViewer
A tiny image preview component by Vue.js2.x.

This project is buiding in progress and it couldn't be used in production environment temperarily.

## Features
🎊 Simple and easy to use

🚀 Born for mobile

🎹 Based on directive

## Install
```
npm install @everlastlucas/imgviewer
```

## How to use
1. Import to your project and install it by `Vue.use()` function.
```vue
import Vue from 'vue';
import imgViewer from '@everlastlucas/img-viewer';

Vue.use(imgViewer);
```

2. Add the `v-viewer` directive to your `<img>` DOM like this:
```vue
<img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer>
```

3. Enjoy it in mobile browser.

## Development Progress
- [x] DoubleTap to zoom.
- [ ] Pinch to resize.
- [ ] Group images supports, slide to switch image.
- [ ] Rotate by gesture.

## License
[MIT](https://github.com/logcas/ImgViewer/blob/master/README.md)