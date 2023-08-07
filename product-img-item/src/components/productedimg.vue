<script setup>
import { ref } from 'vue'
import imgdata from '../data/imgdata'
// const [fastImg, secondImg, thredImg] = imgdata;
// console.log(thredImg)
// const [fastImg, secondImg, thredImg, fourImg] = b.images;

</script>

<template>
  <div class="">
    <div class="flex gap-4" >
      <div class="fast w-1/4 border border-2 border-red-400 rounded-md p-2"  v-for="(productedImg, index) in imgdata" :key="index">
          <div class="p-2 border-indigo-800 border rounded">
              <div>
                  <img :src="productedImg.mainImg.src" :alt="productedImg.mainImg.alt" :title="productedImg.mainImg.title">
                  <div class=""  v-for="(otherImages, index) in productedImg.otherImages" :key="index">
                    <div class="flex">
                      <img class="mx-2 w-1/4 my-2 border-1 border-indigo-500" :src="otherImages.src" alt="">
                      <img class="mx-2 w-1/4 my-2 border-1 border-indigo-500" :src="otherImages.src" alt="">
                      <img class="mx-2 w-1/4 my-2 border-1 border-indigo-500" :src="otherImages.src" alt="">
                      <!-- <div class="">{{ console.log(otherImages.title) }}</div> -->
                    </div>
                  </div>
              </div>
          </div>
          <div class="content">
              <h3 class="font-bold text-xl">{{ productedImg.content.heading }}</h3>
              <p>{{ productedImg.content.paragrape }}</p>
              <a class="text-indigo-600 underline" :href="productedImg.content.link" target="_blank" rel="noopener noreferrer" >click here</a>
          </div>
      </div>
    </div>
  </div>
</template>

<!-- v-for="(allImg, index) in productedImg.images" :key="index" -->

<style scoped>

</style>
