<template>
  <div>
    <p>Group1:</p>
    <img src="http://img.lxzmww.xyz/cnode/qrcode.jpg" v-viewer:1 style="width:100px;height:100px">
    <img src="http://img.lxzmww.xyz/fold.jpg" v-viewer:1 style="width:100px;height:100px">
    <p>Group2:</p>
    <img src="http://img.lxzmww.xyz/02%20%E4%BB%A5%E5%A4%AA%E7%BD%91%E5%B8%A7.jpg" v-viewer:2 style="width:100px;height:100px">
    <img src="http://img.lxzmww.xyz/01%20PPP%D6%A1.jpg" v-viewer:2 style="width:100px;height:100px">
    <p>Group3:</p>
    <img src="http://img.lxzmww.xyz/01%20PPP%D6%A1%20%281%29.jpg" v-viewer:3 style="width:100px;height:100px">
    <p>Group4:</p>
    <img src="http://img.lxzmww.xyz/ph2.jpg" v-viewer:4 style="width:100px;height:100px">
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
