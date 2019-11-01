<template>
  <div class="playBar">
    <!-- 上一首，下一首，播放 -->
    <div class="box">
      <div class="play">
        <span class="change">
          <i class="icon">&#xe607;</i>
        </span>
        <span class="start">
          <i class="icon">&#xe601;</i>
        </span>
        <span class="change">
          <i class="icon">&#xe616;</i>
        </span>
      </div>
      <div class="play-bar">
        <div class="img">
          <img
            src="http://p1.music.126.net/s6zFxvXe5kOxub4_x4rZhQ==/109951163052847567.jpg?param=34y34"
            alt="专辑图片"
          />
        </div>
        <div class="progress">
          <p class="desc">
            <span>我还想她</span>
            <span>林俊杰</span>
          </p>
          <p class="progress-bar">
            <slider :min="0" :max="100" v-model="per"></slider>
          </p>
        </div>
        <div class="menu">
          <span>
            <i class="icon">&#xe753;</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import slider from "./slide-bar";
export default {
  components: {
    slider
  },
  data() {
    return {
      per: 0
    };
  }
};
</script>
<style lang="less" scoped>
.playBar {
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.85);
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.6);
  .box {
    width: 1200px;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .play {
      width: 120px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:hover i {
        cursor: pointer;
        color: #ffffff;
        transition: all linear 0.2s;
        text-shadow: #ffffff;
      }
      .change {
        i {
          font-size: 32px;
          color: #bbbbbb;
        }
      }
      .start {
        i {
          font-size: 36px;
          color: #ffffff;
        }
      }
    }
    .play-bar {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .img {
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 34px;
          height: 34px;
          border-radius: 4px;
        }
      }
      .progress {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 16px;
        span {
          color: #ffffff;
          font-size: 10px;
        }
      }
      .menu {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 60px;
        i {
          color: #ffffff;
          font-size: 20px;
        }
      }
    }
  }
}
</style>