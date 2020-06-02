<template>
<div class="nav">
    <!-- 侧边导航栏 -->
    <transition name="slide-fade">
        <div class="toolBar" v-if="show">
            <div class="close" @click="show = !show">
                <i class="icon">&#xe690;</i>
            </div>
            <div class="icon-nav">
                <div class="icon" :class="{'is-active' :num==index}" v-for="(icon,index) in iconNav" :key="index" @click="change(icon,index)">
                    <img :src="icon" alt="侧边导航图标" />
                    <section class="box">
                        <smallCard v-if="num == index" :prefix="num"></smallCard>
                    </section>
                </div>
            </div>
        </div>
    </transition>
    <transition name="slide-fade">
        <div class="menu" v-if="!show" @click="show = !show">
            <i class="icon">&#xe60c;</i>
        </div>
    </transition>
</div>
</template>

<script>
import smallCard from "@/components/common/smallCard";
export default {
    components: {
        smallCard
    },
    data() {
        return {
            num: null,
            show: true,
            iconNav: [
                "/static/images/user.png",
                "/static/images/qq-side.png",
                "/static/images/wx-side.png",
                "/static/images/ds.png"
            ]
        };
    },
    methods: {
        change(item, index) {
            this.num = index;
        }
    }
};
</script>

<style lang="less" scoped>
.toolBar {
    top: 0;
    right: 0;
    width: 40px;
    z-index: 9999;
    position: fixed;
    min-height: 100%;
    background: #343c47;
    animation: toolBar;
    transition: all 0.4s;

    .close {
        top: 70px;
        width: 40px;
        height: 40px;
        z-index: 9999999999;
        line-height: 40px;
        position: absolute;
        text-align: center;

        i {
            color: #ffffff;
            cursor: pointer;
            font-weight: bold;
            font-family: icon;
        }
    }

    .icon-nav {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 40px;
        height: 180px;
        margin: auto;
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: space-between;

        .icon {

            width: 100%;
            height: 40px;
            display: flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            justify-content: center;

            .box {
                top: 0;
                right: 40px;
                position: absolute;
            }

            img {
                width: 24px;
                height: 24px;
            }
        }

        .is-active {
            background: #000000;
        }
    }
}

.menu {
    top: 0;
    bottom: 0;
    right: 5px;
    width: 38px;
    height: 38px;
    margin: auto;
    cursor: pointer;
    line-height: 40px;
    position: fixed;
    text-align: center;
    background: #e9eaed;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    i {
        color: #333333;
        font-size: 22px;
        font-family: icon;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
