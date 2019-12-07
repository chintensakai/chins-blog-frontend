<template>
  <div>
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          <div
            class="title"
            @click="queryYearlyCount(getCurrentYear)"
          >{{getCurrentYear}}年 -- 共 {{archiveCountList[0].count}} 篇</div>
        </template>
        <article-archive-card :articleList="articleLis_current"></article-archive-card>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <div
            @click="queryYearlyCount(getCurrentYear - 1)"
          >{{getCurrentYear - 1}}年 -- 共 {{archiveCountList[1].count}} 篇</div>
        </template>
        <article-archive-card :articleList="articleLis_last"></article-archive-card>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <div
            @click="queryYearlyCount(getCurrentYear - 2)"
          >{{getCurrentYear - 2}}年 -- 共 {{archiveCountList[2].count}} 篇</div>
        </template>
        <article-archive-card :articleList="articleLis_before_last"></article-archive-card>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <div
            @click="queryYearlyCount(getCurrentYear - 3)"
          >{{getCurrentYear -3}}年 -- 共 {{archiveCountList[3].count}} 篇</div>
        </template>
        <article-archive-card :articleList="articleLis_three_year_ago"></article-archive-card>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ArticleArchiveCard from "@/components/layout/ArticleArchiveCard.vue";
import { getArchiveArticle } from "@/network/article.js";
import { getYearlyArchiveCount } from "@/network/article.js";

export default {
  name: "Archive",
  components: {
    ArticleArchiveCard
  },
  data() {
    return {
      articleLis_current: [],
      articleLis_last: [],
      articleLis_before_last: [],
      articleLis_three_year_ago: [],
      archiveCountList: []
    };
  },
  methods: {
    queryYearlyCount(year) {
      getArchiveArticle(year).then(res => {
        switch (year) {
          case getCurrentYear() - 1:
            this.articleLis_last = res.data;
            break;
          case getCurrentYear() - 2:
            this.articleLis_before_last = res.data;
            break;
          case getCurrentYear() - 3:
            this.articleLis_three_year_ago = res.data;
            break;
          default:
            this.articleLis_current = res.data;
            break;
        }
      });
    }
  },
  created() {
    getYearlyArchiveCount().then(res => {
      this.archiveCountList = res.data;
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

function getCurrentYear() {
  return new Date().getFullYear();
}
</script>

<style scoped>
.title {
  widows: 100%;
}
</style>