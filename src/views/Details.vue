<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailBanner from '@/components/DetailBanner.vue'
import DetailHeader from '@/components/DetailHeader.vue'

export default {
  name: 'Details',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 100rem
</style>
