<template>
	<div class="order">		
    <tab
    	class="tab"
    	active-color = "#FF659B"
    	custom-bar-width = "2rem"
    	>
      <tab-item selected @on-item-click="onItemClick(1)">全部订单</tab-item>
      <tab-item @on-item-click="onItemClick(2)">待发货</tab-item>
      <tab-item @on-item-click="onItemClick(3)">已发货</tab-item>
    </tab>
		<div class="order-list" @click="router({path: 'orderDetails'})">
			<div class="top">
				<p class="time">2017.07.06 18:50</p>
				<p class="status">待发货</p>
			</div>
			<div class="goods">
				<div class="img">
					<img src="@/assets/dingdan.png">
				</div>
				<div class="title">
					<p class="tip">2018第三代新款孕伴机器人语音设备</p>
					<p class="price">¥368</p>
				</div>
				<div class="num">x1</div>
			</div>
			<div class="bottom">
				<p>总计金额： ￥308.00</p>
			</div>
		</div>
	</div>
</template>

<script>
import { Tab, TabItem  } from 'vux'
export default {
  components: {
  	Tab, 
  	TabItem
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {    
    router (path) {
      this.$router.push(path)
    },
    onItemClick (index) {
    	console.log(index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.order
	background-color #f2f2f2
	min-width 100vw
	min-height 100vh
	.tab
		margin-bottom 1rem
	.order-list
		background-color #fff
		margin-bottom 1rem
		.top
			line-height 4.5rem
			height 4.5rem
			overflow hidden
			padding 0 1.5rem
			display flex
			p
				flex 1
			.time
				font-size 1.5rem
				color #999
			.status
				font-size 1.5rem
				color #ff659b
				text-align right
		.goods
			display flex
			background-color #fff
			margin-bottom 1rem
			padding 2rem 0
			margin 0 1.5rem
			border-top 1px solid #e5e5e5
			border-bottom 1px solid #e5e5e5
			.img
				width 10rem
				height 7.5rem
				margin-right 1.4rem
			.title
				position relative
				max-width 17.5rem
				min-width 17.5rem
				.tip
					font-size 1.5rem
					color #333
					font-weight 500
				.price
					color #FF659B
					font-size 1.3rem
					line-height 1.6rem
					position absolute
					bottom 0px
			.num
				flex 1
				text-align right
				line-height 2.1rem
				font-size 1.5rem
				font-weight 500
		.bottom
			line-height 4.5rem
			color #333
			font-size 1.5rem
			padding 0 1.5rem
</style>