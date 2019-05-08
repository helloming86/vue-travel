<template>
  <div>
    <HeaderCom></HeaderCom>
    <HomeSwiper></HomeSwiper>
    <HomeNav></HomeNav>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderCom from '@/components/HeaderCom.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import HomeNav from '@/components/HomeNav.vue'
import HomeRecommend from '@/components/HomeRecommend.vue'
import HomeWeekend from '@/components/HomeWeekend.vue'

export default {
  name: 'Home',
  components: {
    HeaderCom,
    HomeSwiper,
    HomeNav,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
