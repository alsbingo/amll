<template>
  <div ref="baseEl" class="carousel">
    <div :style="scrollStyle" v-for="(item,index) in list" :key="item.title">
      <a :href="item.url">
        <img
          :class="(currentIndex==index+1)?'selected':'unSelect'"
          :style="sizeStyle"
          :src="item.path"
          :alt="item.title"
        />
      </a>
      <span v-if="showTitle" class="title">{{item.title}}</span>
    </div>
<!-- 过渡图片 -->
    <div :style="scrollStyle">
      <a :href="firstItem.url">
        <img
          :class="(currentIndex==1)?'selected':'unSelect'"
          :style="sizeStyle"
          :src="firstItem.path"
          :alt="firstItem.title"
        />
      </a>
      <span v-if="showTitle" class="title">{{firstItem.title}}</span>
    </div>
    <div class="dotList">
      <span @click="handleSwitch(index)" class="dot" v-for="(item,index) in list" :key="item.title">
        <div v-show="currentIndex==index+1" class="dot-actived"></div>
      </span>
    </div>
  </div>
</template>

<script>
let timer;
let transtionTimer;
export default {
  name: "Carousel",
  props: {
    list: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    showTitle: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      scrollStyle: { transform: "translateX(0px)" },
      currentIndex: 1,
      width: 0,
      height: 200
    };
  },
  mounted() {
    this.height = this.$refs.baseEl.offsetHeight;
    this.width = this.$refs.baseEl.offsetWidth;
    const baseEl = this.$refs.baseEl;
    const com = this;
    // 监听窗体大小更改
    window.onresize = function windowResize() {
      com.width = baseEl.offsetWidth;
      com.height = baseEl.offsetHeight;
    };
    this.currentIndex = 1;
    this.begin();
  },
  computed: {
    sizeStyle() {
      return { width: this.width + "px", height: this.height + "px" };
    },
    number() {
      return this.list.length + 1;
    },
    firstItem() {
      return this.list[0];
    }
  },
  created() {},
  destroyed() {
    clearInterval(timer);
    timer = null;
    clearInterval(transtionTimer);
    transtionTimer = null;
  },
  methods: {
    begin() {
      timer = setInterval(() => {
        if (transtionTimer) {
          return;
        }
        this.scroll();
      }, 2000);
    },
    scroll() {
      let start = -(((this.currentIndex - 1) % this.number) * this.width);
      let end = -(this.currentIndex % this.number) * this.width;
      if (end == 0) {
        start = 0;
        end = -this.width;
      }
      this.move(start, end);
    },
    move(start, end) {
      let offset = this.width / 20;
      transtionTimer = setInterval(() => {
        start = start - offset;
        if (start <= end) {
          clearInterval(transtionTimer);
          transtionTimer = null;
          start = end;
          if (this.currentIndex % this.number == 0) {
            this.currentIndex = 1;
          } else {
            this.currentIndex++;
            if (this.currentIndex == this.number) {
              this.currentIndex = 1;
              start = 0;
            }
          }
        }
        this.scrollStyle = {
          transform: "translateX(" + start + "px)"
        };
      }, 20);
    },
    handleSwitch(index) {
      clearInterval(transtionTimer);
      transtionTimer = null;
      clearInterval(timer);
      timer = null;
      this.currentIndex = index + 1;

      this.scrollStyle = {
        transform: "translateX(" + -(index % this.number) * this.width + "px)",
        transition: "opacity 0.6s linear"
      };
      this.begin();
    }
  }
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.title {
  height: 30px;
  background: rgba(213, 213, 230, 0.4);
  text-align: center;
  position: absolute;
  transform: translateY(-100%);
  color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
}

.dotList {
  display: flex;
  position: absolute;
  z-index: 9;
  right: 20px;
  bottom: 40px;
}
.dot {
  width: 10px;
  height: 10px;
  margin: 0 2px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
}

.dot-actived {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: orange;
}

/* 动画效果 */
.selected {
  opacity: 1;
  animation: myOpacity 0.6s;
}
.unSelect {
  opacity: 0.1;
}

@keyframes myOpacity {
  0% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>