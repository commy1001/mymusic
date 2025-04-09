<template>
    <main>
        <div class="one-all">
        <div class="title">云音乐特色榜</div>
        <div class="center" v-for="item in featurelist" :key="item.id">
            <div class="list">
                <div class="listimg"><img :src="item.img" alt=""></div>
                <div class="listtext">
                    <div class="listtext1">{{ item.title }}</div>
                    <div class="listtext2">{{ item.context }}</div>
                </div>
            </div>
        </div>
        
        <div class="title">全球媒体榜</div>
        <div class="center" v-for="item in mediaboard" :key="item.id">
            <div class="list">
                <div class="listimg"><img :src="item.img" alt=""></div>
                <div class="listtext">
                    <div class="listtext1">{{ item.title }}</div>
                    <div class="listtext2">{{ item.context }}</div>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>

<script setup>
const props = defineProps({
  featurelist: {
    type: Array,
    required: true
  },
  mediaboard: {
    type: Array,
    required: true
  }
});
</script>


<style scoped>
main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.one-all{
    border: 1px solid rgb(195, 193, 193);
    width: 280px;
    height: 2000px;
    background-color: #f9f9f9;
    padding: 25px;
    box-sizing: border-box;
    display: flex;
    gap:15px;
    flex-direction: column;
}
.list{
    display: flex;
    gap: 10px;
    align-items:center;
    
}
.listimg img{
    width: 70px;
}
.listtext{
    font-size: 15px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.listtext2{
    color: gray;
}
</style>