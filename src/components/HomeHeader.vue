<template>
  <header>
    <div class="header-left">
      <span class="iconfont back-icon">&#xeb99;</span>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xeb9c;</span>
      <data>输入城市景点/游玩主题</data>
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <data>{{this.doubleCity}}</data>
        <span class="iconfont gps-icon">&#xeb95;</span>
      </div>
    </router-link>
  </header>
</template>

<script type="text/ecmascript-6">
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    }),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
  // sytles reset.css 设置了html 的 font-size: 100%
  // 1rem = html font-size :100% = 16px
  // 2.688rem = 43px
  // @import '../assets/styles/varibles.styl'
  // 引用自定义alias（别名），js里不加~，css需要加~
  // 下面@代表project的src目录
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
    .header-center
      flex: 1
      height: 2rem
      line-height: 2rem
      margin-top: .313rem
      margin-left: .625rem
      margin-right: .625rem
      margin-bottom: .375rem
      padding-left: .125rem
      background: #ffffff
      border-radius: 0.188rem
      color: #cccccc
    .header-right
      mix-width: 4.5rem
      float: right
      text-align: center
      color #ffffff
</style>
