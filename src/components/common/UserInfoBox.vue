<template>
  <el-row>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="warning" icon="el-icon-message" circle></el-button>
    <el-button size="small" @click="logout">退出</el-button>
  </el-row>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "UserInfoBox",
  methods: {
    logout() {
      this.changeLoginState(false);
    },
    ...mapMutations(["changeLoginState"])
  }
};
</script>

<style scoped>
.demo-type {
  vertical-align: middle;
}
</style>