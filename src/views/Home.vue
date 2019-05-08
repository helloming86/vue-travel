<template>
  <div>
    <HeaderCom></HeaderCom>
    <HomeSwiper></HomeSwiper>
    <HomeNav></HomeNav>
    <div>test</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderCom from '@/components/HeaderCom.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import HomeNav from '@/components/HomeNav.vue'

export default {
  name: 'Home',
  components: {
    HeaderCom,
    HomeSwiper,
    HomeNav
  }
}
</script>
