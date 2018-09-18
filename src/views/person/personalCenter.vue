<template>
	<div class="person-center">
		<div class="head">
			<div class="head-img">
				<img src="@/assets/gerenzhongxin1.jpg">
			</div>
			<div class="head-name">
				<div class="head-flex">
					<p class="name">王迎春</p>
					<p class="tag"><img class="tag-img" src="@/assets/gerenzhongxin1.png"> 团购</p>
				</div>
				<div class="head-flex head-block">
					<p class="phone"><img class="phone-img" src="@/assets/gerenzhongxin2.png"> 13085077288</p>
					<p @click="router({path: '/bindPhone'})" class="bind">点我绑定手机号</p>
				</div>
			</div>
		</div>
		<div class="tag-order">
			<div class="order">
				<img src="@/assets/gerenzhongxin3.png">
				<p>待发货</p>
			</div>
			<div class="order">
				<img src="@/assets/gerenzhongxin4.png">
				<p>已发货</p>
			</div>
			<div class="order border-nonne">
				<img src="@/assets/gerenzhongxin5.png">
				<p>全部订单</p>
			</div>
		</div>
		<div class="item-list">
			<div class="item" @click="router({path: 'balance'})">
				<img class="img-icon" src="@/assets/gerenzhongxin6.png">
				<span>余额</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
			</div>
			<div class="item" @click="router({path: 'demand'})">
				<img class="img-icon" src="@/assets/gerenzhongxin7.png">
				<span>我的点播</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
			</div>
			<div class="item" @click="router({path: 'demandHistory'})">
				<img class="img-icon" src="@/assets/gerenzhongxin8.png">
				<span>播放历史</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
			</div>
			<div class="item" @click="router({path: 'recommend'})">
				<img class="img-icon" src="@/assets/gerenzhongxin9.png">
				<span>我的推荐</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
			</div>
			<div class="item" @click="router({path: 'sale'})">
				<img class="img-icon" src="@/assets/gerenzhongxin10.png">
				<span>我的销售</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
			</div>
			<div class="item" @click="router({path: 'coupon'})">
				<img class="img-icon" src="@/assets/gerenzhongxin11.png">
				<span>代金券</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
			</div>
			<div class="item border-none" @click="router({path: 'purchase'})">
				<img class="img-icon" src="@/assets/gerenzhongxin12.png">
				<span>我要进货</span>
				<img class="img-arrow" src="@/assets/gerenzhongxin13.png">
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
	    }
	  }
	}
</script>

<style lang="stylus" scoped>
	.person-center
		background-color #f2f2f2
		min-height 100vh
		min-width 100vw
		padding-bottom 5.9rem
		.head
			padding 3rem 1.5rem 6.3rem 1.5rem
			background-color #ff659b
			display flex
			.head-img
				width 7.8rem
				height 7.8rem
				border-radius .4rem
				background-color rgba(255,255,255,.6)
				padding .4rem
				margin-right 1.5rem
			.head-name
				flex 1
				position relative
				padding-top .7rem
				box-sizing border-box
				.head-flex
					display flex
					width 100%
					img
						display inline-block
						vertical-align middle
						position relative
						top -.2rem						
					.name
						line-height 2.4rem
						font-size 1.9rem
						font-weight bold
						color #fff
						flex 1
					.tag
						background-color rgba(255,255,255,.2)
						border-radius 1000px
						height 2.4rem
						line-height 2.4rem
						width 6.5rem
						text-align center
						color #fff
						.tag-img
							width 1.5rem
					.phone
						color #fff
						font-size 1.3rem
						opacity .9
						line-height 1.6rem
						flex 1
						.phone-img
							width 1.1rem
					.bind
						flex 1
						opacity .9
						color #fff
						line-height 1.6rem
						text-decoration-line underline
				.head-block
					position absolute
					bottom .7rem
		.tag-order
			display flex
			margin 0 1.5rem
			background-color #fff
			margin-top -4.3rem
			border-radius .4rem
			padding 2rem 0
			margin-bottom 1rem
			.order
				flex 1
				border-right 1px dashed #e5e5e5
				text-align center
				img
					height 2.3rem
					display inline-block
					width auto
				p
					color #333
					font-size 1.3rem
			.border-nonne
				border none
		.item-list
			border-radius .4rem
			background-color #fff
			margin 0 1.5rem
			.item
				margin 0 1.5rem
				line-height 5rem
				border-bottom 1px solid #e5e5e5
				position relative
				img
					display inline-block
					vertical-align middle
					height auto
					position relative
					top -.1rem
				.img-icon
					width 1.6rem
					margin-right 1.7rem
				.img-arrow
					width .6rem
					position absolute
					right 0
					top 1.925rem
			.border-none
				border none
</style>