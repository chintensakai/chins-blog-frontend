<template>
  <div>
    <article-list :articleList="articleList"></article-list>
  </div>
</template>

<script>
import axios from "axios";
import ArticleList from "@/components/common/ArticleList.vue";


export default {
  name: "MainPage",
  components: {
    ArticleList
  },
  data() {
    return {
      articleList: [
          {
              title: 'sdfdsfsdfsdfds',
              text: 'sdfdsfdsfdsfd'
          },
      ],
      helllll: 'dfdsfdsfdsdsdsfd'
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:8082/haha"
    }).then(res => {
      console.log(res);
      this.articlelist = res;
    });
  }
};
</script>