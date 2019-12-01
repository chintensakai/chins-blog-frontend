<template>
  <div>
    <el-card class="box-card">
      <div v-for="(article, index) in articleList" :key="index" class="text item">
        <h2>{{article.title}}</h2>
        <div>{{article.date}}</div>
        <p>{{article.text}}</p>
        <div>阅读 {{article.views}} 评论 {{article.comments}} 赞 {{article.thumbsUp}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    articleList: {
      type: Array
    },
    helllll: {
      type: String
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
  text-align: left;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 760px;
}
</style>