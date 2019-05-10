<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeNav :list="iconList"></HomeNav>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import HomeNav from '@/components/HomeNav.vue'
import HomeRecommend from '@/components/HomeRecommend.vue'
import HomeWeekend from '@/components/HomeWeekend.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
