<template>
  <div>
    <div class="detail-banner" @click="handleBannerClk">
      <img class="banner-img" :src="bannerImg" alt="" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe7de;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <CommonFade>
      <common-gallery
        class="detail-gallery"
        :imgs="gallaryImgs"
        v-show="showGallery"
        @close="handleCloseGallery"
      ></common-gallery>
    </CommonFade>
  </div>
</template>

<script type="text/ecmascript-6">
import CommonGallery from '@/components/CommonGallery.vue'
import CommonFade from '@/components/CommonFade.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    CommonFade
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
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
