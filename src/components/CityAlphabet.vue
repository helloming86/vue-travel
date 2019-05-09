<template>
  <ul class="list">
    <ul class="item">a</ul>
    <ul class="item">b</ul>
    <ul class="item">c</ul>
    <ul class="item">d</ul>
    <ul class="item">e</ul>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet'
}

</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction column
    justify-content center
    position: absolute
    top: 5.2rem
    right: 0
    bottom: 0
    width: 1.875rem
    // background: red
    .item
      line-height 1.25rem
      text-align center
      color: $bgColor
</style>
