<template>
  <footer id="footer">
    <div class="footBox">
      <div class="pesonalCard">
        <ul>
          <li>
            <img src="https://s2.ax1x.com/2019/01/29/kQlPgg.png" alt />
            <span>我的微信</span>
          </li>
          <li>
            <img src="https://s2.ax1x.com/2019/01/29/kQlPgg.png" alt />
            <span>我的微信</span>
          </li>
        </ul>
      </div>
      <div class="personalStatement">
        <p>
          <b>站点声明</b>
        </p>
        <p>本站个人博客网站，均为魏超本人设计，个人可以使用，但是未经许可不得用于任何商业目的。</p>
        <p>所有文章、个人博客未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：1453925044@qq.com</p>
        <p>
          © 2019 魏超个人博客 All Rights Reserved.
          <span @click="jump()">备案号:蜀ICP备18020325号</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      window.open("http://www.beian.miit.gov.cn");
    }
  }
};
</script>

<style lang="less" scoped>
footer::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  top: 0;
  left: 0;
  background: linear-gradient(
    to left,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
}
footer {
  position: relative;
  background: #373d41;
  .footBox {
    max-width: 1200px;
    margin: auto;
    padding: 10px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .pesonalCard {
      ul {
        width: 100%;
        display: flex;
        li {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-right: 24px;
          img {
            width: 100px;
            height: 100px;
          }
          span {
            color: #73777a;
          }
        }
      }
    }
    .personalStatement {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        color: #73777a;
        b {
          color: #00c1de;
        }
      }
    }
  }
}
span {
  cursor: pointer;
}
</style>
