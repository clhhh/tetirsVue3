<template>
<div >
clh的小方块
<div>
分数{{score}}
</div>
<div class="border">
    <div class="row" v-for="row in gameRow" :key="row">

        <div v-for="col in gameCol" :key="col">
            <Box :type="map[row-1][col-1]"></Box>
        </div>

    </div>
</div>
<div class="foot"></div>
</div>
</template>
<script setup lang="ts">
import Box from "./Box.vue";
import {gameCol,gameRow} from "../game";
import {initGame}from "../game"
import {reactive, ref} from "vue"
const map=reactive([])

    let score=ref(sessionStorage.getItem("score"))
    setInterval(function(){score.value=sessionStorage.getItem("score")},500)
   


initGame(map)
</script>
<style>
    .row{
       
        display: flex;
    }
    .border{
        width: 255px;
        overflow: auto;
        /* height: 255px; */
        background: rgb(166, 188, 247);
        }
    .foot{
        width: 255px;
        height: 3px;
        background:rgb(166, 188, 247); ;
    }
</style>

