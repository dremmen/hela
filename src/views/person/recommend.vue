<template>
	<div class="recommend">
		<div class="list">
			<img src="@/assets/tuijian.png">
			<div class="con">
				<h3>张梅梅</h3>
				<p>注册： 2018-08-09</p>
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
.recommend
	background-color #fff
	.list
		padding 1.5rem 0
		margin 0 1.5rem
		border-bottom 1px solid #e6e6e6
		display flex
		position relative
		img
			max-width 5rem
			min-width 5rem
			max-height 5rem
			min-height 5rem
			border-radius 50%
			overflow hidden
			display block
			margin-right 1.5rem
		h3
			line-height 1.6rem
			font-size 1.5rem
			color #333
			font-weight 500
			position absolute
			top 2rem
		p
			color #999
			font-size 1.2rem
			line-height 1.6rem
			position absolute
			bottom 2rem
</style>