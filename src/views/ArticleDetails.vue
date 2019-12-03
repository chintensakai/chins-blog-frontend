<template>
  <div>
    <mavon-editor
      v-model="articleDetail.article.content"
      :subfield="false"
      :toolbarsFlag="false"
      :editable="false"
      scrollStyle="true"
      :ishljs="true"
      :defaultOpen="'preview'"
    />
  </div>
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
  computed: {
    compiledMarkdown() {
      return this.articleDetail.article.content;
    }
  },
  created() {
    getArticleDetail(this.$route.params.id).then(res => {
      // 解构赋值
      this.articleDetail = res.data;
    });
  }
};
</script>

<style>
</style>