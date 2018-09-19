<template>
  <div class="home">
  	<!-- 首页 -->
  	<div class="search-top">
  		<router-link to="./search"><input class="search-input" type="text" name="" placeholder="输入您想要搜索的内容"></router-link>
  		<img class="search-img" src="@/assets/yunbangkechen1.png">
  	</div>
  	<swiper :options="bannerOption" v-if="listImg.length>0">
      <swiper-slide class="swiper-demo-img" v-for="(item, index) in listImg" :key="index"><img :src="item.img"></swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
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
    		<div class="nav-item" @click="router({path: '/payCourse'})">
    			<img src="@/assets/yunbangkechen11.png">
    			<span class="soid">付费</span>
    			<p>付费点播</p>
    		</div>
    		<div class="nav-item" @click="router({path: '/more'})">
    			<img src="@/assets/yunbangkechen12.png">
    			<p>更多</p>
    		</div>
    	</div>
    </div>
    <div class="section">
    	<h2>精彩专区<img class="h2-img" src="@/assets/yunbangkechen3.png"></h2>
    	<p class="title">每周更新，精选热门优质课程</p>
    	<div class="item-list border-block" @click="router({path: 'dietInfo'})">
    		<div class="img">
    			<img src="@/assets/home-img1.png">
    			<span>饮食</span>
    		</div>
    		<div class="con">
    			 <p class="tip">孕期的饮食营养，不仅影响到胎儿的正常发育，也关系到出生后婴幼儿…</p>
    			 <p class="video-num">共8节</p>
    		</div>
    	</div>
    	<div class="item-list">
    		<div class="img">
    			<img src="@/assets/home-img1.png">
    			<span>饮食</span>
    		</div>
    		<div class="con">
    			 <p class="tip">孕期的饮食营养，不仅影响到胎儿的正常发育，也关系到出生后婴幼儿…</p>
    			 <p class="video-num">共8节</p>
    		</div>
    	</div>
    </div>
    <div class="section recommed">
    	<h2>热门推荐<img class="h2-img" src="@/assets/yunbangkechen3.png"></h2>
    	<p class="title">每周更新，精选热门优质课程</p>
    	<div class="item-list border-block" @click="router({path: 'dietInfo'})">
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
    <div class="section class">
    	<h2>分类点播<img class="h2-img" src="@/assets/yunbangkechen3.png"></h2>
    	<p class="title">各类点播课程教你呵护胎儿成长</p>
    	<div class="item-list" @click="router({path: 'dietInfo'})">
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
    	<div class="item-list">
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

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
		swiper,
		swiperSlide
  },
  data () {
    return {
    	bannerOption: {
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: true,
				},
				loop: true,
				observer:true,
				observeParents:true,
      },
    	listImg: [{
			  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
			}, {
			  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
			}, {
			  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
			}]
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
	.home
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		padding-bottom 5.9rem
		.search-top
			position: relative
			.search-input
				line-height 4.4rem
				height 4.4rem
				color #999
				background-color #fff
				width 100%
				padding-left 1.5rem
				box-sizing border-box
				outline none
				font-size 1.6rem
			.search-img
				width 1.6rem
				position absolute
				right 1.5rem
				top 1.4rem
		.swiper-demo-img
			height 17.8rem
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
		.section
			padding-top 2.6rem
			margin-top 1rem
			background-color #fff
			h2
				color #333
				line-height 1.7rem
				font-size 1.7rem
				height 1.7rem
				font-weight bold
				text-align center
				margin-bottom 1.5rem
				.h2-img
					width 1rem
					display inline-block
					vertical-align middle
					position: relative
					top -.2rem
					margin-left .5rem
			.title
				text-align center
			.border-block
				border-bottom 1px solid #e5e5e5
			.item-list
				display flex
				padding 2rem 0
				margin 0 1.5rem
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
					span
						background-color rgba(0,0,0,.5)
						position absolute
						width 100%
						height 100%
						top 0px
						left 0px
						color #fff
						text-align center
						line-height 8rem
						font-size 1.5rem
				.con
					position relative
					.tip
						font-size 1.3rem
						line-height 2.4rem
						color #666
					.video-num
						line-height 1.4rem
						font-size 1.2rem
						color #999
						position absolute
						bottom .3rem
		.recommed
			.tip
				color #333
				font-weight bold
			.video-num
				display flex
				width 100%
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
		.class
			padding-bottom 3rem
			.item-list
				padding 0
				margin-top 3rem
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