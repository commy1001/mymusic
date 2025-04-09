<template>
   
        <div class="header2-main">
            <div class="anchor">
                <div class="anchorimg"><img :src="props.data.discImg" alt=""></div>
                <div class="anchortext">
                    <div class="anchortext1">{{ props.data.discAuthor }}</div>
                    <div class="anchortext2">{{ props.data.discContent }}</div>
                </div>
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
.header2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.header2-title {
    font-weight: 600;
    width: 280px;
    padding-bottom: 8px;
    border-bottom: 1px solid gray;
}

.header2-main {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.anchor {
    display: flex;
    gap: 10px;
}

.anchorimg img {
    width: 55px;
}

.anchortext {
    display: flex;
    flex-direction: column;
}

.anchortext1 {
    font-size: 20px;
    font-weight: 700;
}

.anchortext2 {
    color: gray;
}
</style>