<template>
  <div class="messageContainer">
      <div class="messageHeader">
          <h2>Maria</h2>
          <h3>14 de Dezembro de 2021 às 18:30h</h3>
      </div>
      <div class="messageContent">
          Olá, como estás? Antes de mais queria agradecer por me contactares, eu queria saber se tens alguma ideia para o poster? 
      </div>
  </div>
</template>

<script>
export default {
    name:"Message"
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