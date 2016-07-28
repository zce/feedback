<style scoped>
  div {
    align-items: center;
    justify-content: center;
  }
  img {
    width: 265px;
  }
  code {
    background-color: rgba(40, 56, 76, .5);
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    padding: 3px 6px;
    margin: 0 3px;
    vertical-align: bottom;
  }
  p {
    line-height: 24px;
  }
  a {
    color: #fff;
    text-decoration: none;

    &:hover { color: #fff; }
  }
  ul {
    list-style-type: none;
    margin-top: 10px;
    padding: 0;
  }
  li {
    display: inline-block;
  }
</style>

<template>
  <div class="inner">
    <img src="../assets/img/itcast.svg" alt="itcast">
    <h1>Itcast, Inc. Feedback</h1>
    <p>请点击左侧菜单中的创建，开始新的反馈统计</p>
    <p>
      <strong>v{{versions.feedback}}</strong> using electron v{{ versions.electron }} with node v{{ versions.node }} on the {{ platform }} platform {{arch}} arch.
    </p>
    <ul>
      <li><a v-link="{ name: 'start' }" class="btn btn-warning btn-lg">开始创建新的反馈统计</a></li>
    </ul>
  </div>
</template>

<script>
  import os from 'os'

  export default {
    name: 'dashboard',
    components: {},
    data () {
      process.versions.feedback = this.$config.app.version
      return {
        // route: this.$router._currentRoute,
        platform: os.platform(),
        arch: os.arch(),
        versions: process.versions
      }
    }
  }
</script>
