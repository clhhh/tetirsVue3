<template>
<div >

<div class="border">
    <div class="row" v-for="row in gameRow" :key="row">

        <div v-for="col in gameCol" :key="col">
            <Box :type="map[row-1][col-1]"></Box>
        </div>

    </div>
</div>
</div>
</template>
<script setup lang="ts">
import Box from "./Box.vue";
import {gameCol,gameRow} from "../game";
import {startGame}from "../game"
import {reactive} from "vue"
const map=reactive([])

startGame(map)
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
</style>

