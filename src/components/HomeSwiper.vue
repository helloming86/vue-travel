<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
// >>> 作用是样式穿透，使scoped的限制局部失效
// 使 wrapper 下所有子组件swiper-pagination-bullet-active 均按照样式渲染，显示红色
.wrapper >>> .swiper-pagination-bullet-active
  background: red !important
.wrapper
  // 下面四行代码实现：宽度100%，自动撑开高度是宽度26.66%的固定区域
  // 表示宽高比例始终固定
  // 另一种写法，单可能存在兼容性问题
  // width: 100%
  // height: 26.66vw
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eeeeee
  .swiper-img
    width: 100%
</style>
