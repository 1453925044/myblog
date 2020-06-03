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
    padding: 6px 0;
    font-size: 16px;
    position: relative;
    border-bottom: 1px solid #d9d9d9;

}

.title::after {
    left: 0;
    bottom: 0;
    width: 60px;
    height: 2px;
    content: "";
    position: absolute;
    background: #42b3fb;
    transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;

}

.title:hover::after {
    width: 90px;
}

h2 {
    margin: 0;
}
</style>
