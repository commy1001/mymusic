<template>
    <div class="singer">
        <div class="singerimg">
            <img :src="props.data.discImg" alt="">
        </div>
        <div class="singer-right">
            <div class="rightsingername">{{ props.data.discAuthor }}</div>
            <div class="rightsingerinfo">{{ props.data.discContent }}</div>
        </div>
    </div>
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

.singer {

    gap: 15px;
    width: 280px;
    height: 90px;
    background-color: #fafafa;
    border: 1px solid rgb(194, 188, 188);
    display: flex;
    
}

.singerimg img {
    width: 90px;
}

.singer-right {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5px;
   
}

.rightsingername {
    font-size: 18px;
    font-weight: 700;
}

.rightsingerinfo {
    color: gray;
    font-size: 13px;
}
</style>