<template>

  
    <Appswiper></Appswiper>
    <div class="center">
    <div class="left">
    <AppTitle1></AppTitle1>
    <Appsong></Appsong>
    <AppTitle2></AppTitle2>
    <Appswiper2></Appswiper2>
    <AppTitle3></AppTitle3>
    <AppChart></AppChart>
    </div>
    <div class="right">
    <Apprightlog></Apprightlog>
    <AppSinger></AppSinger>
    </div>
    </div>
    <Appfooter></Appfooter>
    
    
    </template>
    <script setup>
    import AppHeader from '../components/AppHeader.vue'
    import AppNav  from '../components/AppNav.vue'
    import Appswiper from'../components/Appswiper.vue'
    import AppTitle1 from '../components/AppTitle1.vue'
    import Appfooter from '../components/Appfooter.vue'
    import Appsong from '../Appsong.vue'
    import AppTitle2 from '../components/AppTitle2.vue'
    import Appswiper2 from '../components/Appswiper2.vue'
    import AppTitle3 from '../components/AppTitle3.vue'
    import AppChart from '../components/AppChart.vue'
    import Apprightlog from '../components/Apprightlog.vue'
    import AppSinger from '../components/AppSinger.vue'
    </script>
    <style scoped>
    .center{
        width: 100%;
        justify-content: center;
        display: flex;
    }
    </style>