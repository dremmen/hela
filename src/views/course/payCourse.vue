<template>
  <div class="pay-course">
  	<!-- 付费点播 -->
    <div class="section">
    	<div class="item-list" @click="router({path: 'courseClass'})">
    		<img src="@/assets/home-img2.png">
    		<span class="mask"></span>
    		<div class="div-tip">
    			<span></span>
    			<h3>饮食事项</h3>
    			<p>能吃什么应该吃什么，我们都会全部告诉你</p>
    		</div>
    		<div class="flex-bottom">
    			<p class="bottom-title">饮食事项</p>
    			<p class="num">
    				<span class="video-num">共255课</span>
    				<span class="person-num">945人已点播</span>
    			</p>
    		</div>
    	</div>
    	<div class="item-list" @click="router({path: 'courseClass'})">
    		<img src="@/assets/home-img2.png">
    		<span class="mask"></span>
    		<div class="div-tip">
    			<span></span>
    			<h3>胎儿早教</h3>
    			<p>胎教方法早知道，让你的宝宝快人一步</p>
    		</div>
    		<div class="flex-bottom">
    			<p class="bottom-title">胎儿早教</p>
    			<p class="num">
    				<span class="video-num">共255课</span>
    				<span class="person-num">945人已点播</span>
    			</p>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>

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
  }
}
</script>
<style lang="stylus" scoped>
	.pay-course
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		.section
			background-color #fff
			.item-list
				padding 0
				padding-bottom 3rem
				position relative
				display block
				img
					height 16rem
				.mask
					position absolute
					background linear-gradient(0deg, rgba(0,1,26,0), rgba(0,1,26,.6))
					width 100%
					height 16rem
					top 0px
					left 0px
				.flex-bottom
					display flex
					padding 1.5rem
					padding-bottom 0
					.bottom-title
						color #333
						line-height 1.8rem
						font-size 1.5rem
						height 1.8rem
						font-weight bold
					.num
						text-align right
						flex 1
						line-height 1.8rem
						height 1.8rem
						font-size 1.2rem
						.video-num
							color #FF659B
							margin 1.5rem
						.person-num
							color #999
				.div-tip
					position absolute
					left 3.7rem
					top 5rem
					color #fff
					z-index 9
					h3
						font-weight bold
						font-size 1.8rem
					p
						width 15rem
						height 3rem
						font-size 1.2rem
						font-weight 500
						line-height 1.8rem
						margin-top .5rem
					span
						position absolute
						width 8rem
						height 1.4rem
						left -.5rem
						background-color #000
						top 1.2rem
						z-index -1
</style>