<template>
	<div class="activity-center">
		<div class="activity">		
			<div class="item-list" @click="router({path: '/activityDetails'})">
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
</template>

<script>
export default {
  components: {
  },
  data () {
  	return{}
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