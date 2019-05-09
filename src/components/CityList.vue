<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
          <div class="item border-bottom">阿里尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
