<template>
  <mavon-editor
    v-model="articleDetail.article.content"
    :subfield="false"
    :toolbarsFlag="false"
    :editable="false"
    scrollStyle="true"
    :ishljs="true"
    :defaultOpen="'preview'"
  />
  <!-- <div v-html="compiledMarkdown">{{articleDetail.article.content}}</div> -->
</template>

<script>
import { getArticleDetail } from "@/network/article.js";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

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
      return marked(this.articleDetail.article.content, {
        highlight: function(code) {
          //新加的，用来配置语法高亮
          return hljs.highlightAuto(code).value;
        }
      });
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