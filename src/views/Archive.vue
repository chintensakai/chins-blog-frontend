<template>
  <div>
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          <div class="title" @click="queryYearlyCount(getCurrentYear)">{{getCurrentYear}}年</div>
        </template>
        <article-archive-card :articleList="articleList"></article-archive-card>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <div @click="queryYearlyCount(getCurrentYear - 1)">{{getCurrentYear - 1}}年</div>
        </template>
        <article-archive-card :articleList="articleList"></article-archive-card>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <div @click="queryYearlyCount(getCurrentYear - 2)">{{getCurrentYear - 2}}年</div>
        </template>
        <article-archive-card :articleList="articleList"></article-archive-card>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <div @click="queryYearlyCount(getCurrentYear - 3)">{{getCurrentYear -3}}年</div>
        </template>
        <article-archive-card :articleList="articleList"></article-archive-card>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ArticleArchiveCard from "@/components/layout/ArticleArchiveCard.vue";
import { getArchiveArticle } from "@/network/article.js";

export default {
  name: "Archive",
  components: {
    ArticleArchiveCard
  },
  data() {
    return {
      articleList: []
    };
  },
  methods: {
    queryYearlyCount(year) {
      this.articleList = [];
      getArchiveArticle(year).then(res => {
        this.articleList = res.data;
      });
    }
  },
  created() {
    getArchiveArticle(new Date().getFullYear()).then(res => {
      this.articleList = res.data;
    });
  },
  computed: {
    articleCount() {
      return this.articleList.length;
    },
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.title {
  widows: 100%;
}
</style>