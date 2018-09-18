<template>
	<div class="sale">		
		<div class="order-list">
			<div class="top">
				<p><em>王飘雪</em> 购买了运搬机器人设备购买了运搬机器人设备</p>
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
				<p class="price">总计金额： ￥308.00</p>
				<p class="time">2017.07.06 18:50</p>
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

<style lang="stylus">
	
.sale
	background-color #f2f2f2
	min-width 100vw
	min-height 100vh
	.order-list
		background-color #fff
		margin-bottom 1rem
		.top
			line-height 4.5rem
			height 4.5rem
			overflow hidden
			padding 0 1.5rem
			p
				width 70%
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
				font-size 1.5rem
				em
					color #FF659B
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
			display flex
			.price
				font-size 1.5rem
				color #333
				flex 1
			.time
				font-size 1.5rem
				color #999
				text-align right
				flex 1
</style>