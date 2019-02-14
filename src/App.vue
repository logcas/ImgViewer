<template>
  <div>
    <img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer:1>
    <img src="http://img.lxzmww.xyz/ph2.jpg" v-viewer:1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'hello,world',
    }
  }
}
</script>

<style lang="scss" scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
$cc: red;
h1 {
  color: $cc;
}
</style>
