<template>
  <main>
    <div class="weekend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="推荐1">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}

</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .weekend-title
    line-height: 2.5rem
    background: #eeeeee
    text-indent: 0.625rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.44%
    .item-img
      width: 100%
  .item-info
    padding: .313rem
    .item-title
      line-height: 1.875rem
      font-size: 1.375rem
      text-align: left
      ellipsis()
    .item-desc
      line-height: 1.375rem
      color: #cccccc
      ellipsis2()
  </style>
