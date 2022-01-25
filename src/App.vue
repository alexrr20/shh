<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
    <Login />
  </div>
</template>

<script type="text/javascript">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Login,
    Footer, // register component
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
