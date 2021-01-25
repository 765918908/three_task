<template>
  <div id="app">

    <Head />

    <router-view></router-view>
  </div>
</template>
  <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>

<script>
import Head from "@/components/common/Head/Head"

export default {
  components: {
    Head
  }
}
</script>
<style lang="scss">
// @import "@/assets/css/style.scss";
</style>
