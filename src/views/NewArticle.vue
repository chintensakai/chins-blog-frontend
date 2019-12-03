<template>
  <div id="mavon-editor">
    <el-input v-model="title" placeholder="请输入文章标题" class="title"></el-input>
    <mavon-editor v-model="content" />
    <el-checkbox-group v-model="checkList" class="tags" size="small ">
      <el-checkbox border label="Java"></el-checkbox>
      <el-checkbox border label="Spring Boot"></el-checkbox>
      <el-checkbox border label="JavaScript"></el-checkbox>
      <el-checkbox border label="Vue"></el-checkbox>
      <el-checkbox border label="Linux"></el-checkbox>
    </el-checkbox-group>
    <div class="button-group">
      <el-button round>取消</el-button>
      <el-button type="primary" round @click="newArticle">发布</el-button>
    </div>
  </div>
</template>

<script>
import { postArticle } from "@/network/article.js";

export default {
  name: "NewArticle",
  data() {
    return {
      title: '',
      content: '',
      checkList: []
    };
  },
  methods: {
    newArticle() {
      postArticle({
        data: {
          article: {
            title: this.title,
            content: this.content
          },
          categorys: this.checkList
        }
      }).then(res => {
        this.$router.replace('/home');
        console.log(res);
      });
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

.title {
  margin-bottom: 10px;
}
</style>