<template>
  <div class="image-item" @click="handleClick" ref="container">
    <img
      :class="{'on-control': isTouchMoving}"
      :src="imgSrc"
      :style="translateStyle"
      v-finger:double-tap="bindDoubleTap"
      v-finger:touch-start="bindTouchStart"
      v-finger:touch-move="bindTouchMove"
      v-finger:touch-end="bindTouchEnd"
      ref="img"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "",
      firstLoad: true,
      originAttrs: {},
      pinchResize: false,
      imgEl: null,
      container: null,
      isTouchMoving: false, // 监视touchmove
      touchPosition: { x: 0, y: 0 },

      // image config
      currentWidth: 0,
      currentHeight: 0,
      deltaX: 0,
      deltaY: 0
    };
  },
  computed: {
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
    },
    // 位置、大小样式
    translateStyle() {
      return {
        transform: `translate(${this.translateX},${this.translateY})`,
        width: this.currentWidth + "px",
        height: this.currentHeight + "px",
        "max-width": this.currentWidth + "px"
      };
    }
  },
  methods: {
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
      console.log("swipe", e);
    },
    bindTouchStart(e) {
      console.log("touchStart", e);
      if (this.isTouchMoving || e.changedTouches[0].target !== this.imgEl)
        return;
      this.isTouchMoving = true;
    },
    bindTouchMove(e) {
      if (!this.isTouchMoving) return;
      const {
        width,
        height,
        left,
        top,
        bottom,
        right
      } = this.imgEl.getBoundingClientRect();
      const { deltaX, deltaY } = e;
      (this.deltaX = -deltaX + this.deltaX),
        (this.deltaY = -deltaY + this.deltaY);
      console.log(this.deltaX, this.deltaY);
    },
    bindTouchEnd(e) {
      this.isTouchMoving = false;
      // 计算回弹
      const {
        width,
        height,
        left,
        top,
        bottom,
        right
      } = this.imgEl.getBoundingClientRect();
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
      let imgEl = this.imgEl,
        container = this.container;
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
        let {
          width: defaultWidth,
          height: defaultHeight
        } = this.getFitInitSize(
          this.originAttrs.width,
          this.originAttrs.height
        );
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
    showViewer(src) {
      this.pinchResize = false;
      const img = new Image();
      let that = this;
      let imgEl = this.imgEl;
      imgEl.style.maxWidth = "100%";
      img.onload = function() {
        const { width, height } = that.getFitInitSize(img.width, img.height);
        that.originAttrs.width = img.width;
        that.originAttrs.height = img.height;
        imgEl.style.width = width + "px";
        imgEl.style.height = height + "px";
        that.imgSrc = src;
        console.log("loaded:", width, height);
      };
      img.src = src;
    }
  },
  mounted() {
    this.imgEl = this.$refs.img;
    this.container = this.$refs.container;
  }
};
</script>

<style lang="scss" scoped>
.image-item {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;

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
