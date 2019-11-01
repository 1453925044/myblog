<template>
  <div id="index">
    <banner />
    <div class="container">
      <a href="#top"></a>
      <!-- 第一部分 -->
      <div class="section-one">
        <div class="banner radiu4px">
          <el-carousel class="radiu4px" trigger="click" height="260px">
            <el-carousel-item v-for="(image,index) in bannerList" :key="index">
              <img :src="image" alt="轮播图片" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="article">
          <p class="radiu4px">
            <img
              class="radiu4px"
              src="https://weichaooqx.com/wp-content/uploads/2019/02/aside1.png"
            />
          </p>
          <p class="radiu4px">
            <img class="radiu4px" src="https://s2.ax1x.com/2019/01/29/kQK7a6.png" alt />
          </p>
        </div>
        <!-- 个人名片 -->
        <div class="business-card">
          <myCard></myCard>
        </div>
      </div>
      <!-- 第二部分 -->
      <div class="section-two">
        <!-- 文章列表展示 -->
        <div class="artic">
          <articles></articles>
        </div>
        <!-- 侧边菜单栏 -->
        <div class="menu-right">
          <menu-right></menu-right>
        </div>
      </div>
      <a href="#top" class="topBar hideToShow" v-if="isShow">
        <img src="/static/images/zd.png" alt />
      </a>
    </div>
    <rightSide />
  </div>
</template>

<script>
import banner from "@/components/common/banner";
import myCard from "@/components/common/myCard";
import menuRight from "@/components/common/menu-right";
import articles from "@/components/common/article";
import rightSide from "@/components/common/rightSide";
import snow from "../../../static/js/snow.js";
import $ from "jquery";
export default {
  name: "index",
  components: {
    banner,
    myCard,
    articles,
    menuRight,
    rightSide
  },
  data() {
    return {
      isShow: false,
      scrollTop: 0,
      bannerList: [
        "https://s2.ax1x.com/2019/01/29/kQQfBR.jpg",
        "https://s2.ax1x.com/2019/01/29/kQMFJS.png",
        "https://s2.ax1x.com/2019/01/29/kQKvMd.png"
      ],
      snowConf: {
        windPower: 1,
        speed: 3,
        count: 12,
        size: 10,
        opacity: 1,
        images: [
          "https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png",
          "https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/sock.png",
          "https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/tree.png"
        ]
      },
      show: false
    };
  },
  mounted() {
    snow.framework();
    snow.snows();
    this.show = true;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 监听页面滚动
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (scrollTop > 350) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
#index {
  width: 100%;
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;

    .section-one {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .banner {
        width: 45%;
      }
      .article {
        width: 27.5%;
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          width: 100%;
          height: 48%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .business-card {
        width: 25%;
        height: 260px;
      }
    }
    .section-two {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .artic {
        width: 74%;
      }
      .menu-right {
        width: 25%;
        margin-top: 24px;
      }
    }
    .topBar {
      position: fixed;
      right: 52px;
      bottom: 140px;
      z-index: 999;
      display: inline-block;
    }
  }
}
</style>
