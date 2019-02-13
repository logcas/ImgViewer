<template>
  <div>
    <img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer>
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
