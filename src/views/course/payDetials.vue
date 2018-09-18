<template>
  <div class="pay-details">
  	<!-- 饮食介绍 -->
  	<img class="info-img" src="@/assets/kechenxlangqin2.png">
  	<div class="info-p">
  		<p class="title">备孕阶段过渡辛辣对身体有什么影响？</p>
  		<p class="price">￥12.5</p>  		
	    <div class="audio">
		    <aplayer 
				  :music="musics"
				/>
	    </div>
	    <div class="share">
	    	<span>
	    		<img src="@/assets/kechenxiangqing2.png"> 分享给朋友
	    	</span>
	    	<span>
	    		<img src="@/assets/kechenxiangqing3.png"> 我的二维码
	    	</span>
	    </div>
  	</div>
  	<div class="wx-number">
  		<p class="info">“孕伴”配备了目前国内最先进的智能语音识别系统和云端大佬，结合中外最大最顶级的人工智能开发专家的智慧结晶与国内数十名妇科专家的权威意见。</p>
  		<div class="img">
  			<img src="@/assets/kechenxlangqin1.png">
  			<p>微信公众号</p>
  		</div>
  	</div>
  	<div class="course-info">
  		<p class="title">课程介绍</p>
  		<p class="con">“孕伴”配备了目前国内最先进的智能语音识别系统和云端大佬，结合中外最大最顶级的人工智能开发专家的智慧结晶与国内数十名妇科专家的权威意见。</p>
  	</div>
  	<div class="btn">
  		<div class="price">
  			<span class="num">￥ <em>12.5</em></span>
  			<span class="tip">(支付后即可播放)</span>
  		</div>
  		<div class="pay">
  			<img src="@/assets/kechenxiangqing5.png">
  			微信支付
  		</div>
  	</div>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import { Tab, TabItem } from 'vux'
export default {
  components: {
  	Aplayer,
  	Tab, 
  	TabItem
  },
  data () {
    return {
    	musics: {
    		title: 'secret base~君がくれたもの~',
		    artist: ' ',
		    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
		    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
    	},
			tabIndex: 1,
			audio_list: [
				{
					id: 1,
					con: '备孕阶段过渡辛辣对身体有什么影响？'
				},				
				{
					id: 2,
					con: '备孕阶治不好点有什么影响？'
				}
			],
			all_audio_list: [
				{
					id: 1,
					con: '备孕阶治不好点有什么影响体有什么影响？'
				},				
				{
					id: 2,
					con: '备孕阶治你会打牌吗影响？'
				}
			],
			re_audio_id: 0,
			all_audio_id: 0,
    }
  },
  created () {
  	this.musics.title = this.audio_list[0].con
  },
  methods: {    
  	onItemClick (index) {
  		this.tabIndex = index
  		this.musics.title = (index === 1)? this.audio_list[0].con : this.all_audio_list[0].con
  	},
    router (path) {
      this.$router.push(path)
    },
    audio_play (index) {
    	this.re_audio_id = index
  		this.musics.title =	this.audio_list[index].con
    },
    all_audio_play (index) {    	
    	this.all_audio_id = index
  		this.musics.title =	this.all_audio_list[index].con
    }
  }
}
</script>
<style lang="stylus" scoped>
	.pay-details
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		.info-p
			background-color #fff
			padding 1.5rem
			margin-bottom 1rem		
			.title
				line-height 2.4rem
				font-size 1.7rem
				color #333
				font-weight bold
			.price
				color #FF659B
				font-weight bold
				font-size 1.7rem
				margin-top 1.5rem			
	    .audio
				padding 2rem 0
				background-color #fff
				border-bottom 1px solid #e5e5e5
			.share
				display flex
				padding-top 2rem
				span
					flex 1
					display block
					font-size 1.3rem
					color #333
					img
						width 2.4rem
						display inline-block
						vertical-align middle
						position relative
						top -.2rem
						margin-right 1rem
		.wx-number
			padding 3rem 1.5rem
			background-color #fff
			display flex
			margin-bottom 1rem
			.info
				font-size 1.3rem
				line-height 2.4rem
				color #666
				width 22.5rem
				margin-right 2.5rem
			.img
				width 9rem
				height 9rem
				text-align center
				color #999
				font-size 1.1rem
				img					
					border: 1px solid #e5e5e5
					padding .1rem
				p
					margin-top .5rem
		.course-info
			padding 3rem 0
			background-color #fff
			.con
				font-size 1.3rem
				color #666
				line-height 2.4rem
				padding 1.5rem
				padding-bottom 0
			.title
				font-size 1.6rem
				color #333
				height 1.5rem
				line-height 1.5rem
				padding-left 1.5rem
				position relative
				font-weight 500
				&::after
					content ''
					position absolute
					width .2rem
					height 100%
					background-color #FF659B
					left 0px
					top .1rem
		.btn
			width 100%
			height 5rem
			display flex
			margin-top 3rem
			.price
				width 58%
				background-color #FF659B
				color #fff
				.tip
					line-height 5rem
				.num
					color #fff
					font-size 1.6rem
					height 1.8rem
					line-height 1.8rem
					position relative
					top .4rem
					margin 0 1.5rem
					em
						font-size 2.4rem
						font-weight bold
			.pay
				background-color #9F7FFF
				width 42%
				font-size 1.8rem
				line-height 5rem
				font-weight blod
				color #fff
				text-align center
				img
					height 2rem
					width auto
					display inline-block
					vertical-align middle
					position relative
					top -.2rem
</style>