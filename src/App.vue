<template>
<div id="app">
    <headers></headers>
    <router-view />
    <footers v-if="$route.name !='about'&& $route.name !='login'"></footers>
</div>
</template>

<script>
import footers from "./components/common/footer";
export default {
    name: "App",
    components: {
        footers
    },
};
</script>

<style lang="less" scoped>
body {
    margin: 0 !important;
}
</style>
