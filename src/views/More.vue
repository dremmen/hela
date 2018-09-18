<template>
  <div class="more">
  	<!-- 更多 -->
    <div class="nav">
    	<div class="flex-nav">
    		<div class="nav-item" @click="router({path: 'dietInfo'})">
    			<img src="@/assets/yunbangkechen5.png">
    			<p>饮食</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yunbangkechen6.png">
    			<p>护理</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yunbangkechen7.png">
    			<p>常识</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yunbangkechen8.png">
    			<p>运动</p>
    		</div>
    	</div>
    	<div class="flex-nav">
    		<div class="nav-item">
    			<img src="@/assets/yunbangkechen9.png">
    			<p>胎教</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yunbangkechen10.png">
    			<p>检查</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yunbangkechen11.png">
    			<span class="soid">付费</span>
    			<p>付费点播</p>
    		</div>
    		<div class="nav-item">
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
    }
  }
}
</script>
<style lang="stylus" scoped>
	.more
		background-color #fff
		min-width 100vw
		min-height 100vh
		.nav
			background-color #fff
			padding-top 2.6rem
			padding-bottom .9rem
			.flex-nav
				display flex
				.nav-item
					text-align center
					color #666
					font-size 1.2rem
					flex 1
					margin-bottom 1.5rem
					position relative
					.soid
						width 2.7rem
						height 1.6rem
						background-color #9F7FFF
						border-radius .4rem
						line-height 1.6rem
						color #fff
						font-size 1rem
						text-align center
						position absolute
						right 1.2rem
						top .6rem
					img
						width auto
						height 5.5rem
						display inline-block
						margin-bottom .3rem
</style>