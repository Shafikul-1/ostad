<script setup>
  import { reactive, computed } from 'vue'
const allStyle = reactive({
      perspective: 100,
      rotateX:0,
      rotateY:0,
      rotateZ:0
})

const checking = computed(()=>{
  return {
    transform: `
    perspective(${allStyle.perspective}px)
    rotateX(${allStyle.rotateX}deg)
    rotateY(${allStyle.rotateY}deg)
    rotateZ(${allStyle.rotateZ}deg)
    `
  }
})
</script>
<template>
  <div class="flex">
    <div class="w-1/2">
      <div class="element">
        <label for="" >perspective : {{ allStyle.perspective }}px</label>
        <input type="range" name="" id=""  v-model="allStyle.perspective">
      </div>

       <div class="element">
        <label for="" >rotateX : {{ allStyle.rotateX }}deg</label>
        <input type="range" name="" id="" v-model="allStyle.rotateX">
      </div>

       <div class="element">
        <label for="" >rotateY : {{ allStyle.rotateY }}deg</label>
        <input type="range" name="" id="" v-model="allStyle.rotateY">
      </div>

       <div class="element">
        <label for="" >rotateZ : {{ allStyle.rotateZ }}deg</label>
        <input type="range" name="" id="" v-model="allStyle.rotateZ">
      </div>
    </div>
    <div class="w-1/2 border-4 border-red-700 p-32">
      <div class=" w-24 h-24 bg-slate-300" :style="checking"> </div>
    </div>
  </div>
</template>
<style scoped>

</style>