<template>
  <div class="header-bar">
    <el-row :gutter="20">
      <el-col :span="16">
        <nav-bar></nav-bar>
      </el-col>
      <el-col :span="8">
        <div v-if="isLogin">
          <user-info-box></user-info-box>
        </div>
        <div v-else>
          <guest-box></guest-box>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import GuestBox from "@/components/common/GuestBox.vue";
import UserInfoBox from "@/components/common/UserInfoBox.vue";

import { mapState } from "vuex";

export default {
  name: "Header",
  components: {
    NavBar,
    GuestBox,
    UserInfoBox
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>

<style scoped>
</style>