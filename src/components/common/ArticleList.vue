<template>
  <div>
    <el-card class="box-card">
      <div v-for="(article, index) in articleList" :key="index" class="text item">
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
        <div class="border-bottom"></div>
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
    }
  },
  methods: {
    goArticleDetails(id) {
      this.$router.replace('/article/' + id);
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
  padding: 18px 0;
}

.box-card {
  width: 760px;
}

.views-info {
  padding: 0 20px 0px 5px;

}

.title:hover {
  color: #409EFF
}
</style>