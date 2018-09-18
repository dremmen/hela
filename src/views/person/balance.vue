<template>
	<div class="balance">
		<div class="balance-top">
			<p class="tip">账户余额：</p>
			<div class="put">
				<p class="price"><span>999.99</span>元</p>
				<p class="btn" @click="router({path: 'putForward'})">提现</p>
			</div>
		</div>			
    <tab
    	class="tab"
    	active-color = "#FF659B"
    	custom-bar-width = "2rem"
    	>
      <tab-item selected @on-item-click="onItemClick(1)">收益记录</tab-item>
      <tab-item @on-item-click="onItemClick(2)">提现记录</tab-item>
    </tab>
    <div v-if="tabIndex === 1" class="profit">
    	<div class="item">
    		<div class="left">
    			<p class="title"><em>王飘雪</em> 购买了（2018第三代新款孕伴机器人语音设备）</p>
    			<p class="time">2016.12.17 10:13:34</p>
    			<p class="price">消费：￥177.77</p>
    		</div>
    		<div class="right">+127.00</div>
    	</div>
    </div>
    <div v-if="tabIndex === 2" class="put-forward">
    	<div class="item">
    		<div class="left">
    			<p class="title">提现(已成功)</p>
    			<p class="time">2016.12.17 10:13:34</p>
    		</div>
    		<div class="right active">+127.00</div>
    	</div>
    </div>
	</div>
</template>

<script type="text/javascript">	
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
	    router (path) {
	      this.$router.push(path)
	    },
	    onItemClick (index) {
	    	this.tabIndex = index
	    }
	  }
	}
</script>

<style lang="stylus" scoped>
	.balance
		width 100vw
		height 100vh
		background-color #fff
		.balance-top
			margin 1.5rem
			margin-top: 0;
			border-top: 1.5rem solid #fff;
			background-color #f4f0ff
			padding 2rem 1.5rem
			.tip
				line-height 1.6rem
				font-size 1.5rem
				color #9999cc
				font-weight 500
			.put
				display flex
				margin-top 1.4rem
				.price
					font-size 1.8rem
					color #36404A
					height: 3.2rem;
					line-height: 3.2rem;
					overflow: hidden;
					flex 1
					span
						color #36404A
						font-weight bold
						font-size 3.6rem
						height: 3.2rem;
						line-height: 3.2rem;
				.btn
					max-width 7rem
					height 3.2rem
					background-color #FF659B
					border-radius 1000px
					flex 1
					text-align center
					line-height 3.2rem
					color #fff
					font-size 1.5rem
		.profit
			.item
				display flex
				margin 0 1.5rem
				border-bottom 1px solid #e5e5e5
				.left
					flex 1
					max-width 70%
					padding-top 1.75rem
					box-sizing border-box
					.title
						white-space nowrap
						overflow hidden
						width 100%
						text-overflow ellipsis
						font-size 1.5rem
						em
							color #FF659B
					.time
						color #999
						font-size 1.2rem
						margin .4rem 0
						line-height 1.5rem
					.price
						line-height 1.5rem
						font-size 1.2rem
						color #333
				.right
					min-width 30%
					max-width 30%
					text-align right
					line-height 9.5rem
					color #FF659B
					font-size 1.5rem
		.put-forward			
			.item
				display flex
				margin 0 1.5rem
				border-bottom 1px solid #e5e5e5				
				.left
					flex 1
					max-width 70%
					box-sizing border-box		
					padding-top 2.65rem
					.title
						font-size 1.5rem
						color #333
						font-weight 500
						line-height 1.9rem					
					.time
						color #999
						font-size 1.2rem
						margin-top .8rem
						line-height 1.5rem
				.right
					min-width 30%
					max-width 30%
					text-align right
					line-height 9.5rem
					color #333
					font-size 1.5rem
				.right.active
					color #FF659B
</style>