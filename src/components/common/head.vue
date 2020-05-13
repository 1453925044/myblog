<template>
<header id="header">
    <nav class="nav-menu">
        <ul class="list">
            <li class="menu-cell" :class="{'active' :is_active==index}" v-for="(item, index) in navList" :key="index" @click="change(item,index)">
                <span class="path">
                    <i class="fa" :class="[item.icon,{'is_active' :is_active==index}]">&nbsp; {{ item.title }}</i>
                </span>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    data() {
        return {
            navList: [{
                    title: "首页",
                    name: "index",
                    path: "/index",
                    icon: "fa-home"
                },
                {
                    title: "MyBlogs",
                    name: "myBlogs",
                    path: "/blogs/list",
                    icon: "fa-folder"
                },
                {
                    title: "音乐",
                    name: "music",
                    path: "/music/index",
                    icon: "fa-music"
                },
                {
                    title: "关于我",
                    name: "about",
                    path: "/about/index",
                    icon: "fa-user"
                },
                {
                    title: "故事与酒",
                    name: "story",
                    path: "#",
                    icon: "fa-hourglass-1"
                },
                // {
                //     title: "登录",
                //     name: "login",
                //     path: "/cms/login",
                //     icon: "fa-paper-plane"
                // }
            ]
        };
    },
    computed: {
        is_active() {
            return this.$store.state.is_active;
        }
    },
    methods: {
        // 首页导航路由跳转
        change(e, index) {
            this.isSelect = index;
            this.$router.push(e.path);
            this.$store.commit('mutaIs_Active', index);
        }
    }
};
</script>

<style lang="less" scoped>
@media (max-width: 1200px) {
    .nav-menu {
        width: 1200px;
    }
}

@media (min-width: 992px) {
    .nav-menu {
        width: 970px;
    }
}

@media (min-width: 768px) {
    .nav-menu {
        width: 750px;
    }

    .color-logo {
        display: none;
        float: left;
        width: 20%;
    }
}

#header {
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    z-index: 999;
    position: fixed;
    background-color: #343c47;

    .nav-menu {
        width: 1200px;
        margin: auto;

        .list {
            width: 100%;
            display: flex;

            .active {
                position: relative;

            }

            .active::after {
                left: 0;
                z-index: -1;
                bottom: 0px;
                content: "";
                width: 100%;
                height: 3px;
                border-radius: 32px;
                position: absolute;
                background-color: #45b6f7;
                animation: borderFull 0.3s ease-in-out;
            }

            .menu-cell {
                .path {
                    display: block;
                    height: 66px;
                    padding: 0 13px;
                    line-height: 66px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 15px;
                }

                .path:hover {
                    color: #409eff;
                }

                .is_active {
                    color: #45b6f7;
                }
            }
        }
    }
}

@keyframes borderFull {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}
</style>
