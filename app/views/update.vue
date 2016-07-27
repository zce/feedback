<style>

</style>

<template>
  <div class="inner">
    <h1 class="page-header select drag">Update</h1>
    <div>
      <button>检查更新</button>
    </div>
  </div>
</template>

<script>
  import updater from '../libraries/updater'

  export default {
    ready () {
      updater.init()
    },

    methods: {
      check () {
        updater.checkForUpdates()
      }
    }
  }
</script>
