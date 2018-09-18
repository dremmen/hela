<template>
	<div class="pay-success">
		<div class="logo">
			<img src="@/assets/kechenxiangqing6.png">
			<p>支付成功</p>
		</div>
		<div class="goods">
			<p class="title">2018第三代新款孕伴机器人语音设备</p>
			<p class="price">
				368<em>元</em>
			</p>
		</div>
		<div class="btn">
			<span @click="router({path: 'home'})">返回首页</span>
			<p>订单可在“个人中心-全部订单“中查看</p>
		</div>
	</div>
</template>

<script>
export default {
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
  }
}
</script>
<style lang="stylus" scoped>
	.logo
		text-align center
		padding-top 4rem
		img
			width 4.3rem
			height 4.3rem
			display inline-block
		p
			font-size 1.5rem
			font-weight bold
			color #9F7FFF
	.goods
		text-align center
		margin-top 10rem
		.title
			color #999
			font-size 1.5rem
			line-height 3rem
		.price
			color #333
			font-size 4rem
			font-weight bold
			line-height 2.2rem
			margin-top 1rem
			em
				font-size 2rem
				line-height 2.2rem
	.btn
		position fixed
		bottom 4.8rem
		text-align center
		width 100%
		span
			width 16.3rem
			height 3.1rem
			border 1px solid #ff659b
			border-radius .3rem
			color #ff659b
			margin-bottom 1.5rem
			display inline-block
			line-height 3.1rem
			text-align center
		p
			color #999
			font-size 1.3rem
			line-height 1.6rem
</style>