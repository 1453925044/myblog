<template>
<div class="index-container">
    <headers></headers>
    <!-- 首页大屏banner展示 -->
    <snow-banner></snow-banner>
    <!-- 内容区 -->
    <panel-container>
        <!-- 内容主要区域 -->
        <div class="main-content">
            <!-- 首页轮播专栏 -->
            <div class="section-one">
                <div class="banner radiu4px">
                    <el-carousel class="radiu4px" trigger="click" height="260px">
                        <el-carousel-item v-for="(image,index) in banner" :key="index">
                            <img style="object-fit:contain" :src="image" alt="轮播图片" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="special-column">
                    <p class="column">
                        <span>这是内容</span>
                        <img src="https://s2.ax1x.com/2019/01/29/kQK7a6.png" alt="专栏" />
                    </p>
                    <p class="column">
                        <span>这是内容</span>
                        <img src="https://s2.ax1x.com/2019/01/29/kQK7a6.png" alt="专栏" />
                    </p>
                </div>
            </div>
            <!-- 文章展示区 -->
            <div class="section-two">
                <div class="artic">
                    <articles></articles>
                </div>
            </div>
        </div>
        <!-- 侧边菜单栏 -->
        <div class="main-menu">
            <div class="personal-card">
                <businessCard></businessCard>
            </div>
            <div class="menu">
                <menu-bar></menu-bar>
            </div>
        </div>
    </panel-container>
    <sidebar></sidebar>
</div>
</template>

<script>
import snow from "@/library/snow.js";
import sidebar from "@/components/common/sidebar";
import articles from "@/components/common/article";
import snowBanner from "@/components/common/banner";
import panelContainer from '@/components/panel/index'
import menuBar from "@/components/common/menu-right";
import audioPlay from "@/components/audio-play/audio";
import businessCard from "@/components/common/myCard";
export default {
    components: {
        sidebar,
        menuBar,
        articles,
        audioPlay,
        snowBanner,
        businessCard,
        panelContainer
    },
    data() {
        return {
            isShow: false,
            scrollTop: 0,
            banner: [
                "/static/images/b1.jpeg",
                "/static/images/b2.jpeg",
                "/static/images/b3.jpeg"
            ],
        }
    },
    mounted() {
        this.pageInit();
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        // 页面初始化
        pageInit() {
            snow.snows();
            snow.framework();
        },
        // 监听页面滚动
        handleScroll() {
            const scrollTop = window.pageYOffset || document.body.scrollTop;
            this.scrollTop = scrollTop;
            if (scrollTop > 350) {
                this.isShow = true;
                return;
            }
            this.isShow = false;
        }
    }
}
</script>

<style lang="less" scoped>
.index-container {
    width: 100%;
    overflow: hidden;

    .main-content {
        width: 72%;

        .section-one {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .banner {
                width: 65%;
            }

            .special-column {
                flex: 1;
                height: 260px;
                display: flex;
                margin-left: 16px;
                flex-direction: column;
                justify-content: space-between;

                .column {
                    width: 100%;
                    height: 48%;
                    display: flex;
                    overflow: hidden;
                    border-radius: 3px;
                    position: relative;
                    align-items: center;
                    justify-content: center;

                    span {
                        z-index: 999;
                        color: #ffffff;
                        font-size: 18px;
                        position: absolute;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        filter: grayscale(50%);
                        transition: all linear .4s;
                    }

                    img:hover {
                        transform: scale(1.1);
                        transition: all linear .4s;
                    }
                }
            }
        }

        .section-two {
            width: 100%;

            .artic {
                width: 100%;
            }
        }
    }

    .main-menu {
        flex: 1;
        margin-left: 16px;

        .personal-card {
            overflow: hidden;
        }

        .menu {
            margin-top: 23px;
        }
    }
}
</style>
