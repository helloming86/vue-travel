<template>
  <ul class="list">
    <li class="item"
      v-for="(item, key) of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchstop="handleTouchStop"
      @click="handleAlpClk"
    >
      {{item}}
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet',
  props: {
    cityList: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cityList) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    // 当你执行点击操作是，定义的事件方法handleAlpClk会接收到一个点击到的事件对象，这里用e表示，当然你可以用其他比如abc
    handleAlpClk: function (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 假设 obj 为某个 HTML 控件。
        // obj.offsetTop 指 obj 距离上方或上层控件的位置，整型，单位像素。
        const startY = this.$refs['A'][0].offsetTop
        // console.log(startY)
        // e.touches[0].clientY touch事件举例顶层的Y坐标
        const touchY = e.touches[0].clientY - 83
        // console.log(touchY)
        const index = Math.floor((touchY - startY) / 20)
        // console.log(index)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchStop () {
      this.touchStatus = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction column
    justify-content center
    position: absolute
    top: 5.2rem
    right: 0
    bottom: 0
    width: 1.875rem
    // background: red
    .item
      line-height 1.25rem
      text-align center
      color: $bgColor
</style>
