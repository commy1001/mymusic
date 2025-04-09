<template>
  <AppNav></AppNav>
  <Bookicons></Bookicons>
  <div class="bookcenter">
    <div class="bookleft">
      <Booktitle>推荐节目</Booktitle>
      <Recomshowslist :program="program"></Recomshowslist>
    </div>
    <div class="bookright">
      <Booktitle>节目排行榜</Booktitle>
      <showtoplist :programRank="programRank"></showtoplist>
    </div>
  </div>
  <Booktitle2>生活·电台</Booktitle2>
  <livetv1 :programItem1="programItem1"></livetv1>
  <Booktitle2>情感·电台</Booktitle2>
  <livetv2 :programItem2="programItem2"></livetv2>
  <Booktitle2>创作翻唱·电台</Booktitle2>
  <livetv3 :programItem3="programItem3"></livetv3>
  <Booktitle2>知识·电台</Booktitle2>
  <livetv4 :programItem4="programItem4"></livetv4>
  <Appfooter></Appfooter>
</template>

<script setup>
import AppNav from "@/components/AppNav.vue";
import Bookicons from "@/songbook/Bookicons.vue";
import Booktitle from "../../../songbook/Booktitle.vue";
import Booktitle2 from "../../../songbook/Booktitle2.vue";
import Recomshowslist from "../../../songbook/Recomshowslist.vue";
import showtoplist from "../../../songbook/showtoplist.vue";
import livetv1 from "../../../songbook/livetv1.vue";
import livetv2 from "../../../songbook/livetv2.vue";
import livetv3 from "../../../songbook/livetv3.vue";
import livetv4 from "../../../songbook/livetv4.vue";
import Appfooter from "@/components/Appfooter.vue";
import request from '@/utils/request.js';
import { ref } from "vue";

const program = ref([]);
const programItem = ref([]);
const programRank = ref([]);
const programItem1 = ref([]);
const programItem2 = ref([]);
const programItem3 = ref([]);
const programItem4 = ref([]);

const getData = async () => {
  let res = await request.get('/discover/djradio');
        console.log(res);
        program.value = res.data.data.program || [];
            const programs = res.data.data.programItem|| [];
            programItem.value = programs;
            programRank.value = res.data.data.programRank || [];
            
            // 直接赋值切片结果，不需要computed
            programItem1.value = programs.slice(0, 4);
            programItem2.value = programs.slice(4, 8);
            programItem3.value = programs.slice(8, 12);
            programItem4.value = programs.slice(12, 16);
    try {
        let res = await request.get('/discover/djradio');
        console.log(res);
        
        // 添加安全检查
        if (res.data?.data) {
            program.value = res.data.data.program || [];
            const programs = res.data.data.programItem|| [];
            programItem.value = programs;
            programRank.value = res.data.data.programRank || [];
            
            // 直接赋值切片结果，不需要computed
            programItem1.value = programs.slice(0, 4);
            programItem2.value = programs.slice(4, 8);
            programItem3.value = programs.slice(8, 12);
            programItem4.value = programs.slice(12, 16);
        }
    } catch (error) {
        console.error('获取数据失败:', error);
        // 可以在这里设置默认值或显示错误信息
    }
};
getData();
</script>

<style scoped>
.bookcenter {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;
}
</style>
