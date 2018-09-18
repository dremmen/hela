<template>
  <div class="activity-details">
  	<!-- 饮食介绍 -->
  	<img class="info-img" src="@/assets/kechenxlangqin2.png">
  	<div class="info-p">
  		<p class="title">备孕阶段过渡辛辣对身体有什么影响？</p>
  		<p class="time">2018.6.28</p>  
	    <div class="share">
	    	<span @click="mask_show = !mask_show, code = false, fenxiang = true">
	    		<img src="@/assets/kechenxiangqing2.png"> 分享给朋友
	    	</span>
	    	<span @click="mask_show = !mask_show, code = true, fenxiang = false">
	    		<img src="@/assets/kechenxiangqing3.png"> 我的二维码
	    	</span>
	    </div>
	    <div class="edit-article">
	    	<p>对于这个时期的妈妈肚子疼，一般大致有三种原因，最常见的原因是因为胎儿发育子宫增大刺激骨骼而引起的，那么，其它的原因是什么呢？怀孕一个月肚子疼怎么办呢？下面我们来看看正文内容详解！</p>
	    	<p>怀孕后时候你会感觉肚子一天天大起来，然后皮肤就有一种紧绷的感觉。如果你很爱运动，那么在远足后或打乒乓球后会感到腹部隐隐的牵拉痛，跟平常的胃痛差不多。有些准妈妈因子宫增大不断刺激肋骨下缘，可引起肋骨钝痛或因耻骨联合松弛分离而疼痛，甚至导致活动受限。不过这些情况都属于怀孕后正常的生理反应，不需要特殊治疗，可通过左侧卧位睡来缓解疼痛。准妈妈不用担心，多卧床休息就可缓解。</p>				
	    </div>
  	</div>
  	<div class="mask" :class="(mask_show) ? 'active' : ''" @click="mask_show = !mask_show, fenxiang = !fenxiang">
  		<img v-if="fenxiang" class="fenxiang-img" src="@/assets/fenxiang.png">
  		<div v-if="code" class="code">
  			<p class="title">长按图片分享给好友，好友可通过二维码加入我们</p>
  			<div class="share-img">
  				<img src="@/assets/kechenxlangqin3.png">
  				<div class="person">
  					<img src="@/assets/gerenzhongxin1.jpg">
  					<div class="con">
  						<h3>王迎春</h3>
  						<p>我在嚇啦，快加入我们获取更多福利与资讯。</p>
  					</div>
  				</div>
  				<img src="@/assets/kechenxlangqin1.png" class="er-code">
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
    	mask_show: false,
    	fenxiang: true,
    	code: true
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
	.activity-details
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		.info-p
			background-color #fff
			margin-bottom 1rem		
			padding-top 2rem
			.title
				line-height 2.4rem
				font-size 1.5rem
				color #333
				font-weight bold
				padding 0 1.5rem
			.time
				color #999
				font-size 1.3rem
				margin-top 1.5rem	
				padding 0 1.5rem
			.share
				display flex
				border-top 1px solid #e5e5e5
				border-bottom 1px solid #e5e5e5
				padding 1rem 1.5rem
				margin-top 2rem
				span
					flex 1
					display block
					font-size 1.3rem
					color #333
					img
						width 2.4rem
						display inline-block
						vertical-align middle
						margin-right 1rem
			.edit-article
				padding 0 1.5rem
				padding-top 3rem
				p
					margin-bottom 3rem
					font-size 1.3rem
					color #666
					line-height 2.4rem
		.mask.active
			display block
		.mask
			position fixed
			top 0
			left 0
			width 100%
			background-color rgba(0,0,0,.6)
			height 100vh
			overflow hidden
			display none
	    img.fenxiang-img
				width 73%
				float right
				margin-top 1rem
				margin-right 1.8rem
			p.title
				text-align center
				line-height 4rem
				color #fff
				font-size 1.3rem
			.share-img
				margin 0 1.5rem
				background-color #fff
				position relative
				.er-code
					position absolute
					right 1.5rem
					background-color #fff
					padding .5rem
					width 7.4rem
					height 7.4rem
					border-radius .4rem
					bottom 7rem
				.person
					display flex
					padding 2rem 1.5rem
					img
						max-width 7rem
						max-height 7rem
						margin-right 1.5rem
					.con
						position relative
						h3
							font-size 1.7rem
							color #FF659B
							line-height 1.6rem
						p
							font-size 1.2rem
							color #333
							width 15rem
							position absolute
							bottom .5rem
</style>