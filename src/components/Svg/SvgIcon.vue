<template>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      //required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return this.className ;
      } else {
        return "svg-icon-default";
      }
    }
  }
};
</script>

<style scoped>
.svg-icon-default {
  width: 40px;
  height: 40px;
  fill: red;
}
</style>