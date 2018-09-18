<template>
  <div class="home">
  	<!-- 搜索页 -->
  	<div class="search-top">
  		<input class="search-input" type="text" name="" placeholder="输入您想要搜索的内容">
  		<span class="search-span">取消</span>
  	</div>
  	<div class="tab">  		
	    <tab
	    	active-color = "#FF659B"
	    	custom-bar-width = "2rem"
	    	>
	      <tab-item selected @on-item-click="onItemClick(1)">付费课程</tab-item>
	      <tab-item @on-item-click="onItemClick(2)">免费音频</tab-item>
	      <tab-item @on-item-click="onItemClick(3)">活动中心</tab-item>
	    </tab>
	    <div v-if="tabIndex === 1" class="course">	    	
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
	    			 	<span class="price">￥12.5</span>
	    			 </p>
	    		</div>
	    	</div>
	    </div>
	    <div v-if="tabIndex === 2" class="audio">
	    	<div class="item-list">
	    		<p>备孕阶段过渡辛辣对身体有什么影响？</p>
	    		<div class="tip">
	    			<span>饮食 |</span>
	    			<span> 备孕期</span>
	    		</div>
	    	</div>
	    </div>
	    <div v-if="tabIndex === 3" class="activity">
	    	<div class="item-list">
	    		<div class="img">
	    			<img src="@/assets/home-img1.png">
	    		</div>
	    		<div class="con">
	    			 <p class="tip">孕期的饮食营养，不仅影响到胎儿的正常发育，也关系到出生后婴幼儿…</p>
	    			 <p class="video-num">2018.6.28</p>
	    		</div>
	    	</div>
	    </div>
  	</div>
  </div>
</template>

<script>

import { Tab, TabItem } from 'vux'

export default {
  components: {
    Tab,
    TabItem
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
	.home
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		.search-top
			position: relative
			margin-bottom 1rem
			.search-input
				line-height 4.4rem
				height 4.4rem
				color #999
				background-color #fff
				width 100%
				padding-left 1.5rem
				box-sizing border-box
				outline none
			.search-span
				position absolute
				right 1.5rem
				top 1.4rem
		.course		
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
						.price
							color #FF659B
							line-height 1.4rem
							font-size 1.5rem
							font-weight bold
							min-width 50%
							text-align right
		.audio
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
		.activity
			background #fff
			.item-list
				display flex
				padding 2rem 0
				margin 0 1.5rem
				border-bottom 1px solid #e6e6e6
				.img
					width 12rem
					min-width 12rem
					max-width 12rem
					height 9rem
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
						font-size: 1.5rem;
						line-height: 2.4rem;
						color: #333;
						font-weight: bold;
						height: 4.8rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					.video-num
						line-height 1.4rem
						font-size 1.2rem
						color #999
						position absolute
						bottom .3rem
</style>