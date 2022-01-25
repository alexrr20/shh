<template>
  <div>
    <div id="mainContainer">
      <h1>Signup</h1>
      <br />
      <h1>Signup</h1>
      <br />
      <div id="formContainer">
        <form @submit.prevent="addUser()">
          <label for="firstname">Primeiro Nome</label>
          <br />
          <input type="text" id="firstName" v-model="form.name" />
          <br />
          <label for="lastname">Apelido</label>
          <br />
          <input type="text" id="lastName" v-model="form.surname" />
          <br />
          <label for="number">Número de aluno</label>
          <br />
          <input type="text" id="number" v-model="form.number" />
          <br />
          <label for="nif">NIF</label>
          <br />
          <input type="text" id="nif" v-model="form.nif" />
          <br />
          <label for="birthDate">Data de Nascimento</label>
          <br />
          <input type="date" id="birthDate" v-model="form.dob" />
          <br />
          <hr />
          <label for="email">E-mail</label>
          <br />
          <input type="email" id="email" v-model="form.email" />
          <br />
          <label for="password">Palavra-passe</label>
          <br />
          <input type="password" id="password" v-model="form.password" />
          <br />
          <label for="confirmPassword">Confirmar Palavra-passe</label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
          />
          <br />
          <h4>A tua palavra-passe deve conter entre 8 e 16 caracteres.</h4>
          <input type="submit" value="Criar Conta" />
          <p>
            Ao criares conta estás a concordar com os termos de
            <b>utilização</b> e de <b>privacidade</b>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Signup",
  components: {},
  data() {
    return {
      form: {
        	name: "",
        	surname: "",
        	number: "",
        	dob: "",
        	email: "",
        	nif: "",
        	password: "",
        	confirmPassword: "",
      	},
      users: [],
    };
  },
  created() {
    this.users = localStorage.users
      ? JSON.parse(localStorage.users)
      : [
          {
            userID: 444,
            userName: "Pedro",
            surname: "Gomes",
            email: "admin",
            password: "admin",
            type: "admin",
            dob: "",
            nif: "",
            helper: true,
          },
        ];
  },
    watch: {
    users() {
      localStorage.setItem("users", JSON.stringify(this.users));
    },
  },
  computed: {
    ...mapGetters(["isUserAvailable"]),
  },
  methods: {
    addUser() {
      if (
        this.isUserAvailable(this.form.email) &&
        this.form.password == this.form.confirmPassword){
        const newUser = {
          userID: 444,
          userName: this.form.name,
          surname: this.form.surname,
          email: this.form.email,
          password: this.form.password,
          type: "user",
          dob: this.form.dob,
          nif: this.form.nif,
          helper: true,
        };
        this.users.push(newUser);
      } else {
        alert("NOP");
      }
    },
  },
};
</script>

<style scoped>
nav,
footer {
  display: none !important;
}
.mainContainer {
  font-family: "Gilroy", sans-serif;
  width: 180px;
}
</style>
