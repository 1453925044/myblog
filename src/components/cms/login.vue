import { outside } from 'semver';
<template>
  <div class="login">
    <div class="box">
      <div class="head">
        <h2>后台管理系统</h2>
      </div>
      <div class="form">
        <div class="colum">
          <el-input class="colum-input" placeholder="请输入登录账号" v-model="userCount">
            <i slot="prefix" class="icon">&#xe60a;</i>
          </el-input>
        </div>
        <div class="colum">
          <el-input class="colum-input" placeholder="请输入登录密码" v-model="password">
            <i slot="prefix" class="icon">&#xe83e;</i>
          </el-input>
        </div>
        <div class="btn">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <el-button type="primary" @click="login">登录</el-button>
        </div>
        <div class="desc">欢迎登录后台管理系统</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { isLogin } from "@/api/user/user";
export default {
  data() {
    return {
      userCount: "",
      password: "",
      checked: false
    };
  },
  methods: {
    ...mapMutations(["login"]),
    login() {
      isLogin({
        username: String(this.userCount),
        password: String(this.password)
      })
        .then(res => {
          if (res.success) {
            this.token = res.token;
          } else {
            this.$alert(res.data.message, "提示", {
              confirmButtonText: "确定"
            });
          }
        })
        .catch(err => {
          console.log(err);
          // this.$alert(err.data.message, "提示", {
          //   confirmButtonText: "确定"
          // });
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url("/static/images/b1.jpg") no-repeat;
  background-position: 100%;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  .box {
    width: 320px;
    margin: auto;
    padding: 16px 12px;
    box-sizing: border-box;
    background: rgba(113, 188, 219, 0.6);
    box-shadow: 0px 0px 12px rgba(143, 207, 232, 0.2);
    border-radius: 12px;

    .head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 32px;
        height: 32px;
      }
    }
    .form {
      width: 100%;
      padding: 5px 0;
      .colum,
      .btn {
        width: 100%;
        margin: 24px 0;
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .desc {
        text-align: center;
        font-family: pingfang;
        font-size: 14px;
        color: #cde9f4;
      }
    }
  }
}
</style>
<style lang="less">
.colum-input {
  .el-input__inner {
    border-radius: 22px;
  }
  .el-input__prefix {
    display: flex;
    align-items: center;
  }
}
.btn {
  .el-button {
    width: 90px;
    padding: 10px 20px;
    border-radius: 6px;
    background: #6eb6d1;
    border-color: #6eb6d1;
  }
  .el-button:active {
    background: rgba(110, 182, 209, 0.7);
    border-color: rgba(110, 182, 209, 0.7);
  }
}
</style>