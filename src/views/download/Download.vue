<template>
    <AppHeader></AppHeader>
    <Nav></Nav>
    <div>
        <img src="/log/navimg3.png" alt="">
    </div>
    <Appfooter></Appfooter>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import Nav from '../../components/nav.vue';
import Appfooter from '@/components/Appfooter.vue'
</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
}

</style>