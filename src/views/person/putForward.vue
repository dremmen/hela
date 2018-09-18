<template>
	<div class="put-forward">
		<div class="div-input">
			<div class="div">
				<label>支付宝账号</label>
				<input type="text" name="phoen" placeholder="请输入提现支付宝账号">
			</div>
			<div class="div border-none">
				<label>支付宝姓名</label>
				<input type="text" name="phoen" placeholder="请输入提现支付宝姓名">
			</div>
		</div>
		<div class="div-input matop">			
			<div class="div border-none">
				<label>提现金额</label>
				<input type="text" name="phoen" :placeholder="current_price">
			</div>
		</div>
		<p class="tip">提现额外扣除¥xx.00 服务费</p>
		<span class="submit-btn">确认提现</span>
		<p class="shenhe">提现审核通过后1~2工作日内可到账</p>
	</div>
</template>

<script type="text/javascript">
	
	export default {
	  components: {
	  },
	  data () {
	    return {
	    	current_price: '当前金额20元'
	    }
	  },
	  created () {

	  },
	  methods: {    
	    router (path) {
	      this.$router.push(path)
	    },
	    onItemClick (index) {
	    	this.tabIndex = index
	    }
	  }
	}
</script>

<style lang="stylus" scoped>
	.put-forward
		background-color #f2f2f2
		height 100vh
		width 100vw
		.matop
			margin-top 1rem
		.div-input
			background-color #fff
			.div
				margin 0 1.5rem
				border-bottom 1px solid #e5e5e5
				display flex
				line-height 5rem
				height 5rem
				overflow hidden
				position relative
				label
					width 6rem
				input
					color #333
					background-color #fff
					height 5rem
					line-height 5rem
					padding-left 1.5rem
					outline none
					&::-webkit-input-placeholder
						color #999
				span
					width 9.2rem
					height 3.3rem
					line-height 3.3rem
					text-align center
					background-color #ff659b
					border-radius .3rem
					position absolute
					right 1.5rem
					color #F5F5FA
					font-size 1.5rem
					top .85rem
			.border-none
				border none
		.tip
			margin-top 1.5rem
			margin-left 1.5rem
			color #9F7FFF
			font-size 1.2rem
		.submit-btn
			line-height 5rem
			background-color #FF659B
			border-radius .3rem
			width 92%
			position relative
			left 4%
			display block
			text-align center
			font-size 1.6rem
			font-weight 500
			color #F5F5FA
			margin-top 3rem
		.shenhe
			text-align center
			margin-top 1.5rem
			color #939393
			font-size 1.2rem
</style>