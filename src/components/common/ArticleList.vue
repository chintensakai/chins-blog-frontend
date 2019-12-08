<template>
  <!-- <el-card class="box-card" shadow="hover"> -->
  <div>
    <div v-for="(article, index) in articleList" :key="index" class="text item">
      <el-card class="box-card" shadow="hover">
        <h2 class="title" @click="goArticleDetails(article.id)">{{article.title}}</h2>
        <div>{{article.date}}</div>
        <p>{{article.content}}</p>
        <div>
          <i class="el-icon-s-custom"></i>
          <span class="views-info">{{article.views}}</span>
          <i class="el-icon-s-comment"></i>
          <span class="views-info">{{article.comments}}</span>
          <i class="el-icon-star-on"></i>
          <span class="views-info">{{article.thumbs}}</span>
        </div>
      </el-card>
    </div>
  </div>
  <!-- </el-card> -->
</template>

<script>
import { increArticleViews } from "@/network/article.js";

export default {
  name: "ArticleList",
  props: {
    articleList: {
      type: Array
    }
  },
  methods: {
    goArticleDetails(id) {
      increArticleViews({
        data: {
          id: id
        }
      }).then(res => {});
      this.$router.replace("/article/" + id);
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
  text-align: left;
}

.border-bottom {
  margin-top: 20px;
  border-bottom: 1px solid #dddddd;
}

.item {
  padding: 8px 0;
}

.box-card {
  width: 760px;
  color: #606266;
}

.views-info {
  padding: 0 20px 0px 5px;
}

.title {
  color: #409eff;
}

</style>