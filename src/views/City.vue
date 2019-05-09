<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src
// import HelloWorld from '@/components/CityHeader.vue'
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}

</script>

<style lang="stylus" scoped>
</style>
