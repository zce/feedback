<style scoped>
  div {
    align-items: center;
    justify-content: center;
  }
  img {
    /*margin-top: -25px;*/
    width: 160px;
  }
</style>

<template>
  <div class="inner">
    <img src="../assets/img/itcast.svg" alt="itcast">
    <h1>Itcast Feedback</h1>
    <current></current>
    <links></links>
    <versions></versions>
  </div>
</template>

<script>
  import current from './dashboard/currentpage'
  import links from './dashboard/links'
  import versions from './dashboard/versions'

  export default {
    components: {
      current,
      links,
      versions
    },

    name: 'dashboard',

    ready () {
      this.$root.title = '仪表盘'
    }
  }
</script>
