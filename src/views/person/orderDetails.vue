<template>
	<div class="order">	
		<p class="title-status">状态：待发货</p>
		<div class="order-list">
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
				<p>配送地址 : 贝雯琳 13085008500 广东省广州市天河区天河北路 壬丰大厦</p>
			</div>
		</div>
		<div class="details">
			<div class="details-list">
				<span class="title">支付方式</span>
				<span class="con">微信支付</span>
			</div>
			<div class="details-list">
				<span class="title">订单编号</span>
				<span class="con">25253580380</span>
			</div>
			<div class="details-list border-none">
				<span class="title">创建时间</span>
				<span class="con">2016.10.30 14:00</span>
			</div>
		</div>
		<div class="details">
			<div class="details-list">
				<span class="title">代金券</span>
				<span class="con">-￥10.00</span>
			</div>
			<div class="details-list border-none">
				<span class="title">价格总计</span>
				<span class="con price">￥303</span>
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
	.title-status
		line-height 5rem
		font-size 1.7rem
		color #333
		font-weight bold
		background-color #fff
		padding-left 1.5rem
		margin-bottom 1rem
	.order-list
		background-color #fff
		margin-bottom 1rem
		.goods
			display flex
			background-color #fff
			margin-bottom 1rem
			padding 2rem 0
			margin 0 1.5rem
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
			color #333
			font-size 1.3rem
			padding 1rem 1.5rem
			line-height 2.5rem
	.details
		background-color #fff
		margin-bottom 1rem
		.details-list
			margin 0 1.5rem
			line-height 5rem
			height 5rem
			border-bottom 1px solid #e5e5e5
			display flex
			.title
				font-size 1.5rem
				color #8D8D99
				flex 1
			.con
				font-size 1.5rem
				color #8D8D99
				flex 1
				text-align right
			.price
				color #FF659B
		.border-none
			border none
</style>