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

    <!--分类标签-->
<div class="infotypelist">
	<ul>
		<li >
			<a href="#" target="chartiframe" >
				<i class="lefticon"></i>
        <router-link to="/first"><p>行业历史用电量统计分析</p></router-link>
				<i class="righticon"></i>
			</a>
		</li>
		<li>
			<a href="#" target="chartiframe" >
				<i class="lefticon"></i>
				<router-link to="/second" ><p>行业用电量关联性分析</p></router-link> 
				<i class="righticon"></i>
			</a>
		</li>
		<li>
			<a href="#" target="chartiframe">
				<i class="lefticon"></i>
				<router-link to="/third"> <p>行业用电趋势预测</p></router-link>
				<i class="righticon"></i>
			</a>
		</li>
		<li>
			<a href="#" target="chartiframe">
				<i class="lefticon"></i>
        <router-link to="/forth"> <p>峰谷平电价和行业分时定价</p></router-link>
				<i class="righticon"></i>
			</a>
		</li>
		<li>
			<a href="#" target="chartiframe">
				<i class="lefticon"></i>
        <router-link to="/fifth"> <p>行业分时用电量优化</p></router-link>
				<i class="righticon"></i>
			</a>
		</li>
		<li>
			<a href="#" target="chartiframe">
				<i class="lefticon"></i>
            <router-link to="/sixth"> <p>需求侧用电量优化</p></router-link>
				<i class="righticon"></i>
			</a>
		</li>
    <li>
			<a href="#" target="chartiframe">
				<i class="lefticon"></i>
            <router-link to="/testPage"> <p>测试</p></router-link>
				<i class="righticon"></i>
			</a>
		</li>
	</ul>
</div>
    <router-view class="menu-right" />
  </div>
</template>

<script>
export default {
  name: "App",
  data:{
    activeClass: 'infotypeaction',
    leftClass:'lefticon'
  },
  data() {
    return {
      // activeName: "1"
      navList: [
        { name: "/first", navItem: "发现项目" },
        { name: "/second", navItem: "社区动态" },
        { name: "/third", navItem: "发布项目" },

        { name: "/forth", navItem: "个人中心" },
        { name: "/fifth", navItem: "个人中心" },
        { name: "/sixth", navItem: "管理员中心" },
        { name: "/testPage", navItem: "testPage" }
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

<style scoped>
@import "./assets/css/indexstyle.css";
/* .menu-right {
  margin-left: 200px;
} */
el-menu-item{
  margin-left: 20px;
  padding: 20px;
}
</style>
