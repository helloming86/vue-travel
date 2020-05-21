<template>
  <nav class="home-nav">
    <swiper>
      <swiper-slide v-for="(page, index) of navPages" :key="index">
        <div class="nav-icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="navicon" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeNav',
  props: {
    list: Array
  },
  computed: {
    navPages () {
      // 定义块级作用域常量pages
      // js中 const 定义的块级作用于常量为对象或者数组时，可以修改
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
@import "~@/assets/styles/mixins.styl"
.home-nav >>> .swiper-container
  height: 0
  padding-bottom: 50%
  // background: green
.home-nav
  margin-top: .5rem
  .nav-icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    // background: red
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 1.375rem
      box-sizing: border-box
      padding: .313rem
      // background: blue
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 1.375rem
      line-height: 1.375rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
