<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4876995_sb6u6jztglr.css">
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_4839011_ghdup8cmjnk.css"
  />
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_4876995_10gnphoe9wmn.css"
  />
  <div class="footer-main">
    <div class="footer-icons">
      <div class="icon">
        <span class="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"></span>
        音乐开发平台
      </div>
      <div class="icon">
        <span class="iconfont icon-agile-source"></span>
        云村交易所
      </div>
      <div class="icon">
        <span class="iconfont icon-wuqiong"></span>
        x studioAI歌手
      </div>
      <div class="icon">
        <span class="iconfont icon-anquanrenzheng"></span>
        用户认证
      </div>
      <div class="icon">
        <span class="iconfont icon-zhinengxiaoxi"></span>
        AI免费写歌
      </div>
      <div class="icon">
        <span class="iconfont icon-icon-regebang"></span>
        云推歌
      </div>
      <div class="icon">
        <span class="iconfont icon-dashang"></span>
        赞赏
      </div></div>
      <div class="footer-texts">
        <p>服务条款 ｜ 隐私政策 | 儿童隐私政策 ｜ 版权投诉  |  投资者关系  |  广告合作 |  联系我们</p>
<p>廉正举报不良信息举报邮箱:51jubao@service.netease.com客服热线:163298</p>
<p>互联网宗教信息服务许可证：浙(2022)000120增值电信业务经营许可证:浙B2-20150198粤B2-20090191-18工业和信息化部备案管理系统网站</p>
<p>网易公司版权所有@1997-2025杭州乐读科技有限公司运营:浙网文[2024]0900-042号 <img src="/log/police.png" alt=""> 浙公网安备33010802013307号算法服务公示信息</p>
      </div>
    </div>
</template>
<script setup></script>
<style scoped lang="less">
@import url(@/style.less);
.toTop{
  .flex-column();
    position: fixed;
    left: 50%;
    border: 1px solid gray;
    margin-left: 600px;
    bottom: 160px;
    width: 49px;
    gap:5px;
    border-radius: 3px;
    height: 54px;
    color: gray;
    background-position: -265px -47px;
}
.footer-texts{
  .flex-column();
  color: gray;
}
.footer-main{
  border-top: 1px solid rgb(179, 176, 176);
  height: 400px;
   .flex-column();
  width: 100%;
  gap:60px;
}
.footer-icons{
  .flex-center();
}

.icons {
  display: flex;
  gap: 7px;
}
.icon {
  width: 110px;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: gray;
}
span {
  font-size: 25px;
  width: 25px;
  height: 25px;
  color: #ff3a47;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid #ff3a47;
  display: inline-block;
  transition: background-color 0.3s;
}
span:hover {
  background-color: #ff3a47;
  color: white;
}
</style>
