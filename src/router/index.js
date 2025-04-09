import {createWebHashHistory,createRouter} from 'vue-router'


import Discover from '@/views/discover/Discover.vue'
import My from '@/views/my/My.vue'
import Concern from '@/views/concern/Concern.vue'
import  Download from '@/views/download/Download.vue'
 //二级路由
import Recommend from '@/views/discover/child/Recommend.vue'
import Toplist from '@/views/discover/child/toplist.vue'
import Songlist from'@/views/discover/child/Songlist.vue'
import Songbook from '@/views/discover/child/Songbook.vue'
import Singer from '@/views/discover/child/Singer.vue'
import Newtop from '@/views/discover/child/Newtop.vue'

const routes =[
    //一级路由
    //重定向
    {
        path:'/',
        redirect:'/discover',
    },
    {
        path:'/discover',    //访问的url地址
        component:Discover,    //访问url对应的组件
        redirect:'/discover/recommend',
        children:[//二级路由
            {
                path:'/discover/recommend',
                component:Recommend,
            },
            {
                path:'/discover/toplist',
                component:Toplist,
            },
            {
                path:'/discover/songlist',
                component:Songlist,
            },
            {
                path:'/discover/songbook',
                component: Songbook,
            },
            {
                path:'/discover/singer',
                component: Singer,
            },
            {
                path:'/discover/newtop',
                component:Newtop,
            }
        ]
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/concern',
        component:Concern
    },
    {
        path:'/download',
        component:Download
    }
   
]


const router =createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;
