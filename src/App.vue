<template>
  <div id="app">
    <!--顶部标题栏-->
    <div class="topbox">
      <div class="topleftbox"></div>
      <div class="toptitlebox">需求侧工业用电行为大数据深度分析及优化决策支持</div>
      <div class="toprightbox">
        <p id="todaytime"></p>
      </div>
    </div>

    <el-col>
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <i class="el-icon-s-platform"></i>
          <span>{{ item.navItem }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <router-view class="menu-right" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // activeName: "1"
      navList: [
        { name: "/first", navItem: "发现项目" },
        { name: "/second", navItem: "社区动态" },
        { name: "/third", navItem: "发布项目" },

        { name: "/forth", navItem: "个人中心" },
        { name: "/fifth", navItem: "个人中心" },
        { name: "/sixth", navItem: "管理员中心" }
      ]
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
@import "./assets/css/indexstyle.css";
.menu-right {
  margin-left: 200px;
}
.el-col{
  float:none;
}
</style>
