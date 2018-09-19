<template>
	<div class="payment">
		<div class="address">
			<x-input title="收货人" v-mtfocus v-model="name" text-align='right' placeholder="请填写收货人姓名"></x-input>
			<x-input title="手机号码" v-mtfocus v-model="phone" text-align='right' placeholder="请填写收货人手机号码"></x-input>
			<x-address title="地址" v-model="province" :list="ChinaAddressV4Data" placeholder="请选择"></x-address>
			<x-input class="border-none" v-mtfocus title="详细地址" v-model="address" text-align='right' placeholder="请输入街道，门牌等详细地址信息"></x-input>
		</div>
		<div class="goods">
			<div class="img">
				<img src="@/assets/dingdan.png">
			</div>
			<div class="title">
				<p class="tip">2018第三代新款孕伴机器人语音设备</p>
				<p class="price">¥368</p>
			</div>
			<div class="num">x1</div>
		</div>
		<div class="goods-all" @click="show = !show">
			<span class="all-title">代金券</span>
			<span class="all-price">已减 <em>30元</em> <em>2</em>张可用 <img src="@/assets/querengdingdan1.png"></span>
		</div>
		<div class="goods-all border-none">
			<span class="all-title">商品合计</span>
			<span class="all-price">￥87.70</span>
		</div>
		<div class="btn">
			<span class="btn-price">应付： ￥367</span>
			<span class="btn-wx" @click="router({path: 'paysuccess'})">
				<img src="@/assets/kechenxiangqing5.png">
  			微信支付
			</span>
		</div>

    <div class="payment-transfer" v-transfer-dom>
      <popup v-model="show">
      	<div class="daijinquan">
      		<span class="cancer">取消</span>
      		<p>代金券</p>
      		<span class="confirm">确认</span>
      	</div>      	
				<div class="coupon-none">
					即刻参与活动赢取代金券前往 <span @click="router({path: 'activityCenter'})">活动中心 ></span>
				</div>      	
				<div class="coupon-blocks">
					<div class="coupon-block">
						<span class="price">￥<em>30</em></span>
						<div class="con">
							<p class="con-price">￥30 代金券</p>
							<p class="time">有效期至2018年12月31日</p>
						</div>
						<span class="img" @click="img_block = !img_block" v-if="!img_block"><img src="@/assets/coupon-none.png"></span>
						<span class="img" @click="img_block = !img_block" v-else><img src="@/assets/coupon-block.png"></span>
					</div>
				</div>
      </popup>
    </div>
	</div>
</template>

<script>
import { XInput, XAddress, ChinaAddressV4Data, TransferDom, Popup  } from 'vux'
export default {
  directives: {
    TransferDom,
    'mtfocus' (el, binding, vnode) {
      let mtinput = el.querySelector('input')
      mtinput.onfocus = function () {
				let btn = document.querySelector('.btn')
      	btn.className = "btn position_focus"
      }
      mtinput.onblur = function () {
				let btn = document.querySelector('.btn')
      	btn.className = "btn"
      }
    }
  },
  components: {
  	XInput,
  	XAddress,
  	ChinaAddressV4Data,
  	Popup
  },
  data () {
    return {
    	name: '',
    	phone: '',
    	address: '',
    	province: [],
    	ChinaAddressV4Data: ChinaAddressV4Data,
    	show: false,
    	img_block: false,
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
<style lang="stylus">
.payment
	background-color #f2f2f2
	min-width 100vw
	min-height 100vh
	.address
		margin-bottom 1rem
		background-color #fff
		.weui-cell
			padding 0
			span
				font-size 1.5rem
				color #666
			.vux-cell-placeholder
				color #ccc
		.border-none
			border none !important
		.vux-x-input,.vux-cell-box
			padding 0
			line-height 5rem
			height 5rem
			overflow hidden
			margin 0 1.5rem
			border-bottom 1px solid #e5e5e5
			box-sizing border-box
			&::before
				display none
			label
				font-size 1.5rem
				color #666
			input
				font-size 1.5rem
				color #666
				line-height 5rem
				&::-webkit-input-placeholder
					color #ccc
	.goods
		display flex
		background-color #fff
		margin-bottom 1rem
		padding 2rem 1.5rem
		.img
			width 10rem
			height 7.5rem
			margin-right 1.4rem
		.title
			position relative
			max-width 17.5rem
			min-width 17.5rem
			.tip
				font-size 1.5rem
				color #333
				font-weight 500
			.price
				color #FF659B
				font-size 1.3rem
				line-height 1.6rem
				position absolute
				bottom 0px
		.num
			flex 1
			text-align right
			line-height 2.1rem
			font-size 1.5rem
			font-weight 500
	.goods-all
		background-color #fff
		line-height 5rem
		height 5rem
		display flex
		font-size 1.5rem
		padding 0 1.5rem
		border-bottom 1px solid #e5e5e5
		.all-title
			flex 1
			text-align left
			color #666
		.all-price
			flex 1
			text-align right
			color #333
			font-weight 500
			em
				color #FF659B
			img				
				display inline-block
				height 1.3rem
				width auto
				vertical-align middle
				position relative
				top -.1rem
	.border-none
		border none
	.btn
		height 5rem
		line-height 5rem
		position absolute
		bottom 0
		width 100%
		display flex
		.btn-price
			width 64%
			background-color #FF659B
			color #fff
			font-size 1.6rem
			line-height 5rem
			padding-left 1.5rem
			box-sizing border-box
		.btn-wx
			width 36%
			background-color #9F7FFF
			color #fff
			text-align center
			img
				height 2rem
				width auto
				display inline-block
				vertical-align middle
				position relative
				top -.2rem				
	.position_focus.btn
		position absolute
		margin-top 2rem
		bottom auto
</style>