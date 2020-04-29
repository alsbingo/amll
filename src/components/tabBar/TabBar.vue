<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  components: {}
};
</script>
<style scoped>
#tabBar {
  display: flex;
  background-color: #f6f6f6;
  height: 49px;
  margin: 0px;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;

  box-shadow: 1px 1px 4px #cac8c8;
}
</style>