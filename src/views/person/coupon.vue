<template>
	<div class="coupon">
		<div class="coupon-none">
			即刻参与活动赢取代金券前往 <span @click="router({path: 'activityCenter'})">活动中心 ></span>
		</div>
		<div class="coupon-block">
			<span class="price">￥<em>30</em></span>
			<div class="con">
				<p class="con-price">￥30 代金券</p>
				<p class="time">有效期至2018年12月31日</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">	
	export default {
	  components: {
	  },
	  data () {
	    return {
	    	coupon: [],
	    }
	  },
	  created () {

	  },
	  methods: {    
	    router (path) {
	      this.$router.push(path)
	    }
	  }
	}
</script>
<style lang="stylus">
	.coupon
		width 100vw
		height 100vh
		background-color #f2f2f2
		overflow hidden
		.coupon-none			
			display none
			font-size 1.5rem
			width 16.875rem
			text-align center
			line-height 3rem
			position absolute
			top 50%
			margin-top -3rem
			left 50%
			margin-left -8.4325rem
			span
				color #FF659B
		.coupon-block
			background-image url('../../assets/querengdingdan2.png')
			background-size contain
			background-repeat no-repeat
			margin 1.5rem
			width 34.5rem
			height 8rem
			display flex
			.price
				flex 1
				max-width 9rem
				line-height 8rem
				padding-left 1rem
				color #FF659B
				font-weight bold
				font-size 1.8rem
				em
					font-size 4rem
			.con
				flex 1
				margin-left 3rem
				padding-top 1.9rem
				.con-price
					font-size 1.5rem
					color #333
					font-weight 500
				.time
					font-size 1.3rem
					color #999
</style>