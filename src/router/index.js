import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    { 
      path: '/index',
      name: 'index',
      component: resolve => require(['@/template/index/index'], resolve)
    },
    { 
      path: '/test',
      name: 'test',
      component: resolve => require(['@/template/test'], resolve)
    },
    {
      path: "/about/index",
      name: 'about',
      component: resolve => require(['@/components/about/index'], resolve),
      meta: {
        title: "关于我"
      }
    },
    {
      path: "/blogs/create",
      name: 'create',
      component: resolve => require(['@/template/blogs/create'], resolve),
      meta: {
        title: "文章发布"
      }
    },
    {
      path: "/blogs/list",
      name: 'myBlogs',
      component: resolve => require(['@/template/blogs/list'], resolve),
      meta: {
        title: "文章列表"
      }
    },
    {
      path: "/blogs/detail",
      name: 'detail',
      component: resolve => require(['@/template/blogs/detail'], resolve),
      meta: {
        title: "文章详情"
      }
    },
    {
      path: "/music/index",
      name: 'music',
      component: resolve => require(['@/components/music/index'], resolve),
      meta: {
        title: "音乐"
      },
    },
    {
      path: "/music/list",
      name: 'music-list',
      component: resolve => require(['@/components/music/list'], resolve),
    },
    {
      path: "/cms/login",
      name: 'login',
      component: resolve => require(['@/components/cms/login'], resolve),
      meta: {
        title: "登录"
      }
    }
  ],
  // 路由切换时，更新显示坐标
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// 全局路由守
// router.beforeEach((to, from, next) => {
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: 回调函数: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//   const isPath = to.path.split('/')[1];
//   if (isPath != 'about') {//判断是否需要登录
//     next()
//   } else {
//     MessageBox.alert('你还未登录,请先登录', '提示', {
//       confirmButtonText: "确定",
//       showClose: false,
//       callback: () => {
//         next({
//           path: "/cms/login",
//           query: {
//             redirect: to.fullPath
//           }
//         });
//       }
//     })
//   }
// })

// 跳转路由回到窗口起始位置
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})
// 解决路由老版本的错误
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
export default router;


