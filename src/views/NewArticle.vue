<template>
  <div id="mavon-editor">
    <mavon-editor v-model="content" />
  </div>
</template>

<script>
export default {
  name: "NewArticle",
  data() {
    return {
      content: "dsfdsfdsfdsdsf"
    };
  }
};
</script>

<style scoped>
.mavon-editor {
  width: 100%;
  height: 100%;
}
</style>