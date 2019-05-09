<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityAlphabet></CityAlphabet>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src
// import HelloWorld from '@/components/CityHeader.vue'
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'
import CityList from '@/components/CityList.vue'
import CityAlphabet from '@/components/CityAlphabet.vue'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}

</script>

<style lang="stylus" scoped>
</style>
