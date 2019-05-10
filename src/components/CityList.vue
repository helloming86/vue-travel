<template>
  <!--这里，这里为什么不能写成:ref  -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper"
            v-for="item of hotCity"
            :key="item.id"
            @click="handleCityClk(item.name)"
          >
            <div class="button" >{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 对象Object也可以使用v-for循环，但是循环的内容不是(item, index)而是(index, key) -->
      <!-- 在循环中定义:ref，使用$refs得到的是一个数组，第一个元素才是DOM $refs[key][0] -->
      <!-- 这里必须用:ref, 而不是ref -->
      <div class="area" v-for="(item, key) of cityList" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <!-- vue这里定义ref，可以获取DOM -->
        <div class="item-list"
          v-for="cityItem of item"
          :key="cityItem.id"
          @click="handleCityClk(cityItem.name)"
        >
          <div class="item border-bottom">{{cityItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCity: Array,
    cityAlp: String,
    cityList: Object
  },
  methods: {
    handleCityClk: function (city) {
      // 点击事件的目的是切换城市，想要改变city，根据vuex的规则
      // 需要仓库（$store）派发/触发（dispatch）一个指令（actions），经新的city数据传递过去
      // 此处的actions为changeCity
      this.$store.dispatch('changeCity', city)
      this.$router.push({ path: '/' })
    }
  },
  watch: {
    cityAlp () {
      // console.log(this.cityAlp)
      if (this.cityAlp) {
        // const element = this.$refs[this.cityAlp]
        // console.log(element)
        const element = this.$refs[this.cityAlp][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    // 注意，这里this.$refs['wrapper']等同于this.$refs.wrapper
    // Bscroll 默认阻止点击事件，所以，为了能够点击本业的city，需要放开限制
    this.scroll = new BScroll(this.$refs.wrapper, { click: true })
  }
}

</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'

  .border-topbottom
    &:before
      border-color: #cccccc
    &:after
      border-color: #cccccc
  .border-bottom
    &:before
      border-color: #cccccc
  .list
    overflow hidden
    position absolute
    top: 5.2rem
    left: 0
    right: 0
    bottom: 0
    // background red
    .title
      line-height: 1.5rem
      background: #eeeeee
      padding-left: .25rem
      color: #666666
      font-size: 1.25rem
    .button-list
      overflow: hidden
      padding: .125rem 1.875rem .125rem .125rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .125rem
          padding: .125rem 0
          text-align: center
          border: .063rem solid #cccccc
          border-radius .125rem
    .item-list
      .item
        line-height: 1.5rem
        color: #666666
        padding-left: .125rem
</style>
