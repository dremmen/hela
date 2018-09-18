<template>
	<div class="demand">
		<div class="item-list">
			<div class="img">
				<img src="@/assets/home-img1.png">
			</div>
			<div class="con">
				 <p class="tip">备孕阶段过渡辛辣对身体有什么影响？</p>
				 <p class="video-num">
				 	<span class="time">
				 		<img src="@/assets/yunbangkechen4.png"> 10:25
				 	</span>
				 </p>
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
	    	tabIndex: 1
	    }
	  },
	  created () {

	  },
	  methods: {
	  	onItemClick (index) {
	  		this.tabIndex = index
	  	}
	  }
	}
</script>
<style lang="stylus" scoped>	
.demand		
	background-color #fff	
	.item-list
		display flex
		padding 2rem 0
		margin 0 1.5rem
		border-bottom 1px solid #e6e6e6
		.img
			width 12rem
			min-width 12rem
			max-width 12rem
			height 8rem
			border-radius .4rem
			overflow hidden
			position: relative
			margin-right 1.5rem
			img
				width 100%
				height 100%
		.con
			position relative
			.tip
				color #333
				font-weight bold
				font-size 1.5rem
			.video-num
				display flex
				width 100%
				line-height 1.4rem
				font-size 1.2rem
				color #999
				position absolute
				bottom .3rem
				.time
					color #999
					font-size 1.2rem
					display flex
					min-width 50%
					img
						width 1.4rem
						height 1.4rem
						margin-right .8rem
</style>