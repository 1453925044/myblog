<template>
  <header id="header">
    <nav class="nav-menu">
      <ul class="list">
        <li class="menu-cell" v-for="(item, index) in navList" :key="index" @click="change(item)">
          <router-link class="path" :to="item.path">
            <i class="fa" :class="item.icon">&nbsp; {{ item.title }}</i>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      path: "",
      navList: [
        {
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
        {
          title: "登录",
          name: "login",
          path: "/cms/login",
          icon: "fa-paper-plane"
        }
      ]
    };
  },
  methods: {
    change(e) {
      this.isSelect = e.name;
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
  position: fixed;
  width: 100%;
  padding: 0;
  left: 0;
  z-index: 999;
  background: rgba(40, 42, 44, 0.6);
  .nav-menu {
    width: 1200px;
    margin: auto;
    .list {
      display: flex;
      width: 100%;
      padding: 15px 0;
      .menu-cell {
        float: left;
        margin-right: 36px;
        .path {
          color: #ffffff;
          font-weight: bold;
          font-size: 15px;
          display: block;
        }
        .path:hover {
          color: #409eff;
        }
        .is-active {
          color: #409eff;
        }
      }
    }
  }
}
</style>
