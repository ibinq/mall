<template>
  <el-container class="home-container">
    <el-header>
      <div class="header-div">
        <img src="../assets/logo.jpg" alt />
        <span class="header-span">后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width= "isCollapse ? '64px':'200px'">
        <div class="togglo-button" @click="changButton">|||</div>
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
             
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#333744"
              text-color="#fff"
              active-text-color="#ffd04b"
              :unique-opened="true"
              :collapse="isCollapse"
              :router="true"
              :default-active = "activePath"
            >
              <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id" >
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item :index="child.url" v-for="child in item.children" :key="child.id" @click="saveActivePath(child.url)">
                  <i :class="child.icon"></i>{{child.name}}
                </el-menu-item>
              
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created(){
    this.getMenuList(),
    this.activePath = window.sessionStorage.getItem('activePath');
  },
  data() {
    return {
      menulist:[],
      isCollapse:false,
      activePath:''
    };
  },
  methods: {
    saveActivePath(activePath){
      window.sessionStorage.setItem('activePath',activePath);
      this.activePath=activePath;
    },
    changButton(){
      this.isCollapse = !this.isCollapse
    },
    async getMenuList(){
      const {data : res} = await this.$http.get('/menu/list');
      if(res.code !== 0) this.$message.error('获取菜单失败');
      this.menulist = res.data;
      //this.$message.success('获取菜单成功');
      //console.log(res);
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
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
.togglo-button{
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  color: #ffffff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border-right: none; 
}
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
}
.header-div {
  display: flex;
  align-items: center;
}
.header-span {
  margin-left: 15px;
}

.el-aside {
  background-color: #333744;

}
.el-main {
  background-color: #eaedf1;
}
</style>