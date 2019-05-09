<template>
    <header>
      <router-link to='/'>
        <div class="header-left">
          <span class="iconfont back-icon">&#xeb99;</span>
        </div>
      </router-link>
      <div class="header-right">
        <data>选择城市</data>
      </div>
    </header>

</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityHeader'
}

</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  header
    display: flex
    // 设置从height改为line-height后，上下居中了
    line-height: $headerHeight
    background: $bgColor
    color: #ffffff
    .header-left
      width: 2.000rem
      float: left
      .back-icon
        display: block
        text-align: center
        font-size: 1.25rem
        color: #ffffff
    .header-right
      flex: 1
      text-align: center
</style>
