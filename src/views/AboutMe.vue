<template>
  <el-card class="box-card" shadow="hover">
    <el-button
      class="contactme"
      type="primary"
      plain
      size="medium"
      @click="dialogVisible = true"
    >Contact Me</el-button>

    <el-dialog title="联系我" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
.contactme {
  margin: 80px;
}
</style>