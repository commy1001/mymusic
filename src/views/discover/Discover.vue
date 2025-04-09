<template>
    <div>
<AppHeader></AppHeader>
    </div>
    <RouterView></RouterView>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { RouterView } from 'vue-router';

</script>

<style scoped>

</style>