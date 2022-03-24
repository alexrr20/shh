<template>
<div class="botao">
    <button>?</button>
</div>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Help",
  data() {
      return {
      }
  },
  computed: {
      ...mapGetters(['getPosts']),
  },
};
</script>

<style scoped>
button {
  font-family: "Gilroy", sans-serif;
  font-weight: 950;
  background-color: white;
  border: 5px solid black ;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 45%;
  cursor: pointer;
  width:60px;
  transition: 0.5s ease;
}

.botao{
    border-radius: 50%;
    bottom:200px;
    position:fixed;
    z-index: 3;
    right:10px;
    bottom:10px;
}

.botao :hover {
    transform: scale(1.2, 1.2);
    background-color:rgb(143, 216, 143);
}

</style>