<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" default-active="/home" @select="handleSelect">
      <el-menu-item><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""></el-avatar></el-menu-item>
      <el-menu-item index="/home">文章</el-menu-item>
      <el-menu-item index="/new">新建</el-menu-item>
      <el-menu-item index="/category">分类</el-menu-item>
      <el-menu-item index="4">归档</el-menu-item>
      <el-menu-item index="/me">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
      handleSelect(index, indexPath) {
          this.$router.replace(index);
      }
  }
};
</script>