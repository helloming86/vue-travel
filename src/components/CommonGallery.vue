<template>
  <div class="container" @click="handleClk">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs" :key="index">
            <img class="swiper-img" :src="item" alt="图片详情" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CommentGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        // 当swipe的父元素发生变化是，需要让swipe更新
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleClk () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  // wiper-container的overflow默认为hidden，我们要屏蔽这个设置
  // 使用样式穿透，使swiper-container得overflow设置失效，同时使用container的overflow设置
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    // position: fixed生成绝对定位的元素，相对于浏览器窗口进行定位
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000000
    .wrapper
      // bottom 设置为负值，溢出显示，所以不能设置overflow hidden
      // overflow hidden
      height 0
      width: 100%
      padding-bottom 100%
      background: #ffffff
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom: -1.5rem
</style>
