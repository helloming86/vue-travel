<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keywords" />
    </div>
    <div class="search-content" ref="search" v-show="keywords">
      <ul>
        <li class="search-result border-bottom"
          v-for="item in searchRes"
          :key="item.id"
          @click="handleCityClk(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-result border-bottom" v-show="noSearchRes">没有找到对应的匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      searchRes: [],
      timer: null
    }
  },
  computed: {
    noSearchRes () {
      return !this.searchRes.length
    }
  },
  watch: {
    keywords () {
      // 截流函数
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keywords) {
        this.searchRes = []
        // 下面的return是必须的，否则展示数据异常
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keywords) > -1 ||
                value.name.indexOf(this.keywords) > -1) {
              result.push(value)
              // console.log(result)
            }
          })
        }
        this.searchRes = result
      }, 100)
    }
  },
  methods: {
    handleCityClk (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push({ path: '/' })
    }
  },
  mounted () {
    // 注意，这里this.$refs['wrapper']等同于this.$refs.wrapper
    this.scroll = new BScroll(this.$refs.search, { click: true })
  }
}

</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    // 设置搜索框高度为40px 上下内边框为0，左右内边框为2px
    height: 2.5rem
    padding: 0 .125rem 0 .125rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      // 设置 搜索框宽度设置为基于包含块（父元素）宽度的100%
      width: 100%
      // 因为input 有 默认的padding上下左右各1px  默认的border 上下左右各2px
      // 如果不改变默认的padding和border，name设置的高度则不高于
      // 父级块元素高度-父级块元素上下border-父级块元素上下padding-本身默认上下border-本身默认上下padding
      // =40-0-0-(2+2)-(1+1)=34
      // 即；，本例设置el的高度不高于34(根据本项目对应关系，本例=2.125rem)
      height: 2.125rem
      padding: 0 .125rem
      line-height: 2.125rem
      text-align: center
      border-radius: .125rem
      color: #666666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 5.2rem
    left: 0
    right: 0
    bottom: 0
    background: #eeeeee
    .search-result
      line-height: 1.75rem
      padding: .125rem
      background: #ffffff
      color: #666666
</style>
