<template>
<div id="app">
    <headers v-if="$route.name !='create'"></headers>
    <router-view />
    <keep-alive>
        <footers></footers>
    </keep-alive>
</div>
</template>

<script>
import footers from "./components/common/footer";
export default {
    name: "App",
    components: {
        footers
    }
};
</script>

<style lang="less" scoped>
body {
    margin: 0 !important;
}
</style>
