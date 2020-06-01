<template>
<div class="blogs-container">
    <div style="width:100px">
        <el-button type="primary" @click="submit">点击发布</el-button>
    </div>
    <editor @updata="updata"></editor>
    <h1>调用接口预览效果</h1>
    <div class="content" v-html="content"></div>
    <!-- <div class="artic hideToShow">
        文章头部专栏
        <div class="head">
            <div class="head-left">
                <img src="/static/images/my_avatar.jpg" alt="专栏封面" />
            </div>
            <div class="head-right">
                <h1>博客日记</h1>
                <p>这是我的个人博客，我的个人博客网站它不仅仅是我个人兴趣和爱好，还是我创业的起点。我爱网页设计，我爱写前端代码。它充实了我的生活，实现了我的目标和梦想。</p>
            </div>
        </div>
        文章列表页
        <articles></articles>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
        </div>
    </div>
    侧边菜单栏
    <div class="menu-right">
        <menu-bar></menu-bar>
    </div> -->
</div>
</template>

<script>
import {
    getList,
    updateBlog
} from '@/api/blog/index.js'
import editor from '@/components/editor/editor'
import articles from "@/components/common/article";
import menuBar from "@/components/common/menu-right";
export default {
    components: {
        editor,
        menuBar,
        articles,
    },
    data() {
        return {
            articles: '',
            content: '',
        }
    },
    mounted() {
        this.getBlog();
    },
    methods: {
        updata(e) {
            e = e.replace(/'/g, '"');
            this.articles = e;
        },
        getBlog() {
            getList({
                author: '魏超'
            }).then(res => {
                if (res.success && res.data) {
                    let data = res.data
                    this.content = data[0].content;
                }
            })
        },
        
    }
};
</script>

<style lang="less" scoped>
h1 {
    text-align: center;
    margin: 30px 0;
}

.content {
    background: #ffffff;

    padding: 0 14px;
    box-sizing: border-box;
}

.blogs-container {
    display: flex;
    width: 1200px;
    overflow: hidden;
    max-width: 1200px;
    flex-direction: column;
    margin: 90px auto 0 auto;
    justify-content: space-between;

    .artic {
        width: 74%;

        .head {
            width: 100%;
            background: #ffffff;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;

            &-left {
                img {
                    width: 130px;
                    height: 120px;
                }
            }

            &-right {
                margin-left: 16px;

                h1 {
                    font-size: 20px;
                    color: #1487f4;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 14px;
                    color: #888;
                }
            }
        }
    }

    .menu-right {
        width: 25%;
    }

    .block {
        display: flex;
    }
}
</style><style lang="less">
.el-pagination {
    padding: 24px 0;
    margin: auto;
}

::-webkit-scrollbar {
    height: 0px !important;
}

::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 0px;
}
</style>
