<template>
  <div id="app">
      <router-view/>
      <footer-guide v-if="$route.meta.pd"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: { FooterGuide },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
