<template>
  <div>
    <div>123</div>
 
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      list: [],
      showTitle: true
    };
  },
  created() {
    this.list = [
      {
        title: "1",
        path: require("@/assets/img/1.jpg"),
        url: "http://www.baidu.com"
      },
      { title: "2", path: require("@/assets/img/2.jpg"), url: "#" },
      { title: "3", path: require("@/assets/img/3.jpg"), url: "#" },
      { title: "4", path: require("@/assets/img/4.jpg"), url: "#" },
      { title: "5", path: require("@/assets/img/5.jpg"), url: "#" }
    ];
  },
  components: {
   
  }
};
</script>
<style scoped>
</style>