<template>
  <div class="diet-info">
  	<!-- 饮食介绍 -->
  	<img class="info-img" src="@/assets/home-img1.png">
  	<div class="info-p">孕期的饮食营养，不仅影响到胎儿的正常发育，也关系到出生后婴幼儿的体质和智力。因此，科学地调配妊娠各时期的饮食营养，对优孕、优生有着十分重要的意义。孕期的饮食应根据其特殊的营养特点进行安排。</div>  	
    <div class="nav">
    	<div class="flex-nav border">
    		<div class="nav-item" @click="router({path: 'audioList'})">
    			<img src="@/assets/yinshi2.png">
    			<p>备孕期</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yinshi3.png">
    			<p>孕早期</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yinshi4.png">
    			<p>孕中期</p>
    		</div>
    	</div>
    	<div class="flex-nav">
    		<div class="nav-item">
    			<img src="@/assets/yinshi5.png">
    			<p>孕晚期</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yinshi6.png">
    			<p>月子期</p>
    		</div>
    		<div class="nav-item">
    			<img src="@/assets/yinshi7.png">
    			<p>育儿期</p>
    		</div>
    	</div>
    </div>
    <div class="audio">
	    <aplayer 
			  :music="musics"
			/>
    </div>
    <div class="tab">    		
	    <tab
	    	active-color = "#FF659B"
	    	custom-bar-width = "2rem"
	    	>
	      <tab-item selected @on-item-click="onItemClick(1)">热门推荐</tab-item>
	      <tab-item @on-item-click="onItemClick(2)">全部音频</tab-item>
	    </tab>
	    <div v-if="tabIndex === 1" class="recommend">	    	
	    	<div class="item-list" v-for="(item, index) in audio_list" :key="index" @click="audio_play(index)">
	    		<span class="num">{{item.id}}</span>
	    		<p class="title" :class="(index === re_audio_id) ? 'active' : ''">{{item.con}}</p>
	    	</div>
	    </div>
	    <div v-if="tabIndex === 2" class="recommend">	    	
	    	<div class="item-list" v-for="(item, index) in all_audio_list" :key="index" @click="all_audio_play(index)">
	    		<span class="num">{{item.id}}</span>
	    		<p class="title" :class="(index === all_audio_id) ? 'active' : ''">{{item.con}}</p>
	    	</div>
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
	.diet-info
		background-color #f2f2f2
		min-width 100vw
		min-height 100vh
		.info-p
			line-height 2.4rem
			font-size 1.3rem
			color #999
			background-color #fff
			padding 1.5rem
			margin-bottom 1rem		
		.nav
			background-color #fff
			margin-bottom 1rem
			.border
					border-bottom 1px solid #e6e6e6
			.flex-nav
				display flex
				.nav-item
					text-align center
					color #666
					font-size 1.2rem
					flex 1
					position relative
					padding 2rem 0
					img
						width 6rem
						height 6rem
						left 50%
						margin-left -3rem
						position relative
					p
						background-color rgba(0,0,0,.15)
						position absolute
						width 6rem
						height 6rem
						line-height 6rem
						text-align center
						font-size 1.3rem
						color #fff
						font-weight 500
						top 2rem
						left 50%
						margin-left -3rem
						border-radius 50%						
    .audio
			padding 2rem 1.5rem
			background-color #fff
			border-bottom 1px solid #e5e5e5
		.recommend
			padding 0 1.5rem
			background-color #fff
			.item-list
				display flex
				padding-top 2rem
				.num
					font-size 1.6rem
					color #fff
					background-color #FF659B
					border-radius .4rem
					width 2.7rem
					height 2.7rem
					text-align center
					line-height 2.7rem
					max-width 2.7rem
					margin-right 2rem
				.title
					flex 1
					font-size 1.5rem
					font-weight bold
					line-height 2.7rem
					border-bottom 1px solid #e5e5e5
					padding-bottom 2rem
				.active
					color #FF659B
</style>