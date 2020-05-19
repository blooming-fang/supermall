<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color='blue'>
      <img slot="item-icon" src="@/assets/img/tabbar/test.jpg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/logo.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/test.jpg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/logo.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/test.jpg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/logo.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/test.jpg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/logo.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from '../tabbar/TabBar'
  import TabBarItem from '../tabbar/TabBar-item'
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
