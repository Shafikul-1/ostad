<script setup>
import { ref, reactive } from 'vue' 
import login from './components/login.vue'
const allInp = reactive({
  name: '',
  country: '',
  email: '',
  pass: '',
  number:''
})
const defultValue = reactive({
  Name: 'shafikul',
  Email: 'shafikul@gmail.com',
  Password: '1234',
  Number: '0123456789',
})

const signUp_page = ref(false)
let view = ref(true)
function submitFn(){ 
  if ((allInp.name == 'shafikul')&& (allInp.email == 'shafikul@gmail.com')&& (allInp.pass == '1234') && (allInp.number == '0123456789')) {
    view.value = !view.value
  } else {
    alert('Please Correct Input Value')
    signUp_page.value = true
  }
}


</script>

<template>
  <!-- Login page -->
    <login class="" v-if="!view"/>
<!-- sign Up page -->
  <div class="Signup py-6 " v-else="view">
    <h1 class="text-4xl font-bold text-center uppercase my-5 text-white underline">Sign Up Page</h1>
    <div class="Login">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3">
          <p class="bg-gray-400 py-2">Defult Value: {{ defultValue }}</p>
          <p class="text-white ">{{ allInp }}</p>

          <div class="alert rounded-lg text-center py-5 px-8rem" :class="signUp_page == true ? ' bg-[#ff0000bf]':' bg-green-600'">
            <img class="imageAlert" :src="signUp_page == true ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/2219px-Warning.svg.png' : 'https://raw.githubusercontent.com/Shafikul-1/weatherapplication/main/depositphotos_208603374-stock-il-removebg-preview.png'" alt="">
            <h1 class="font-bold text-3xl capitalize"> {{ signUp_page == true ? 'You have entered wrong input please enter correct input' : 'Welcome to our welcome page' }}</h1>
          </div>

        </div>
        <div class="bg-[#1515156e] border-2 border-indigo-500 rounded-md shadow-md shadow-indigo-300 row-span-3 text-center">
          <h1 class="font-bold text-2xl text-[#ba53d5] underline py-4">Registration </h1>
          <form action="" @submit.prevent class="text-start">
            <div class="inputGor">
              <label for="" class="text-white">Name: {{ allInp.name }}</label>
              <input class="focus:border-red-700 focus:border-2 border-2 rounded-md hover:border-red-300 focus:outline-none py-2 pl-3" placeholder="Enter Your Name" v-model=" allInp.name " type="text" name="" id="">
            </div>
            <div class="inputGor">
              <label for="" class="text-white">Email address: {{ allInp.email }}</label>
              <input class="focus:border-red-700 focus:border-2 border-2 rounded-md hover:border-red-300 focus:outline-none py-2 pl-3" v-model=" allInp.email " placeholder="Enter Your Email" type="email" name="" id="">
            </div>
            <div class="inputGor">
              <label for="" class="text-white">Country: {{ allInp.country }}</label>
              <input class="focus:border-red-700 focus:border-2 border-2 rounded-md hover:border-red-300 focus:outline-none py-2 pl-3" v-model="allInp.country" placeholder="Enter Your Country Name" type="text" name="" id="">
            </div>
            <div class="inputGor">
              <label for="" class="text-white">Phone: {{ allInp.number }}</label>
              <input class="focus:border-red-700 focus:border-2 border-2 rounded-md hover:border-red-300 focus:outline-none py-2 pl-3" v-model="allInp.number" placeholder="Enter Your Number" type="number" name="" id="">
            </div>
            <div class="inputGor">
              <label for="" class="text-white">Password: {{ allInp.pass }}</label>
              <input class="focus:border-red-700 focus:border-2 border-2 rounded-md hover:border-red-300 focus:outline-none py-2 pl-3" v-model="allInp.pass" placeholder="Enter Your Passowrd" type="password" name="" id="">
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4 ">
              <div class="row-span-2"></div>
              <div class="row-span-2">
                <input @click="submitFn()" type="submit"  value="Submit" class="text-white font-bold text-2xl py-2 border-2 border-green-400 cursor-pointer rounded-xl my-5">
              </div>
              <div class="row-span-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imageAlert{
  padding: 0 16rem;
}
.Signup{
  background-position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background: url('https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-845.jpg?w=740&t=st=1691337362~exp=1691337962~hmac=f61298933d99d9c5fa4e00fb2183cca0ede253ceb1b7300c3ee3680545bf264b');
}
*{
  width: 100%;
  padding-left: calc(0.5rem);
  padding-right: calc(0.5rem);
  padding-top: auto;
  padding-bottom: auto;
}
img{
  max-width: 100%;
}
</style>
