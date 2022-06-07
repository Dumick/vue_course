<template>
   <div class="container">
      <div v-show="!isSend" class="forms">
         <h1>Nice Party :)</h1>
         <form>
            <input type="text" v-model="email" placeholder="E-mail">
            <input type="text" v-model="phone" placeholder="+7-XXX-XXX-XX-XX">
            <input type="text" v-model="firstName" placeholder="Name">
            <input type="text" v-model="lastName" placeholder="Last Name">
         </form>
         <form class="guests">
            <button type="button" class="add" @click="addGuest()">Add Guest</button>
            <div class="guest" v-for="guest, key in guests">
               <input type="text" v-model="guest.name">
               <button type="button" class="remove" @click="removeGuest(key)">X</button>
            </div>
         </form>
         <button class="send" :disabled="!isFull" @click="isSend = !isSend">Send</button>
         <button class="clear" @click="clearForms()">Clear</button>
      </div>

      <div v-show="isSend" class="response">
         <table cellspacing="0">
            <tr>
               <td>Email:</td>
               <td>{{ email }}</td>
            </tr>
            <tr>
               <td>Phone:</td>
               <td>{{ phone }}</td>
            </tr>
            <tr>
               <td>First Name:</td>
               <td>{{ firstName }}</td>
            </tr>
            <tr>
               <td>Last Name:</td>
               <td>{{ lastName }}</td>
            </tr>
            <tr v-for="guest, key in guests">
               <td>Guest {{ key + 1 }}:</td>
               <td>{{ guest.name }}</td>
            </tr>
         </table>

         <button @click="isSend = !isSend">Back</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         email: '',
         phone: '',
         lastName: '',
         firstName: '',
         isSend: false,
         guests: []
      }
   },
   computed: {
      isFull() {
         let isValue = false
         if (this.email.length !== 0 && this.phone.length !== 0 && this.lastName.length !== 0 && this.firstName.length !== 0)
            isValue = true

         this?.guests.forEach(record => {
            if (record.name.length === 0) isValue = false
         });

         return isValue
      }
   },
   methods: {
      addGuest() { this.guests.push({ name: '' }) },
      removeGuest(key) { this.guests.splice(key, 1) },
      clearForms() {
         this.email = ''
         this.phone = ''
         this.firstName = ''
         this.lastName = ''
         this.guests = []
      }
   }
}
</script>

<style>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

body {
   width: 100%;
   height: 100vh;
   background-color: rgb(61, 61, 61);
}

.container {
   max-width: 1100px;
   margin: auto;
   padding: 20px;
}

h1 {
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   color: #fff;
   margin-bottom: 10px;
}

.forms form {
   display: flex;
   flex-direction: column;
}

form input {
   width: 300px;
   height: 35px;
   margin-top: 10px;
   outline: none;
   padding: 0 20px;
   border-radius: 4px;
   font-size: 14px;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   border: unset
}

form input:first-child {
   margin-top: 0;
}

button {
   width: 100px;
   padding: 10px 0;
   border: unset;
   border-radius: 4px;
   cursor: pointer;
   font-size: 14px;
   font-weight: bold;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   transition: .2s;
}

button:hover {
   transform: translateY(-3px);
}

button.add {
   margin: 15px 0 10px;
   color: #ffffff;
   background-color: rgb(69, 77, 190);
}

button.remove {
   width: 36px;
   height: 36px;
   margin-left: 10px;
   color: #fff;
   background-color: rgb(133, 59, 59);
}

button.send:disabled {
   color: #663737;
   background-color: #d1d1d194;
}

button.send {
   margin-top: 10px;
   color: #e4e4e4;
   background-color: #3d8a33;
}

button.clear {
   color: #fff;
   margin-left: 10px;
   background-color: #663737;
}

table {
   margin-bottom: 20px;
   padding: 4px;

}

table tr,
td {
   border: 1px solid #bbbbbb;
   padding: 5px;
   color: #bbbbbb;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
