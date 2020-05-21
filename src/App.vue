<!--
 * @Descripttion:
 * @version:
 * @Author: Nicky
 * @Date: 2019-05-11 22:43:44
 * @LastEditors: Nicky
 * @LastEditTime: 2019-08-18 10:46:38
 -->
<template>
  <div id="app">
    <!-- exlude 包含了不使用keep-alive的组件 -->
    <keep-alive exclude="Details">
      <div id="nav">
        <router-link to="/"></router-link>
      </div>
      <router-view />
    </keep-alive>
  </div>
</template>
<style lang="stylus"></style>
