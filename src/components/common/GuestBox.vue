<template>
  <div>
    <el-row class="sss">
      <el-button type="text" @click="dialogFormVisible = true">登录</el-button>
      <el-button type="text">注册</el-button>
      <el-dialog title="登录" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="goLogin">登 录</el-button>
        </div>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { login } from "@/network/user.js";

export default {
  name: "GuestBox",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    goLogin() {
      login({
        username: this.form.name,
        password: this.form.pwd
      }).then(res => {
        this.dialogFormVisible = false;
        this.changeLoginState(true);
      });
    },
    ...mapMutations(["changeLoginState"])
  }
};
</script>

<style scoped>
.sss {
  line-height: 66px;
}
</style>