<template>
  <div>
    <!-- <dialog :open="isDialogOpen"> -->
        <form @submit.prevent="login">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
          <label for="password">Palavra-passe:</label>
          <input type="password" id="password" v-model="password">
          <input type="checkbox" id="session" name="session">
          <label for="session">Manter sessão iniciada</label>
          <input type="submit" value="Entrar">
        </form>
    <!-- </dialog> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name:'Login',
    data() {
      return {
        email:"",
        password:"",
        isDialogOpen:false,
      };
    },
    computed: {
      ...mapGetters(["isUser"])
    },
    methods: {
      showDialog(){
        this.isDialogOpen = true;
      },
      login() {
        if(this.isUser(this.email, this.password)){
          this.SET_LOGGED_USER(this.email)
        }else{
          alert("NENHUM UTILIZADOR ENCONTRADO")
        }
        this.isDialogOpen = false;
      },
      ...mapMutations(["SET_LOGGED_USER"]),
    },
};
</script>
