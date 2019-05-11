<template>
  <div>
    <DetailBanner></DetailBanner>
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

export default {
  name: 'Details',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 电商专供'
          }, {
            title: '成人三馆联票 - 节假日特供'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 100rem
</style>
