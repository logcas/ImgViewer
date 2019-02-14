# ImgViewer
A tiny image preview component by Vue.js2.x.

This project is buiding in progress and it couldn't be used in production environment temperarily.

## Features
🎊 Simple and easy to use

🚀 Born for mobile

🎹 Based on directive

## Screenshot
![viewer](http://img.lxzmww.xyz/imgviewerImgViewer.gif)


## Install
```
npm install @everlastlucas/imgviewer
```

## How to use
1. Import to your project and install it by `Vue.use()` function.
```javascript
import Vue from 'vue';
import imgViewer from '@everlastlucas/img-viewer';

Vue.use(imgViewer);
```

2. Add the `v-viewer` directive to your `<img>` DOM like this:
```html
<img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer>
```

If you want to divide some images into a group, please specify group-name as a param like this:
```html
<img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer:group1>
<img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer:group1>
```
Then, you can swipe to swich a image.

3. Enjoy it in mobile browser.

## Development Progress
- [x] DoubleTap to zoom.
- [x] Group images supports, slide to switch image.
- [ ] Pinch to resize.
- [ ] Rotate by gesture.

## License
[MIT](https://github.com/logcas/ImgViewer/blob/master/README.md)