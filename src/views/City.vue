<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :nowCity="currentCity" :hotCity="hotCity" :cityList="cityList"></CityList>
    <CityAlphabet :cityList="cityList"></CityAlphabet>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src
// import HelloWorld from '@/components/CityHeader.vue'
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'
import CityList from '@/components/CityList.vue'
import CityAlphabet from '@/components/CityAlphabet.vue'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      currentCity: '洛阳',
      hotCity: [],
      cityList: {}
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCity = data.hotCities
        this.cityList = data.cities
      }
      // console.log(res)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}

</script>

<style lang="stylus" scoped>
</style>
