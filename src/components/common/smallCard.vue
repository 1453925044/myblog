<template>
<div class="card hideToShow">
    <!-- 登录框 -->
    <div class="login" v-if="prefix == 0">
        <p class="avatar">
            <img src="/static/images/my_avatar.jpg" alt="我的头像" />
        </p>
        <el-form label-width="80px">
            <el-form-item>
                <el-input v-model="name" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="pwd" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="width:100%" type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 微信名片 -->
    <div class="wx" v-if="prefix == 2">
        <p class="title">魏先生</p>
        <img class="img" src="https://s2.ax1x.com/2019/01/29/kQlPgg.png" alt />
        <span class="qrcode">微信扫码</span>
    </div>
    <!-- 打赏小卡片、欢迎打赏 -->
    <div class="praise" v-if="prefix == 3">
        <p class="title">原创不易，感谢您对作者的支持!</p>
        <ul>
            <li>
                <img class="img" src="https://s2.ax1x.com/2019/01/29/kQMZss.png" alt />
                <span class="qrcode">微信收款码</span>
            </li>
            <li>
                <img class="img" src="https://s2.ax1x.com/2019/01/29/kQMnZq.png" alt />
                <span class="qrcode">支付宝收款码</span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: {
        prefix: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            name: "",
            pwd: ""
        };
    }
};
</script>

<style lang="less" scoped>
.card {
    max-width: 300px;

    .login {
        width: 300px;

        .avatar {
            img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
        }
    }

    .login,
    .praise,
    .wx {
        text-align: center;
        background: #ffffff;
        border-radius: 4px;
        padding: 12px;
        box-sizing: border-box;
        box-shadow: -5px 3px 3px rgba(0, 0, 0, 0.1);

        ul {
            display: flex;

            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
}

// 组件全局样式
.title {
    text-align: center;
    font-size: 16px;
}

.img {
    width: 140px;
    height: 140px;
}

.qrcode {
    font-size: 14px;
}
</style>
