<template>
  <div class="home">
    <div>home</div>
    <swiper :list="list" :showTitle="showTitle" />
  </div>
</template>
<script>
import Swiper from "../../components/swiper/Swiper";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      showTitle: true
    };
  },
  components: {
    Swiper
  },
  created() {
    this.list = [
      { title: "1", path: require("../../assets/img/1.jpg"), url: "http://www.baidu.com" },
      { title: "2", path: require("../../assets/img/2.jpg"), url: "#" },
      { title: "3", path: require("../../assets/img/3.jpg"), url: "#" },
      { title: "4", path: require("../../assets/img/4.jpg"), url: "#" },
      { title: "5", path: require("../../assets/img/5.jpg"), url: "#" }
    ];
  }
};
</script>
<style scoped>
.home{
  /* height: 100%; */
}
</style>