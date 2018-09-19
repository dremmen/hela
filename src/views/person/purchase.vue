<template>
	<div class="purchase">
		<x-input class="num" title="数量" v-model="num" text-align='left' placeholder="请输入数量"></x-input>
		<div class="address">
			<x-input title="收货人" v-model="name" text-align='left' placeholder="请输入收货人姓名"></x-input>
			<x-input title="手机号码" v-model="phone" text-align='left' placeholder="请输入收货人手机号码"></x-input>
			<x-address title="地址" v-model="province" :list="ChinaAddressV4Data" placeholder="请选择地址"></x-address>
			<x-input class="border-none" title="详细地址" v-model="address" text-align='left' placeholder="请输入街道，门牌等详细地址信息"></x-input>
		</div>
		<div class="btn">提交</div>
	</div>
</template>

<script>
import { XInput, XAddress, ChinaAddressV4Data  } from 'vux'
export default {
  components: {
  	XInput,
  	XAddress,
  	ChinaAddressV4Data
  },
  data () {
    return {
    	num: '',
    	name: '',
    	phone: '',
    	address: '',
    	province: [],
    	ChinaAddressV4Data: ChinaAddressV4Data
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
<style lang="stylus">
.purchase
	background-color #f2f2f2
	min-width 100vw
	min-height 100vh
	.num
		margin-bottom 1rem
		background-color #fff
		line-height 5rem
		padding 0 1.5rem
		.weui-label
			font-size 1.5rem
			color #666
			width 10rem !important
		input
			font-size 1.5rem
			color #666
			line-height 5rem
			&::-webkit-input-placeholder
				color #999	
	.address
		margin-bottom 1rem
		background-color #fff
		.weui-cell
			padding 0
			.vux-popup-picker-select
				text-align left !important
			span
				font-size 1.5rem
				color #666
			.vux-cell-placeholder
				color #999
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
			.weui-label
				font-size 1.5rem
				color #666
				width 10rem !important
			input
				font-size 1.5rem
				color #666
				line-height 5rem
				&::-webkit-input-placeholder
					color #999	
	.btn
		width 92%
		position relative
		left 4%
		margin-top 2rem
		background-color #ff659b
		border-radius .4rem
		height 5rem
		line-height 5rem
		font-size 1.7rem
		color #fff
		text-align center
</style>