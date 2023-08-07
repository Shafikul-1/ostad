<script setup>
import {ref, reactive} from 'vue'
import HelloWorld from './HelloWorld.vue'; 
const loginData = reactive({
    emali: '',
    pass: ''
})
let welcome = ref(true)
function loginFn(){
    if ((loginData.emali == 'shafikul@gmail.com')&&(loginData.pass == '1234')) {
        welcome.value = !welcome.value
    } else {
        alert('Your Input Value Worng')
    }
}
</script>
<template> 
    <HelloWorld v-if="!welcome"/>
    <div class="loginBg" v-else="welcome">
        <h1 class="text-center font-bold text-4xl py-10">Login Page</h1>
        <p class=" bg-gray-100 my-6 py-3 ">{{ loginData }}</p>
        <div class="">
            <form @submit.prevent action="" class="bg-[#000000b0] w-1/3 p-10 rounded-md">
            <div class="">
                <label class="text-white my-2" for="">Your Email: {{ loginData.emali }}</label> <br>
                <input type="email" v-model="loginData.emali" placeholder="Enter Your Email Address" class="pl-4 py-2 rounded-md focus:outline-none border-2 border-green-300">
            </div>
            <div class="">
                <label class="text-white my-2" for="">Your Password: {{ loginData.pass }}</label> <br>
                <input type="password" v-model="loginData.pass" placeholder="Enter Your Password" class="pl-4 py-2 rounded-md focus:outline-none border-2 border-green-300">
            </div>
                <input type="submit" value="Submit" @click="loginFn()" class="text-white py-2 px-11 cursor-pointer text-2xl font-bold  border-green-500 border-2 rounded-md my-4">
            </form>
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
