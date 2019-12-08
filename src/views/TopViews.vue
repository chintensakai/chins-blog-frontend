<template>
  <el-card shadow="hover">
    <el-table :data="tableData" style="width: 100%" fit>
      <el-table-column prop="title" label="阅读排行榜" width="220"></el-table-column>
      <el-table-column prop="views" width="60"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { getTopViewsArticle } from "@/network/article.js";

export default {
  name: "TopViews",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    getTopViewsArticle().then(res => {
      this.tableData = res.data;
    });
  }
};
</script>