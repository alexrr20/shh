<template>
    <div class="messagesContainer2">
        <div v-for="(message,index) in selectedContact.content" v-bind:key="index">
            <div class="messageContainer" :style="[message.type == 'incoming' ? {'background-color': '#000'} : {'background-color': '#E4E4E4'}]">
                <div class="messageHeader">
                    <h2
                    v-if="message.type == 'outgoing'"
                    style="color: #000"
                    >Eu</h2>
                    <h2 v-else style="color: #FFF">{{selectedContact.userID}}</h2>
                    <h3>{{message.time}}</h3>
                </div>
                <div class="messageContent">
                    {{message.messageBody}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Message",
    computed: {
        selectedContact: function() {
            return this.$store.state.selectedContact
        }        
    },
    updated () {
        console.log(this.selectedContact);
    },
}
</script>

<style scoped>
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