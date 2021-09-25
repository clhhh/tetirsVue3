<template>
  <!-- <div class="box">{{type}}</div> -->
  <div class="box"></div>
</template>

<script setup lang="ts">
import {computed} from "vue"
// const color="rgb(14, 124, 214)"

const props=defineProps(["type"])//defineProps
const typeToColorMap:any={
    [0]:"white",
    [1]:"rgb(14, 124, 214)",
    [-1]:"rgb(14, 124, 214)"
}

const color=computed(()=>typeToColorMap[props.type])
</script>

<style>
.box{
    width: 20px;
    height: 20px;
    /*css联动 v-bind*/
    background: v-bind(color); 
    margin: 0.5px;
}
</style>