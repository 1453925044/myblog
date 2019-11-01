<template>
  <div class="music hideToShow">
    <!-- 轮播图 -->
    <el-carousel :autoplay="true" :height="'220px'" :interval="4000" type="card">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img :src="item.imageUrl" alt="banner封面" />
      </el-carousel-item>
    </el-carousel>
    <!-- 歌单列表 -->
    <div class="list">
      <music-list :music="list"></music-list>
    </div>
  </div>
</template>
<script>
import { playList, musicBanner } from "@/api/music/playlist.js";
import musicList from "./common/module-list";
export default {
  components: {
    musicList
  },
  data() {
    return {
      banner: [],
      list: []
    };
  },
  mounted() {
    this.getMusicBanner();
    this.getMusicList();
  },
  methods: {
    getMusicBanner() {
      //获取音乐banner接口
      musicBanner({
        type: "pc"
      })
        .then(res => {
          if (res.data) {
            let data = res.data;
            this.$set(this, "banner", data.banners);
          } else {
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取音乐歌单列表
    getMusicList() {
      playList({
        limit: 16
      })
        .then(res => {
          if (res.data) {
            let data = res.data.result;
            data.forEach((item, index) => {
              //   this.transform(item.playCount, 3);
            });
            this.$set(this, "list", data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.music {
  max-width: 1200px;
  margin: auto;
  padding: 70px 0;
  .list {
    width: 100%;
    margin: 12px 0;
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.is-active button {
  background: #409eff;
}
</style>