<template>
  <div>
    <div class="detail-banner" @click="handleBannerClk">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_600x330_44a766f3.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">郑州方特欢乐世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe7de;</span>
          33
        </div>
      </div>
    </div>
    <common-gallery class="detail-gallery" :imgs="itemImgs" v-show="showGallery" @close="handleCloseGallery"></common-gallery>
  </div>
</template>

<script type="text/ecmascript-6">
import CommonGallery from '@/components/CommonGallery.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      itemImgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557562223992&di=cf65c40477f4947198354d9c94890148&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F26%2F29%2F52%2F58d091b19e64f_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557562223992&di=cf65c40477f4947198354d9c94890148&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F26%2F29%2F52%2F58d091b19e64f_1024.jpg']
    }
  },
  methods: {
    handleBannerClk () {
      this.showGallery = true
    },
    handleCloseGallery () {
      this.showGallery = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  .detail-banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 1.75rem
      color: #ffffff
      // 线性渐变:设置从上到下的线性渐变
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: 1.25rem
        padding: 0 .5rem
      .banner-number
        height: 1.25rem
        line-height: 1.25rem
        margin-top: .25rem
        margin-right: .5rem
        padding: 0 .5rem
        border-radius: .25rem
        background: rgba(0, 0, 0, .8)
        font-size: 1rem
        .banner-icon
          font-size: 1rem
</style>
