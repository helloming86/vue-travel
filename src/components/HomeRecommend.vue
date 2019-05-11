<template>
  <main>
    <div class="recommend-title">
      热门推荐
    </div>
    <ul>
      <router-link
        tag="li"
        class="recommend-item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="`/detail/` + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="推荐1">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </main>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}

</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .recommend-title
    margin-top: .5rem
    line-height: 2.5rem
    background: #eeeeee
    text-indent: 0.625rem
  .recommend-item
    overflow: hidden
    display: flex
    height: 7.5rem
  .item-img
    width: 6.875rem
    height: 6.875rem
    padding: .313rem
  .item-info
    flex: 1
    padding: .313rem
    min-width: 0
    .item-title
      line-height: 1.875rem
      font-size: 1.375rem
      text-align: left
      ellipsis()
    .item-desc
      line-height: 1.375rem
      color: #cccccc
      ellipsis2()
    .item-button
      line-height: 1.375rem
      margin-top: .313rem
      background: #ff9300
      padding: 0 .313rem
      border-radius: .313rem
      color: red
  </style>
