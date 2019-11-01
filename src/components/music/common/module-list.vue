import router from '../../../router';
<template>
  <div class="module hideToShow">
    <ul class="list">
      <li class="cell" v-for="(item,index) in newArr" :key="index" @click="toJump(item.id)">
        <div class="banner-img" :style="{'background':'url('+item.picUrl+')'}">
          <p class="mask">
            <i class="icon">&#xe63f;</i>
            <span>{{item.playCount}}</span>
          </p>
          <!-- <img class="img" :src="item.picUrl" :alt="item.name" /> -->
        </div>
        <div class="bottom">
          <span>{{item.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    music: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      newArr: []
    };
  },
  mounted() {
    if (this.music.length) {
      this.handleCount();
    } else {
      const timer = setTimeout(() => {
        this.handleCount();
        clearTimeout(timer);
      }, 500);
    }
  },
  methods: {
    toJump(id) {
      this.$router.push({
        path: "/music/list",
        query: {
          id: id
        }
      });
    },
    handleCount() {
      this.newArr = this.music;
      for (let i in this.newArr) {
        this.newArr[i].playCount = this.$unit.conversion(
          this.newArr[i].playCount
        );
      }
      return this.newArr;
    }
  }
};
</script>
<style lang="less" scoped>
.module {
  width: 100%;
  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .cell:hover .img {
      transform: scale(1.1);
      transition: all linear 0.2s;
    }

    .cell {
      margin: 10px 0;
      cursor: pointer;
      border-radius: 4px;
      width: 140px;
      height: 140px;
      // .banner-img::before {
      //    position: absolute;
      //   content: "";
      //   display: block;
      //   background: inherit;
      //   filter: blur(10px);
      //   width: 100%;
      //   height: 100%;
      //   top: 10px;
      //   left: 10px;
      //   z-index: 5;
      //   opacity: 0.4;
      //   transform-origin: 0 0;
      //   border-radius: inherit;
      //   transform: scale(1, 1);
      // }
      .banner-img {
        position: relative;
        width: 140px;
        height: 140px;
        // overflow: hidden;
        border-radius: 4px;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-position: center !important;
        .mask {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 20px;
          background: rgba(0, 0, 0, 0.2);
          padding: 0 12px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          z-index: 999;
          i,
          span {
            font-size: 12px;
            color: #ffffff;
            font-family: icon, pingfang;
          }
          .icon {
            margin-right: 3px;
          }
        }
        .img {
          width: 100%;
          height: 100%;
          transition: all linear 0.2s;
        }
      }
      .bottom {
        width: 140px;
        span {
          font-size: 13px;
          font-family: pingfang;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>