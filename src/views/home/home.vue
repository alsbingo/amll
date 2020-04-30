<template>
  <div class="home">
    <nav-bar class="home-bar">
      <div slot="center">AL商城首页</div>
    </nav-bar>
    <carousel :list="list" :showTitle="showTitle" class="carousel" />

    <ul>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
      <li>dfdf</li>
    </ul>
  </div>
</template>
<script>
import Carousel from "../../components/carousel/Carousel";
import NavBar from "@/components/navBar/NavBar";

export default {
  name: "Home",
  data() {
    return {
      list: [],
      showTitle: true
    };
  },
  components: {
    Carousel,
    NavBar
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
  }
};
</script>
<style scoped>
.carousel {
  width: 100vw;
  margin-top: 44px;
}

.home-bar {
  border-bottom: solid 1px rgba(236, 235, 235, 0.2);
  background: var(--color-title);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>