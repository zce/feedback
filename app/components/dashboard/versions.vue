<template>
  <p>
    <strong>v{{versions.feedback}}</strong> using electron v{{ versions.electron }} with node v{{ versions.node }} on the {{ platform }} platform {{arch}} arch.
  </p>
</template>

<script>
  import os from 'os'

  export default {
    data () {
      process.versions.feedback = this.$config.app_version
      return {
        platform: os.platform(),
        arch: os.arch(),
        versions: process.versions
      }
    }
  }
</script>
