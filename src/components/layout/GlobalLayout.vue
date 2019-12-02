<template>
  <el-container class="el-main">
    <el-header>
      <slot name="el-header"></slot>
    </el-header>
    <el-container>
      <el-main>
        <!-- <slot name="el-main"></slot> -->
        <router-view></router-view>
      </el-main>
      <div class="aside">
        <el-aside width="320px">
          <slot name="el-aside"></slot>
        </el-aside>
      </div>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "GlobalLayout"
};
</script>

<style scoped>
.el-header {
  text-align: center;
}

.el-aside {
  text-align: center;
}

.aside {
  border-left: 1px solid #e6e6e6;
}

.el-main {
  text-align: center;
  height: 100%;
}
</style>