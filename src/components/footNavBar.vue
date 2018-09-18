<template>
  <div class="footer">  	
    <tabbar>
      <tabbar-item :selected="this.$route.path === '/' || this.$route.path === '/home'" link="/">
        <img slot="icon" src="@/assets/bottom1.png">
        <img slot="icon-active" src="@/assets/bottom1-red.png">
        <span slot="label">孕伴课程</span>
      </tabbar-item>
      <tabbar-item :selected="this.$route.path === '/activityCenter'" link="/activityCenter">
        <img slot="icon" src="@/assets/bottom2.png">
        <img slot="icon-active" src="@/assets/bottom2-red.png">
        <span slot="label">活动中心</span>
      </tabbar-item>
      <tabbar-item link="/goodsDetails">
        <img slot="icon" src="@/assets/bottom3.png">
        <span slot="label">孕伴机器人</span>
      </tabbar-item>
      <tabbar-item class="img-person" :selected="this.$route.path === '/personalCenter'" link="/personalCenter">
        <img slot="icon" src="@/assets/bottom4.png">
        <img slot="icon-active" src="@/assets/bottom4-red.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
      }
    },
    created () {
    }
  }
</script>

<style type="text/css">
  #app .weui-tabbar{height: 4.9rem;position: fixed;background-color: #fff;}
  #app .weui-tabbar .weui-bar__item_on .weui-tabbar__label span{color: #333;font-size: 1.1rem;}
  #app .weui-tabbar .weui-tabbar__label span{color: #999;font-size: 1.1rem;}
  .weui-tabbar .weui-tabbar__icon{width: 2.2rem;height: 2.2rem;}
  .weui-tabbar .img-person .weui-tabbar__icon{width: 2rem;height: 2.1rem;}
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label,.weui-tabbar__label .active{color: #36c3bf!important;}
  .weui-tabbar__item{text-decoration: none;}
</style>
