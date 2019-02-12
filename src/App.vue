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
$cc: red;
h1 {
  color: $cc;
}
</style>
