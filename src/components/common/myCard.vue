<template>
  <div class="card radiu4px">
    <h3>魏超个人名片</h3>
    <div class="introduce">
      <p class="text" v-for="(item,index) in introduce" :key="index">
        <span>{{item.text}}</span>
      </p>
    </div>
    <div class="icon-list">
      <p class="icon-box" v-for="(icon,index) in iconList" :key="index">
        <img :src="icon" alt="图标" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      introduce: [
        {
          text: "职业：程序员，Web前端开发工程师"
        },
        {
          text: "现居：四川省成都市高新区"
        },
        {
          text: "公司：成都传晟信息技术有限公司（在职）"
        },
        {
          text: "Email：1453925044@qq.com"
        }
      ],
      iconList: [
        "/static/images/zy.png",
        "/static/images/yx.png",
        "/static/images/QQ.png",
        "/static/images/wx.png"
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  padding: 16px;
  box-sizing: border-box;
  justify-content: space-around;
  h3 {
    color: #89919a;
    font-size: 24px;
  }
  .introduce {
    p {
      font-size: 14px;
      color: #d0d2d4;
      line-height: 28px;
    }
  }
  .icon-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 53px;
      height: 53px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1),
        inset 0px 1px 1px rgba(0, 0, 0, 0.7);
      margin: 0 5px;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>