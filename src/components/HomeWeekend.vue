<template>
  <main>
    <div class="weekend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.itemImgUrl" alt="推荐1">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
        </div>
      </li> 
    </ul>
  </main>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: "0001",
        itemImgUrl: "http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
        itemTitle: "推荐项目一标题",
        itemDesc: "We need to navigate the optical HDD firewall!"
      },
      {
        id: "0002",
        itemImgUrl: "http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
        itemTitle: "推荐项目二标题",
        itemDesc: "We need to navigate the optical HDD firewall!水电费水电费是打发第三方士大夫的沙发斯蒂芬斯蒂芬"
      },
      {
        id: "0003",
        itemImgUrl: "http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg",
        itemTitle: "推荐项目三标题",
        itemDesc: "We need to navigate the optical HDD firewall!"
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"  
  .weekend-title
    margin-top: .5rem
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
