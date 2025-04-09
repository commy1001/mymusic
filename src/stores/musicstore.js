import { defineStore } from "pinia";

export const useMusic=defineStore('music',{
    //状态
    state:()=>({
        playMusic: '', // 当前播放的音乐
        isPlaying: false, // 是否正在播放
    }),
    //行为
    actions:{
        changeMusic(newMusic){
            this.playMusic=newMusic;
            this.isPlaying = true; // 设置为正在播放状态
        },
        stopMusic() {
            this.playMusic = '';
            this.isPlaying = false; // 设置为未播放状态
          }
    },
    //装饰器
    getters:{

    }
     //插件：数据持久化 （关闭浏览器后 再次打开 有之前的数据）
    //  Plugins:{
    // }

})