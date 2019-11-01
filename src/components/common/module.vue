<template>
  <div class="moudle">
    <div class="box">
      <h2 class="title">{{title}}</h2>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.title {
  position: relative;
  border-bottom: 1px solid #d9d9d9;
  font-size: 16px;
  padding: 6px 0;
}
.title::after {
  position: absolute;
  width: 60px;
  height: 2px;
  content: "";
  background: #42b3fb;
  left: 0;
  bottom: 0;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.title:hover::after {
  width: 90px;
}
</style>