<template>
  <div>
    <div class="item"
      v-for="(item,index) of plist"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归循环： 组件自身调用自身
        如果循环项item下面还有内容children，进行递归循环，使用组件自身template获取并渲染children的内容
        1.使用DetailList执行递归 2.将item.children与plist进行绑定
        本例，是个三级嵌套
      -->
      <div v-if="item.children" class="item-children">
        <DetailList :plist="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailList',
  props: {
    plist: Array
  }
}

</script>

<style lang="stylus" scoped>
  .item-title-icon
    display: inline-block
    width: .875rem
    height: .875rem
    background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -1.125rem no-repeat
    margin-right: .25rem
    background-size: 1rem 7.5rem
  .item-children
    padding: 0 1.875rem
  .item-title
    line-height: 3rem
    font-height: 2.5rem
    padding: 0 .5rem
</style>
