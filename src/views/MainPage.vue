<template>
  <div>
    <article-list :articleList="articleList"></article-list>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="totalSize"
        :page-size="size"
        background
        @current-change="goRightPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import ArticleList from "@/components/common/ArticleList.vue";
// import { getAllArticles } from "@/network/mainpage.js";
import { getArticlesPage } from "@/network/mainpage.js";

export default {
  name: "MainPage",
  components: {
    ArticleList
  },
  data() {
    return {
      articleList: [],
      totalSize: 50,
      current: 1,
      size: 5
    };
  },
  // computed: {
  //   totalSize() {
  //     return this.articleList.size;
  //   }
  // },
  created() {
    // getAllArticles().then(res => {
    //   this.articleList = res.data.list;
    // });

    getArticlesPage({
      current: this.current,
      size: this.size
    }).then(res => {
      this.articleList = res.data.records;
      this.totalSize = res.data.total;
    });
  },
  methods: {
    goRightPage(currentPage) {
      getArticlesPage({
        current: currentPage,
        size: this.size
      }).then(res => {
        this.articleList = res.data.records;
      });
    }
  }
};
</script>