<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :nowCity="currentCity" :hotCity="hotCity" :cityList="cityList" :cityAlp="cityAlp"></CityList>
    <!-- 父组件City使用子组件 CityAlphabet-->
    <!-- 子组件CityAlphabet，在内部处理中，使用$emit方法，向外触发事件，向父组件发送一些数据 -->
    <!-- 父组件City，使用@方法，监听子组件定义的事件，这里是change事件-->
    <CityAlphabet :cityList="cityList" @change="handleLetterChange"></CityAlphabet>
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
      cityAlp: '',
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
    },
    handleLetterChange (letter) {
      this.cityAlp = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}

</script>

<style lang="stylus" scoped>
</style>
