<template>
  <div class="bannerContainer">
    <span>{{ category[categoryID.id].name }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: this.$store.state.arrayCategories,
      categoryID: this.$route.params,
    };
  },
};
</script>

<style scoped>
.bannerContainer {
  width: 100%;
  height: 210px;
  margin-top: 138px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  background: url(../../public/assets/photoBG.webp);
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px -250px 300px -90px inset,
    inset 0 0 0 2000px rgba(255, 186, 122, 0.92);
}

/* mudar barra de categorias e foto */

.bannerContainer span {
  color: white;
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 100px;
  padding-left: 50px;
}
</style>
