<template>
  <div>
    <HeaderCom></HeaderCom>
    <HomeSwiper></HomeSwiper>
    <div>test</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderCom from '@/components/HeaderCom.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'

export default {
  name: 'Home',
  components: {
    HeaderCom,
    HomeSwiper
  }
}
</script>
