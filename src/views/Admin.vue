<template>
    <div class="mainContainer">
        <div class="container">
            <h1>
                Página de Administrador
            </h1>
            <div class="tableContainer">
                <table border="3">
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
                        <td><button @click="SET_REMOVE_USER(user.email)">REMOVER UTILIZADOR</button></td>
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

<style lang="scss" scoped>

</style>