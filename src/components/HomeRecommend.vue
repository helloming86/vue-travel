<template>
  <main>
    <div class="recommend-title">
      热门推荐
    </div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommondList" :key="item.id">
        <img class="item-img" :src="item.itemImgUrl" alt="推荐1">
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommondList: [{
        id: "0001",
        itemImgUrl: "http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_200x200_bf985a3d.jpg",
        itemTitle: "推荐项目一标题",
        itemDesc: "We need to navigate the optical HDD firewall!"
      },
      {
        id: "0002",
        itemImgUrl: "http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_200x200_bf985a3d.jpg",
        itemTitle: "推荐项目二标题",
        itemDesc: "We need to navigate the optical HDD firewall!水电费水电费是打发第三方士大夫的沙发斯蒂芬斯蒂芬"
      },
      {
        id: "0003",
        itemImgUrl: "http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_200x200_bf985a3d.jpg",
        itemTitle: "推荐项目三标题",
        itemDesc: "We need to navigate the optical HDD firewall!"
      }]
    }
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
