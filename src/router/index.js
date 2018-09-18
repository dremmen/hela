import Vue from 'vue'
import Router from 'vue-router'
// 盒子
import box from '@/views/box'
// 主页
import Home from '@/views/Home.vue'
// 搜索页
import Search from '@/views/Search.vue'
// 更多分类
import More from '@/views/More.vue'
// 饮食主页
import dietInfo from '@/views/diet/dietInfo.vue'
// 饮食音频
import audioList from '@/views/diet/audioList.vue'
// 付费课程
import payCourse from '@/views/course/payCourse.vue'
// 课程分类
import courseClass from '@/views/course/courseClass.vue'
// 课程详情
import payDetials from '@/views/course/payDetials.vue'
// 活动中心
import activityCenter from '@/views/activity/activityCenter.vue'
// 活动详情
import activityDetails from '@/views/activity/activityDetails.vue'
// 商品详情
import goodsDetails from '@/views/goods/goodsDetails.vue'
// 付款
import payment from '@/views/goods/payment.vue'
// 个人中心
import personalCenter from '@/views/person/personalCenter.vue'
// 绑定手机号
import bindPhone from '@/views/person/bindPhone.vue'
// 订单列表
import order from '@/views/person/order.vue'
// 订单详情
import orderDetails from '@/views/person/orderDetails.vue'
// 余额
import balance from '@/views/person/balance.vue'
// 提现
import putForward from '@/views/person/putForward.vue'
// 我的点播
import demand from '@/views/person/demand.vue'
// 点播历史
import demandHistory from '@/views/person/demandHistory.vue'
// 我的推荐
import recommend from '@/views/person/recommend.vue'
// 我的销售
import sale from '@/views/person/sale.vue'
// 代金券
import coupon from '@/views/person/coupon.vue'
// 我要进货
import purchase from '@/views/person/purchase.vue'
// 支付成功
import paysuccess from '@/views/paysuccess.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: box,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/activityCenter',
          name: 'activityCenter',
          component: activityCenter
        },
        {
          path: '/personalCenter',
          name: 'personalCenter',
          component: personalCenter
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/dietInfo',
      name: 'dietInfo',
      component: dietInfo
    },
    {
      path: '/audioList',
      name: 'audioList',
      component: audioList
    },
    {
      path: '/payCourse',
      name: 'payCourse',
      component: payCourse
    },
    {
      path: '/courseClass',
      name: 'courseClass',
      component: courseClass
    },
    {
      path: '/payDetials',
      name: 'payDetials',
      component: payDetials
    },
    {
      path: '/activityDetails',
      name: 'activityDetails',
      component: activityDetails
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: goodsDetails
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/bindPhone',
      name: 'bindPhone',
      component: bindPhone
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance
    },
    {
      path: '/putForward',
      name: 'putForward',
      component: putForward
    },
    {
      path: '/demand',
      name: 'demand',
      component: demand
    },
    {
      path: '/demandHistory',
      name: 'demandHistory',
      component: demandHistory
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/sale',
      name: 'sale',
      component: sale
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: purchase
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      component: paysuccess
    },
  ]
})
