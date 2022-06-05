<template>
    <div class="mainContainer">
        <div class="contentContainer">
            <aside>
                <h4>Contactos</h4>
                <div class="contactsContainer" v-for="(contact,index) in messages" v-bind:key="index">
                    <div class="contactContainer" @click="selectContact(contact)">
                        <div class="contactTop">
                            <div class="nomeContainer"><span>{{contact.userID}}</span></div>
                            <div class="categoriaContainer"><span>Categoria1</span></div>
                            </div>
                        <div class="contactBottom"><span>Online há 3 dias</span></div>
                    </div>
                    <span class="divider"></span>
                </div>
            </aside>
            <div class="mainContentContainer">
                <div class="chatMainContainer">
                    <div class="chatHeader">
                        <div class="chatHeaderLeft">              
                            <h2>Maria</h2>
                            <h4>Desenho</h4>
                        </div>
                        <div class="chatHeaderRight">
                            <span>avaliar</span>
                        </div>
    
                    </div>
                    <div class="messagesContainer">
                        <Message/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from '../components/Message.vue';

    export default {
        name:'Messages',
        components:{ Message },
        data() {
            return {
                messages: this.$store.state.messages
            }
        },
        methods: {
            selectContact(contact) {
                this.$store.state.selectedContact = contact
                console.log(this.$store.state.selectedContact);
            }
        },
    }
</script>

<style scoped>
.mainContainer {
	margin-top: 100px;
	font-family: 'Gilroy', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
    background-color: white;
    min-height: 80vh;
}

.contentContainer{
    display:flex;
    width: 90%;
    max-width: 1300px;
    justify-content: space-between;
}

.headerContainer {
	font-weight: 900;
	font-size: 35px;
    margin-right: 900px;
}

aside{
    width:180px;
}

.divider {
	display: inline-block;
	background-color: #e4e4e4;
	width: 100%;
	height: 1px;
}

.contactContainer:first-child{
    margin-top:30px;
}

.contactContainer{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-top: 7px;
}

.contactTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.categoriaContainer span{
    font-size:15px;
    font-weight: 800;
}

.contactBottom{
    display:flex;
    align-items:flex-start
}

.contactBottom span{
    font-size:9px;
    color: #BDBDBD;
    font-weight: 600;
}

.nomeContainer span{
    font-size: 25px;
    font-weight: 800;
}

.mainContentContainer{
    width:76%;
}

.chatHeader{
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
}

.chatHeaderLeft{
    display:flex;
    align-items: flex-end;
}

.chatHeaderRight{
}

h2{
    font-size:60px;
    margin:0;
    height:60px;
    font-weight: 800;
}

h4{
    margin:0;
}


</style>