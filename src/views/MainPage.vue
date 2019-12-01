<template>
  <div>
    <article-list :articleList="articleList"></article-list>
  </div>
</template>

<script>
import ArticleList from "@/components/common/ArticleList.vue";
import {getAllArticles} from '@/network/mainpage.js'

export default {
  name: "MainPage",
  components: {
    ArticleList
  },
  data() {
    return {
      articleList: []
    }
  },
  created() {
    getAllArticles().then(res => {
      this.articleList = res.data.list;
    })
  }
};
</script>