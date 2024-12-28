<script setup>
import CommonHeader from './components/CommonHeader.vue';
</script>

<template>
  <div class="page-warpper">
    <CommonHeader></CommonHeader>
    <div class="page-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: @lm-background-color;
  font-size: @lm-font-size-defalut;
  .page-container{
    height: calc(100vh - @lm-common-header-height);
    overflow: auto;
  }
}
</style>
