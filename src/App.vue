<template>
  <div id="app">
    <heads v-if="$route.name !='login'"></heads>
    <router-view />
    <footers v-if="$route.name !='about'&& $route.name !='login'"></footers>
  </div>
</template>
<script>
import heads from "./components/common/head";
import footers from "./components/common/footer";
import rightSide from "./components/common/rightSide";
export default {
  name: "App",
  components: {
    heads,
    footers
  }
};
</script>

<style lang="less" scoped>
body {
  margin: 0 !important;
}
</style>
