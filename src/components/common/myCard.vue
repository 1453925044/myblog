<template>
<div class="card">
    <p class="title">我的个人名片</p>
    <div class="desc">
        <p class="text">
            <span>职业：{{introduce.profession}}</span>
        </p>
        <p class="text">
            <span>现居：{{introduce.address}}</span>
        </p>
        <p class="text">
            <span>公司：{{introduce.company}}</span>
        </p>
        <p class="text">
            <span>email：{{introduce.email}}</span>
        </p>
    </div>
    <div class="icon-list">
        <div class="menu" v-for="(icon,index) in icons" :key="index" @click="jump(icon.path)">
            <img class="menu-icon" :src="icon.img" alt="图标" />
        </div>
        <div class="wx-img">
            <img src="https://s2.ax1x.com/2019/01/29/kQlPgg.png" />
        </div>
    </div>
</div>
</template>

<script>
import {
    getUserInfo
} from '@/api/user/user.js'
export default {
    data() {
        return {
            introduce: [ ],
            icons: [
                {
                    img: "/static/images/zy.png",
                    path: "https://github.com/1453925044",
                    prefix: 0
                },
                {
                    img: "/static/images/yx.png",
                    path: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=IhMWFxEbEBcSFhZiU1MMQU1P",
                    prefix: 1
                },
                {
                    img: "/static/images/QQ.png",
                    path: "http://wpa.qq.com/msgrd?v=3&uin=1453925044&site=qq&menu=yes",
                    prefix: 2
                },
                {
                    img: "/static/images/wx.png",
                    path: "",
                    prefix: 3
                }
            ]
        };
    },
    mounted() {
        this.userInfo();
    },
    methods: {
        userInfo() {
            getUserInfo().then(res => {
                if (res.success && res.data) {
                    this.introduce = res.data;
                    return
                }
            })
        },
        jump(args) {
            window.open(args);
        }
    }
};
</script>

<style lang="less" scoped>
.card {
    width: 100%;
    height: 100%;
    height: 260px;
    padding: 16px;
    display: flex;
    border-radius: 3px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: #2a2a2a;
    justify-content: space-around;

    .title {
        color: #89919a;
        font-size: 24px;
        padding: 12px 0;
    }

    .desc {
        p {
            font-size: 14px;
            color: #d0d2d4;
            line-height: 28px;
        }
    }

    .icon-list {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .menu {
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
            cursor: pointer;

            .menu-icon {
                width: 32px;
                height: 32px;
            }
        }

        .menu:nth-child(4):hover+.wx-img {
            display: block;
        }

        .wx-img {
            position: absolute;
            bottom: 60px;
            right: 0px;
            display: none;

            img {
                width: 92px;
                height: 92px;
            }
        }
    }
}
</style>
