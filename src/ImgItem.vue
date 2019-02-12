<template>
  <div class="image-item" @click="handleClick" ref="container">
    <img class="default-view" 
         :src="imgSrc" 
         v-finger:double-tap="bindDoubleTap"
         ref="img">
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
      container: null
    };
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
    bindDoubleTap(e) {
      //        console.log(e);
      //        console.log(imgEl.getBoundingClientRect());
      let imgEl = this.imgEl,
          container = this.container;
      if (e.target !== imgEl) return;
      console.log("-----------------------");
      console.log("dbtap");
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

        let touchRatio = touchX / width; // 点击坐标所在位置与整个对象的比值
        let scrollLeft = (newWidth - width) * touchRatio;
        imgEl.className = "";
        imgEl.style.maxWidth = `${newWidth}px`;
        imgEl.style.width = `${newWidth}px`;
        imgEl.style.height = `${newHeight}px`;
        console.log(newHeight, newWidth);
        container.scrollLeft = 100;
        /*
            this.$nextTick(() => {
              console.log("scrollLeft:", scrollLeft);
              container.scrollLeft = scrollLeft; // !不生效？
            });
            */
      } else {
        this.pinchResize = false;
        imgEl.className = "default-view";
        let {
          width: defaultWidth,
          height: defaultHeight
        } = this.getFitInitSize(
          this.originAttrs.width,
          this.originAttrs.height
        );
        imgEl.style.maxWidth = `${defaultWidth}px`;
        imgEl.style.width = `${defaultWidth}px`;
        imgEl.style.height = `${defaultHeight}px`;
        /*
            this.$nextTick(() => {
              container.scrollLeft = 0;
            });
            */
      }
    },
    handleClick(e) {
      if (e.target !== this.$refs.img) {
        this.$emit("hide-viewer");
      }
    },
    bindGesture() {
      let imgEl = this.$refs.img;
      let container = this.$refs.container;
      let that = this;
      imgEl.$af = new AlloyFinger(imgEl, {
        doubleTap(e) {}
      });
    },
    showViewer(src) {
      this.pinchResize = false;
      const img = new Image();
      let that = this;
      let imgEl = this.imgEl;
      /*
      if (imgEl.$af) {
        imgEl.$af = imgEl.$af.destroy();
      }
      */
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
      //this.bindGesture();
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
  height: 100%;
  width: 100%;
  overflow: auto;

  img {
    position: relative;
    transition: all 0.2s ease-in-out;
    top: 0;
    left: 0;

    &.default-view {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
