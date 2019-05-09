<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CitySearch'
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
</style>
