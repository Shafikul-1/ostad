<script setup>
import {ref, reactive} from 'vue'
import HelloWorld from './HelloWorld.vue'; 
const loginData = reactive({
    emali: '',
    pass: ''
})
let welcome = ref(true)
function loginFn(){
    welcome.value = !welcome.value
}
</script>
<template> 
    <HelloWorld v-if="!welcome"/>
    <div class="loginBg" v-else="welcome">
        <h1 class="text-center font-bold text-4xl">Login Page</h1>
        <div class="flex">
            <form @submit.prevent action="" class="bg-[#0000006e] w-1/3 p-10 rounded-md">
            <div class="">
                <label class="text-white my-2" for="">Your Email: {{ loginData.emali }}</label> <br>
                <input type="email" v-model="loginData.emali" placeholder="Enter Your Email Address" class=" py-2 rounded-md focus:outline-none border-2 border-green-300">
            </div>
            <div class="">
                <label class="text-white my-2" for="">Your Password: {{ loginData.pass }}</label> <br>
                <input type="password" v-model="loginData.pass" placeholder="Enter Your Password" class=" py-2 rounded-md focus:outline-none border-2 border-green-300">
            </div>
                <input type="submit" value="Submit" @click="loginFn()" class="text-white py-2 px-11 cursor-pointer text-2xl font-bold  border-green-500 border-2 rounded-md my-4">
            </form>
            <p class="text-end bg-indigo-100  ml-5 py-6 ">{{ loginData }}</p>
        </div>
    </div>
</template>
<style scoped>
.loginBg{
    background: url('https://e1.pxfuel.com/desktop-wallpaper/731/42/desktop-wallpaper-tecnology-input-devices.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100vh
}
</style>