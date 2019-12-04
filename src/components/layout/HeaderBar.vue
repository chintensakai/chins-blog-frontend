<template>
  <div class="header-bar">
    <el-row :gutter="20">
      <el-col :span="16">
        <nav-bar></nav-bar>
      </el-col>
      <el-col :span="8">
        <guest-box></guest-box>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import GuestBox from "@/components/common/GuestBox.vue";

export default {
  name: "Header",
  components: {
    NavBar,
    GuestBox
  }
};
</script>

<style scoped>
</style>