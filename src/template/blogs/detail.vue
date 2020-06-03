import less from 'less';
<template>
<div class="blogs-detail">
    <!-- <banner :bHeight="300" :bgImg="'https://res.talklee.com/koilee/images/2.jpg'" :title="'文章详情'" :ctx="'Mr.Wei文章详情'"></banner> -->
    <div class="blog-content">
        <div class="content">
            <div class="htitle">
                <span>文章详情</span>
            </div>
            <h1 class="con_title">{{content.title}}</h1>
            <p class="user-info">
                <i class="avatar"><img src="https://s2.ax1x.com/2019/01/29/kQlivQ.jpg"></i>
                <span>{{content.createTime}}</span>
                <span>{{content.views || 0}}人已围观</span>
                <span>{{content.tags}}</span>
            </p>
            <p class="desc">
                <b>简介</b>
                {{content.descript || '暂无简介'}}
                <div v-html="content.content"></div>
        </div>
        <!-- 侧边菜单栏 -->
        <div class="main-menu">
            <div class="menu">
                <menu-bar></menu-bar>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    getBlogDate
} from "@/api/blog/index.js";
import banner from "@/components/common/banner";
import menuBar from "@/components/common/menu-right";
import businessCard from "@/components/common/myCard";
export default {
    components: {
        banner,
        menuBar,
        businessCard
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

    .blog-content {
        display: flex;
        width: 1200px;
        padding: 16px 0;
        max-width: 1200px;
        border-radius: 4px;
        margin: 80px auto 0;

        .htitle {
            margin: 0;
            width: 100%;
            display: flex;
            font-size: 18px;
            align-items: center;
            border-bottom: 1px solid #eee;

            span {
                color: #181818;
                padding: 8px 0;
                font-weight: 600;
                position: relative;
            }

            span::after {
                left: 0;
                bottom: 0;
                width: 70px;
                height: 2px;
                content: "";
                background: #409eff;
                position: absolute;
                transition: all .5s ease;
                -moz-transition: all .5s ease;
                -webkit-transition: all .5s ease;

            }

            span:hover::after {
                width: 90px;
            }
        }

        .con_title {
            font-size: 26px;
            margin-top: 20px;
        }

        .user-info {
            width: 100%;
            display: flex;
            color: #999999;
            overflow: hidden;
            align-items: center;

            .avatar {
                width: 36px;
                height: 36px;
                padding: 2px;
                display: block;
                overflow: hidden;
                position: relative;
                border-radius: 100%;
                background: linear-gradient(to top right, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }

            span {
                font-size: 14px;
                margin-left: 10px;
            }
        }

        .desc {
            width: 100%;
            padding: 10px;
            color: #888888;
            margin: 20px 0;
            line-height: 24px;
            box-sizing: border-box;
            border: 1px solid #F3F3F3;
            background: none repeat 0 0 #F6F6F6;

            b {
                color: #181818;
            }
        }

        .content,
        .main-menu {
            background: #ffffff;
        }

        .content {
            width: 72%;
            padding: 12px 16px;
            box-sizing: border-box;
        }

        .main-menu {
            flex: 1;
            margin-left: 16px;
        }
    }
}
</style>
