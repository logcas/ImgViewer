<template>
  <div class="image-item" @click="handleClick">
    <ul
      class="image-list"
      v-finger:touch-start="bindTouchStart"
      v-finger:touch-move="bindTouchMove"
      v-finger:touch-end="bindTouchEnd"
      v-finger:double-tap="bindDoubleTap"
      v-finger:swipe="bindSwipe"
    >
      <li
        class="image-list-item"
        v-for="(img,idx) in imgSrcs"
        :key="idx"
        ref="imageList"
        v-show="currentIndex === idx"
      >
        <img :class="{'on-control': isTouchMoving}" :src="img.url" :style="translateStyle(idx)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 事件监控变量
      pinchResize: false, // 监视pinch放大状态
      isTouchMoving: false, // 监视touchmove

      // 当前展示的图片配置
      currentWidth: 0,
      currentHeight: 0,
      deltaX: 0,
      deltaY: 0,

      // group
      imgSrcs: [],
      currentIndex: 0
    };
  },
  computed: {
    // 当前展示的图片节点
    currentImageEl() {
      return this.$refs.imageList[this.currentIndex].children[0];
    },
    // X轴位移
    translateX() {
      return this.currentWidth === 0
        ? "-50%"
        : -1 * (this.currentWidth / 2 + this.deltaX) + "px";
    },
    // Y轴位移
    translateY() {
      return this.currentHeight === 0
        ? "-50%"
        : -1 * (this.currentHeight / 2 + this.deltaY) + "px";
    }
  },
  methods: {
    // 位置、大小样式
    translateStyle(index) {
      if (index === this.currentIndex) {
        return {
          transform: `translate(${this.translateX},${this.translateY})`,
          width: this.currentWidth + "px",
          height: this.currentHeight + "px",
          "max-width": this.currentWidth + "px"
        };
      }
    },
    // 计算初始状态下图片的展示宽高
    // 即 图片宽度必须小于屏幕宽度，然后高度按比例缩放
    getFitInitSize(width, height) {
      let w = Math.min(width, window.innerWidth),
        h = (w / width) * height;
      return {
        width: w,
        height: h
      };
    },
    // 计算图片pinch手势后放大的展示宽高
    // 即 图片高度等于屏幕高度，然后宽度按比例放大
    getPinchSize(width, height) {
      let h = window.innerHeight,
        ratio = h / height,
        w = width * ratio;
      return {
        width: w,
        height: h,
        ratio
      };
    },
    bindSwipe(e) {
      if(this.isTouchMoving || this.pinchResize) return;
      const { direction } = e;
      console.log(direction);
      // 向左滑，下一张
      if(direction === 'Left') {
        console.log('next');
        this.currentIndex = this.currentIndex + 1 >= this.imgSrcs.length ? this.currentIndex : ++this.currentIndex;
        this.lazyLoad(this.imgSrcs[this.currentIndex]);
      } else if(direction === 'Right') {
        console.log('last');
        this.currentIndex = this.currentIndex - 1 < 0 ? this.currentIndex : --this.currentIndex;
        this.lazyLoad(this.imgSrcs[this.currentIndex]);
      }
    },
    bindTouchStart(e) {
      if (
        !this.pinchResize ||
        this.isTouchMoving ||
        e.changedTouches[0].target !== this.currentImageEl
      )
        return;
      this.isTouchMoving = true;
    },
    bindTouchMove(e) {
      if (!this.isTouchMoving || !this.pinchResize) return;
      const {
        width,
        height,
        left,
        top,
        bottom,
        right
      } = this.currentImageEl.getBoundingClientRect();
      const { deltaX, deltaY } = e;
      this.deltaX = -deltaX + this.deltaX;
      this.deltaY = -deltaY + this.deltaY;
      console.log(this.deltaX, this.deltaY);
    },
    bindTouchEnd(e) {
      if(!this.pinchResize || !this.isTouchMoving) return;
      this.isTouchMoving = false;
      // 计算回弹
      const {
        width,
        height,
        left,
        top,
        bottom,
        right
      } = this.currentImageEl.getBoundingClientRect();
      let newDeltaX = this.deltaX,
        newDeltaY = this.deltaY;
      // 情况一 left > 0 并且 right > window.innerWidth 图片移动太靠右了
      if (left > 0 && right > window.innerWidth) {
        newDeltaX += Math.min(left, right - window.innerWidth);
      }
      // 情况二 left < 0 并且 right < window.innerWidth 图片移动太靠左了
      if (left < 0 && right < window.innerWidth) {
        newDeltaX += -Math.min(-left, window.innerWidth - right);
      }
      // 情况三 top > 0 并且 bottom > window.innerHeight 图片移动太靠下了
      if (top > 0 && bottom > window.innerHeight) {
        newDeltaY += Math.min(top, bottom - window.innerHeight);
      }
      // 情况四 top < 0 并且 bottom < window.innnerHeight 图片移动太靠上了
      if (top < 0 && bottom < window.innerHeight) {
        newDeltaY += -Math.min(-top, window.innerHeight - bottom);
      }
      this.deltaX = newDeltaX;
      this.deltaY = newDeltaY;
    },
    bindDoubleTap(e) {
      let imgEl = this.currentImageEl;
      if (e.target !== imgEl) return;
      const { width, height, left } = imgEl.getBoundingClientRect();
      let touches = e.changedTouches[0],
        touchX = touches.clientX - left,
        touchY = touches.clientY - top;
      console.log(this.pinchResize);
      // 原始一倍时双击放大到高度与容器一样高
      if (!this.pinchResize) {
        this.pinchResize = true;
        // 计算放大后的宽度和高度
        const { height: newHeight, width: newWidth, ratio } = this.getPinchSize(
          width,
          height
        );
        this.currentWidth = newWidth;
        this.currentHeight = newHeight;
      } else {
        this.pinchResize = false;
        let { width: defaultWidth, height: defaultHeight } = this.imgSrcs[
          this.currentIndex
        ];
        this.currentWidth = defaultWidth;
        this.currentHeight = defaultHeight;
        this.deltaX = 0;
        this.deltaY = 0;
      }
    },
    handleClick(e) {
      if (e.target !== this.$refs.img) {
        this.$emit("hide-viewer");
      }
    },
    lazyLoad(imgItem) {
      let image = new Image();
      image.onload = () => {
        const { width, height } = this.getFitInitSize(
          image.width,
          image.height
        );
        imgItem.width = width;
        imgItem.height = height;
        this.currentWidth = imgItem.width;
        this.currentHeight = imgItem.height;
      };
      image.src = imgItem.url;
    },
    showViewer({ group, index }) {
      this.pinchResize = false;
      this.imgSrcs = group;
      this.currentIndex = index;

      // 加载图片
      this.lazyLoad(group[index]);
    }
  },
};
</script>

<style lang="scss" scoped>
.image-item {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .image-list {
    position: relative;
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;

    li.image-list-item {
      float: left;
      width: 100%;
      height: 100%;
    }
  }

  img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in;

    &.on-control {
      transition: none;
    }
  }
}
</style>
