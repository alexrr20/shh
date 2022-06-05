<template>
    <div class="mainContainer">
        <div  v-for="(message,index) in selectedContact" v-bind:key="index">
            <div class="messageContainer">
                <div class="messageHeader">
                    <h2>{{selectedContact.userID}}</h2>
                    <h3>14 de Dezembro de 2021 às 18:30h</h3>
                </div>
                <div class="messageContent">
                    h1
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Message",
    data() {
        return {
            selectedContact: this.$store.state.selectedContact,
        }
    },
    created () {
        console.log(this.$store.state.selectedContact);
    },
    watch:{
        print(){
        console.log(this.$store.state.selectedContact);

        }
    }
}
</script>

<style>
    .messageContainer{
        background-color: #E4E4E4;
        padding:30px 40px 30px 40px;
        margin-top: 30px;
    }

    h2{
        font-weight: 800;
        font-size:18px;
        margin:0;
    }

    h3{
        font-weight: 700;
        font-size:14px;
        color:#848484;
        margin:0;
    }
</style>