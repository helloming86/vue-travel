<template>
  <div>
    <DetailBanner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :plist="list"></DetailList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailBanner from '@/components/DetailBanner.vue'
import DetailHeader from '@/components/DetailHeader.vue'
import DetailList from '@/components/DetailList.vue'
import axios from 'axios'

export default {
  name: 'Details',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 100rem
</style>
