<script setup>
import { ref } from 'vue'
import loginVue from './login.vue';

let logShow = ref(true)
console.log(logShow.value)

function warningBtn(allData){
       if (true == allData) {
        logShow.value = false
       } else {
        logShow.value = true
       }
}

</script>

<template>
    <div class="relative" v-if="logShow == true">
        <div class="absolute top-16 border-4 px-[13rem] bg-[#ffc007e3] border-green-600 p-10 text-center rounded-md ">
            <h1 class="text-3xl font-bold mb-5 ">Are you willing to accept all our conditions?</h1>
            <p>If you agree to accept all our conditions then click "OK" button to proceed to the next page. If you don't agree to accept all the conditions then click "cancel"</p>
            <div class="flex mt-10 ">
                <button @click="warningBtn(true)" class="border-2 mx-10 rounded-xl border-green-600 py-2 font-bold text-2xl"> Ok </button>
                <button @click="warningBtn(false)" class="border-2 mx-10 rounded-xl border-green-600 py-2 font-bold text-2xl"> Cancel</button>
            </div>
        </div>
    </div>
    <loginVue v-else="logShow == false"/>
</template>

<style scoped>

</style>