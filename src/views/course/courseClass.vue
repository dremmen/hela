<template>
  <div class="course-class">
  	<!-- 课程分类 -->
  	<div class="nav-tap" :class="(show) ? 'course-active' : ''">
  		<span class="span-tap" :class="(tabIndex === 1) ? 'active' : ''" @click="tranShow(1)">综合排序 <img v-if="tabIndex === 1" src="@/assets/up-arrow.png"><img v-else src="@/assets/down-arrow.png"></span>
  		<span class="span-tap" :class="(tabIndex === 2) ? 'active' : ''" @click="tranShow(2)">适合人群 <img v-if="tabIndex === 2" src="@/assets/up-arrow.png"><img v-else src="@/assets/down-arrow.png"></span>
  		<span class="span-tap" :class="(tabIndex === 3) ? 'active' : ''" @click="tranShow(3)">年龄范围 <img v-if="tabIndex === 3" src="@/assets/up-arrow.png"><img v-else src="@/assets/down-arrow.png"></span>
  		<span class="span-tap" :class="(tabIndex === 4) ? 'active' : ''" @click="tranShow(4)">孕期阶段 <img v-if="tabIndex === 4" src="@/assets/up-arrow.png"><img v-else src="@/assets/down-arrow.png"></span>
  	</div>
  	<div class="course-item">
  		<div class="item-list" @click="router({path: '/payDetials'})">
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
    <div class="course-class-transfer" v-transfer-dom>
      <popup v-model="show" @on-hide="close">
        <div class="popup0">
          <p @click="show=!show">综合排序</p>
          <p @click="show=!show">价格最低</p>
          <p @click="show=!show">最多点播</p>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { Group, Popup, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
  	Group,
  	Popup
  },
  data () {
    return {
    	show: false,
    	tabIndex: 0
    }
  },
  created () {

  },
  methods: {
    router (path) {
      this.$router.push(path)
    },
    tranShow (index) {
    	this.tabIndex = index
    	this.show = !this.show
    },
    close () {
    	this.tabIndex = 0
    }
  }
}
</script>
<style lang="stylus" scoped>
	.course-class
		.course-active			
			position fixed
			top 0
			width 100%
			background-color #fff
			z-index 9999
		.nav-tap
			display flex
			padding 1.5rem 0
			border-bottom 1px solid #e5e5e5
			span.span-tap
				flex 1
				text-align center
				font-size 1.3rem
				color #333
				position relative
				img
					display inline-block
					height .4rem
					width auto
					vertical-align middle
			span.active
				color #FF659B
		.course-item
			.item-list
				display flex
				padding 2rem 0
				margin 0 1.5rem
				position relative
				border-bottom 1px solid #e6e6e6
				.img
					width 12rem
					min-width 12rem
					max-width 12rem
					height 8rem
					border-radius .4rem
					overflow hidden
					margin-right 1.5rem
					img
						width 100%
						height 100%
				.con
					position relative
					.tip
						font-weight bold
						font-size: 1.3rem;
						line-height: 2.4rem;
						color: #666;
					.video-num
						display flex
						width 100%
						line-height: 1.4rem;
						font-size: 1.2rem;
						color: #999;
						position: absolute;
						bottom: 0.3rem;
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
</style>