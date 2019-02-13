<template>
  <div class="img-viewer" v-show="isDisplay" @scroll="handleScroll">
    <transition name="fade">
      <div class="view-mask" v-show="isDisplay">
        <img-item ref="img" @hide-viewer="handleHide"></img-item>
      </div>
    </transition>
  </div>
</template>

<script>
import imgItem from "@/ImgItem";
export default {
  name: "img-viewer",
  components: { imgItem },
  data() {
    return {
      imageSrc: "",
      isDisplay: false
    };
  },
  methods: {
    handleHide(e) {
      this.isDisplay = false;
    },
    toggleScroll() {
      if (this.isDisplay) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
    showViewer(src) {
      this.$children[0].showViewer(src);
      this.isDisplay = true;
    },
    handleScroll() {
      console.log('scroll');
    },
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s cubic-bezier(0.35,0.75,0.48,0.99);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
.fade-enter-to,
.fade-leave {
  transform: translateY(0);
}

.img-viewer {
  position: relative;
  display: inline-block;

  .view-mask {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
    opacity: 1;
    overflow: auto;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
}
</style>
