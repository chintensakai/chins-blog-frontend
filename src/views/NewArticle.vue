<template>
  <div id="mavon-editor">
    <mavon-editor v-model="content" />
    <el-checkbox-group v-model="checkList" class="tags">
      <el-checkbox border label="Java"></el-checkbox>
      <el-checkbox border label="Spring Boot"></el-checkbox>
      <el-checkbox border label="JavaScript"></el-checkbox>
      <el-checkbox border label="Linux"></el-checkbox>
      <el-checkbox border label="Vue"></el-checkbox>
    </el-checkbox-group>
    <div class="button-group">
      <el-button round>取消</el-button>
      <el-button type="primary" round @click="postArticle">发布</el-button>
    </div>
  </div>
</template>

<script>
import { postArticle } from "@/network/article.js";

export default {
  name: "NewArticle",
  data() {
    return {
      content: "dsfdsfdsfdsdsf",
      checkList: []
    };
  },
  methods: {
    postArticle() {
      postArticle(this.content);
    }
  }
};
</script>

<style scoped>
.button-group {
  margin-top: 20px;
}

.tags {
  margin-top: 20px;
}
</style>