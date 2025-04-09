<template>
    <header>
        <div class="top-left">入驻歌手</div>
        <div class="top-right">查看全部 ></div>
    </header>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        default: () => ({
            img: 'xxx.jpg',
            num: 0,
            title: '这是歌单标题',
        })
    }
})
</script>

<style scoped>
header {
    display: flex;
    height: 40px;
    align-items: flex-end;
    padding-bottom: 6px;
    width: 280px;
    justify-content: space-between;
    border-bottom: 1px solid gray;
}

.top-left {
    font-size: 17px;
    font-weight: 700;
}

.top-right {
    color: gray;
}
</style>