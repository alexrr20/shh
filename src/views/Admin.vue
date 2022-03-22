<template>
    <div class="mainContainer">
        <div class="container">
            <div class="headerContainer">
                <h1>Página de Administrador</h1>
            </div>
            <div class="tableContainer">
                <table class="darkTable">
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>NR ALUNO</th>
                        <th>NIF</th>
                        <th>DATA NASCIMENTO</th>
                        <th>PASSWORD</th>
                        <th>AÇÕES POSSIVEÍS</th>
                    </tr>
                    <tr v-for="(user, index) in getUsers" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.userName }} {{ user.surname }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.number }}</td>
                        <td>{{ user.nif }}</td>
                        <td>{{ user.dob }}</td>
                        <td>{{ user.password }}</td>
                        <td><router-link class="submitContainer" v-on:click.native="SET_REMOVE_USER(user.email)" to="#" >REMOVER UTILIZADOR</router-link></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
    export default {
        name:'Admin',
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['getUsers']),
        },
        methods: {
            ...mapMutations(['SET_REMOVE_USER']),
        },
    }
</script>

<style lang="css" scoped>

.mainContainer {
	margin-top: 100px;
	font-family: 'Gilroy', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
    background-color: white;
}

.headerContainer {
	font-weight: 900;
	font-size: 20px;
    margin-right: 900px;
}

table.darkTable {
  font-family: "Arial Black", Gadget, sans-serif;
  border: 2px solid #000000;
  background-color: white;
  width: 100%;
  height: 200px;
  text-align: center;
  border-collapse: collapse;
}
table.darkTable td, table.darkTable th {
  border: 1px solid white;
  padding: 3px 2px;
}
table.darkTable tbody td {
  font-size: 13px;
  color: #E6E6E6;
}
table.darkTable tr:nth-child(even) {
  background: white;
}
table.darkTable thead {
  background: #000000;
  border-bottom: 3px solid #000000;
}
table.darkTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #E6E6E6;
  text-align: center;
  border-left: 2px solid white;
}
table.darkTable thead th:first-child {
  border-left: none;
}

table.darkTable tfoot {
  font-size: 12px;
  font-weight: bold;
  color: #E6E6E6;
  background: #000000;
  background: -moz-linear-gradient(top, white 0%, #191919 66%, #000000 100%);
  background: -webkit-linear-gradient(top, white 0%, #191919 66%, #000000 100%);
  background: linear-gradient(to bottom, white 0%, #191919 66%, #000000 100%);
  border-top: 1px solid white;
}
table.darkTable tfoot td {
  font-size: 12px;
}

</style>