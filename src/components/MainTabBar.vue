<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" title="首页">
        <!-- <img src="../assets/img/home.svg" slot="normal-img"  />
        <img src="../assets/img/home-active.svg" slot="active-img" /> -->
        <svg-icon name='home' slot="normal-img" className='svg-icon'/>
        <svg-icon name='home-active' slot="active-img" style="color:#F36B72;"   className='svg-icon'/>

      </tab-bar-item>
      <tab-bar-item path="/category" title="分类">
        <!-- <img src="../assets/img/app.svg" slot="normal-img" />
        <img src="../assets/img/app-active.svg" slot="active-img" /> -->
        <svg-icon name='app' slot="normal-img" className='svg-icon'/>
        <svg-icon name='app-active' slot="active-img" style="color:#F36B72;"  className='svg-icon'/>
      </tab-bar-item>
      <tab-bar-item path="/cart" title="购物车">
        <!-- <img src="../assets/img/cart.svg" slot="normal-img" />
        <img src="../assets/img/cart-active.svg" slot="active-img" /> -->
         <svg-icon name='cart' slot="normal-img" className='svg-icon'/>
        <svg-icon name='cart-active' slot="active-img" style="color:#F36B72;"  className='svg-icon'/>
      </tab-bar-item>
      <tab-bar-item path="/profile" title="我的">
        <!-- <img src="../assets/img/my.svg" slot="normal-img" />
        <img src="../assets/img/my-active.svg" slot="active-img" /> -->
         <svg-icon name='my' slot="normal-img" className='svg-icon'/>
        <svg-icon name='my-active' slot="active-img" style="color:#F36B72;"  className='svg-icon'/>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar/TabBar";
import TabBarItem from "@/components/tabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>


</style>