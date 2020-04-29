<template>
  <div @click="changeRouter" class="tabbar-item">
    <slot v-if="isActive" name="active-img" />
    <slot v-else name="normal-img" />
    <div :style="isActive?{'color':activeColor}:{}">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    title: {
      type: String,
      default: "导航"
    },
    activeColor: {
      type: String,
      default: "#1296db"
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    }
  },
  methods: {
    changeRouter() {
      if (this.$route.path != this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>
<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
}

.svg-icon,.tabbar-item img {
  width: 18px;
  height: 18px;
  margin-bottom: 0px;
}
</style>