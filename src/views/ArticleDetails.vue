<template>
  <div>{{articleDetail}}</div>
</template>

<script>
import { getArticleDetail } from "@/network/article.js";

export default {
  name: "ArticleDetails",
  data() {
    return {
      articleDetail: {
        categoryList: [],
        article: {
          id: 0,
          title: "",
          content: "",
          date: "",
          views: 0,
          comments: 0,
          thumbs: 0
        }
      }
    };
  },
  created() {
    getArticleDetail(this.$route.params.id).then(res => {
      // 解构赋值
      this.articleDetail = res.data;
    });
  }
};
</script>