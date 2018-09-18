<template>
  <div>
    <router-view></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import footBar from '@/components/footNavBar'

  export default {
    components: {
    	footBar
    }
  }
</script>

<style type="text/css">
</style>
