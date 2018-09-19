<template>
  <div class="audio-list">
  	<!-- 音频列表 -->
    <div class="audio">
	    <aplayer 
			  :music="musics"
			/>
    </div>
    <div class="tab">    		
	    <tab
	    	active-color = "#333333"
	    	default-color = "#ccc"
	    	custom-bar-width = "0"
	    	>
	      <tab-item selected @on-item-click="onItemClick(1)">备孕期</tab-item>
	      <tab-item @on-item-click="onItemClick(2)">孕早期</tab-item>
	      <tab-item @on-item-click="onItemClick(3)">孕中期</tab-item>
	      <tab-item @on-item-click="onItemClick(4)">孕晚期</tab-item>
	      <tab-item @on-item-click="onItemClick(5)">月子期</tab-item>
	      <tab-item @on-item-click="onItemClick(6)">育儿期</tab-item>
	    </tab>
	    <div class="recommend">	    	
	    	<div class="item-list" v-for="(item, index) in audio_list" :key="index" @click="audio_play(index)">
	    		<span class="num">{{item.id}}</span>
	    		<p class="title" :class="(index === audio_list_id) ? 'active' : ''">{{item.con}}</p>
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
			audio_list_id: 0,
    }
  },
  created () {
  	this.musics.title = this.audio_list[0].con
  },
  methods: {    
  	onItemClick (index) {
  		this.tabIndex = index
  		this.audio_list_id = 0
  		switch(index) {
  			case 1 :
  				this.audio_list = [
						{
							id: 1,
							con: '备孕阶段过渡辛辣对身体有什么影响？'
						},				
						{
							id: 2,
							con: '备孕阶治不好点有什么影响？'
						}
					]
  				this.musics.title = this.audio_list[0].con
  				break
  			case 2 :
  				this.audio_list = [
						{
							id: 1,
							con: '孕早期阶治不好点有什么影响体有什么影响？'
						},				
						{
							id: 2,
							con: '孕早期阶治你会打牌吗影响？'
						}
					]
  				this.musics.title = this.audio_list[0].con
  				break
  			case 3 :
  				this.audio_list = [
						{
							id: 1,
							con: '孕中期阶治不好点有什么影响体有什么影响？'
						},				
						{
							id: 2,
							con: '孕中期阶治你会打牌吗影响？'
						}
					]
  				this.musics.title = this.audio_list[0].con
  				break
  			case 4 :
  				this.audio_list = []
  				this.musics.title = this.audio_list[0].con
  				break
  			case 5 :
  				this.musics.title = this.audio_list[0].con
  				break
  			case 6 :
  				this.musics.title = this.audio_list[0].con
  				break
  		}
  	},
    router (path) {
      this.$router.push(path)
    },
    audio_play (index) {
    	this.audio_list_id = index
  		this.musics.title =	this.audio_list[index].con
    }
  }
}
</script>
<style lang="stylus">
	.audio-list
		.audio
			padding 2rem 1.5rem
			background-color #fff
			border-bottom 1px solid #e5e5e5
		.tab
			.vux-tab-item
				font-size 1.6rem
				font-weight 500
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
					width 100%
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
				.active
					color #FF659B
</style>