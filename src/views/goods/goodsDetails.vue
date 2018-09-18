<template>
  <div class="goods-details">
  	<!-- 饮食介绍 -->
  	<img class="info-img" src="@/assets/shangpingxiangqing1.png">
  	<div class="info-p">
  		<p class="title">备孕阶段过渡辛辣对身体有什么影响？</p>
  		<p class="price">￥12.5</p>  
  		<div class="num">
  			<span class="tip">数量</span>
  			<div class="operate">
  				<span @click="jian"><img src="@/assets/jianhao.png"></span>
  				<span class="pay_num">{{num}}</span>
  				<span @click="jia"><img src="@/assets/jiahao.png"></span>
  			</div>
  		</div>
  	</div>
  	<div class="details">
  		<p>商品详情</p>
  		<img src="@/assets/shangpingxiangqing2.png">
  	</div>
  	<div class="btn" @click="router({path: 'payment'})">
  		<img src="@/assets/yunbangsebei2.png">
  		立即购买
  	</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
  		num: 1
    }
  },
  created () {
  },
  methods: {    
    router (path) {
      this.$router.push(path)
    },
    jian () {
    	if(this.num <= 1) {
    		return 
    	}
    	this.num--
    },
    jia () {
    	this.num++
    }
  }
}
</script>
<style lang="stylus" scoped>
	.goods-details
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		.info-p
			background-color #fff
			margin-bottom 1rem
			padding 2rem 1.5rem
			.title
				line-height 2.4rem
				font-size 1.5rem
				color #333
				font-weight bold
			.price
				color #FF659B
				font-weight bold
				font-size 1.7rem
				margin-top 1rem
			.num
				border-top 1px solid #e5e5e5
				margin-top 2rem
				display flex
				padding-top 3rem
				padding-bottom 1rem
				position relative
				.tip
					line-height 2.7rem
					font-size 1.2rem
					color #999
				.operate
					display flex
					flex 1
					position absolute
					right 0
					span
						display block
						flex 1
						max-width 2.7rem
						max-height 2.7rem
						min-width 2.7rem
						min-height 2.7rem
						box-sizing border-box
						border 1px solid #e5e5e5
						img
							width 100%
							height 100%
							display block
					.pay_num
						border none
						text-align center
						line-height 2.7rem		
						max-width 4.6rem			
						min-width 4.6rem
		.details
			padding 2rem 1.5rem
			background-color #fff
			margin-bottom 4.4rem
			p
				font-size 1.6rem
				color #333
				font-weight bold
				margin-bottom 1rem
		.btn
			background-color #FF659B
			line-height 4.4rem
			text-align center
			height 4.4rem
			color #fff
			font-size 1.6rem
			position fixed
			bottom 0
			width 100%
			img
				display inline-block
				width 2rem
				height 2rem
				vertical-align middle
				position relative
				top -.1rem
</style>