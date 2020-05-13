<template>
<div class="panel-container">
    <slot></slot>
</div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="less">
.panel-container {
    margin: auto;
    display: flex;
    padding: 16px 0;
    overflow: hidden;
    max-width: 1200px;
}
</style>
