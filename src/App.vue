<template>
  <div id="app">
    <!-- exlude 包含了不使用keep-alive的组件 -->
    <keep-alive exclude="Details">
      <div id="nav">
        <router-link to="/"></router-link>
      </div>
      <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="stylus">
</style>
