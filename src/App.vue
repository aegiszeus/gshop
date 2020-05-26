<template>
    <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './conmponents/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {FooterGuide}
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
