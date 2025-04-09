<template>
    <AppHeader></AppHeader>
    <Nav></Nav>
    <div class="my-img">
<img src="/log/navimg1.png" alt="">
    </div>
    <Appfooter></Appfooter>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import Nav from '../../components/nav.vue';
import Appfooter from '@/components/Appfooter.vue'

</script>

<style scoped>
.my-img img{
    width: 100%;
    height: 100%;
}
</style>