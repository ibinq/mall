<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基本信息</el-breadcrumb-item>
      <el-breadcrumb-item>账户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user-list">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width:50%">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" class="addBtn">添加用户</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style   scoped>
.addBtn {
  margin-left: 20px;
}
.user-list {
  background-color: #fff;
  box-shadow: 1px  1px 1px #b49f9f;
}
</style>