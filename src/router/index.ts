// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 引入一个一个可能要呈现组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式（稍后讲解）
  routes: [
    //一个一个的路由规则
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    {
      name: "news",
      path: "/news",
      component: News,
      children: [
        {
          path: "detail/:id/:title/:content?",
          name: "detail",
          component: Detail,
          // F1:将路由收到的所有「params」参数作为props传给路由组件。（query）无效
          // props:true 

          // F2:函数式写法，自带参数route，可以自己决定把什么传出去。params和query均有效
          props(route){
            return route.params
          }

          // F3:对象写法，均适用（不常用，F1F2常用）
          // props:{a:100,b:200,c:300}
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

// 暴露出去router
export default router;
