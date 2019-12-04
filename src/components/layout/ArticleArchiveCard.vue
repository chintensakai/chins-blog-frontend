<template>
  <div>
    <el-timeline v-for="(article, index) in articleList" :key="index">
      <el-timeline-item>
        <el-card>
          <h4>{{article.title}}</h4>
          <p>{{article.date}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "ArticleArchiveCard",
  data() {
    return {
      timestamp: ""
    };
  },
  props: {
    articleList: {
      type: Array
    }
  }
};
</script>