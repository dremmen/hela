<template>
	<div class="demandHistory">
		<div class="item-list">
  		<p>备孕阶段过渡辛辣对身体有什么影响？</p>
  		<div class="tip">
  			<span>饮食 |</span>
  			<span> 备孕期</span>
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
.demandHistory
	background-color #fff
	.item-list
		padding 2rem 0
		margin 0 1.5rem
		border-bottom 1px solid #e6e6e6
		p
			color #333
			font-weight bold
			font-size 1.5rem
			line-height 1.5rem
		.tip
			font-size 1.2rem
			line-height 1.2rem
			color #999
			margin-top 1.2rem
</style>