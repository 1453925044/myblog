import less from 'less';
<template>
<div class="blogs-detail">
    <banner :bHeight="300" :bgImg="'https://res.talklee.com/koilee/images/2.jpg'" :title="'文章详情'" :ctx="'Mr.Wei文章详情'"></banner>
    <div class="blog-content">
        <div v-html="content.content"></div>
    </div>
</div>
</template>

<script>
import {
    getBlogDate
} from "@/api/blog/index.js";
import banner from "@/components/common/banner";
export default {
    components: {
        banner
    },
    data() {
        return {
            id: '',
            content: ''
        };
    },
    mounted() {
        this.id = this.$route.query.id;
        this.getDetail();
    },
    methods: {
        getDetail() {
            getBlogDate({
                id: this.id
            }).then(res => {
                if (res.success && res.data) {
                    this.content = res.data;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.blogs-detail {
    width: 100%;
}
</style>
