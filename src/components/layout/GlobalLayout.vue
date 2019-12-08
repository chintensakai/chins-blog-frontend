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
        <el-aside width="360px">
          <about-me class="contact-me"></about-me>
          <top-views></top-views>
        </el-aside>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import TopViews from '@/views/TopViews.vue'
import AboutMe from '@/views/AboutMe.vue'
export default {
  name: "GlobalLayout",
  components: {
    TopViews,
    AboutMe
  }
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

.contact-me {
  margin-bottom: 20px;
}
</style>