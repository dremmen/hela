<template>
	<div class="bind-phone">
		<p class="title">请绑定手机号</p>
		<div class="div-input">
			<label>手机号码</label>
			<input type="text" name="phoen" placeholder="请输入新的手机号码">
		</div>
		<div class="div-input border-none">
			<label>短信验证码</label>
			<input type="text" name="phoen" placeholder="请输入验证码">
			<span>短信验证</span>
		</div>
		<span class="submit-btn">提交</span>
	</div>
</template>

<script type="text/javascript"></script>

<style lang="stylus" scoped>
	.bind-phone
		background-color #f2f2f2
		height 100vh
		width 100vw
		.title
			line-height 5rem
			color #999
			font-size 1.3rem
			padding-left 1.5rem
		.div-input
			display flex
			line-height 5rem
			height 5rem
			overflow hidden
			padding 0 1.5rem
			background-color #fff
			border-bottom 1px solid #e5e5e5
			position relative
			label
				width 6rem
			input
				color #333
				background-color #fff
				height 5rem
				line-height 5rem
				padding-left 1.5rem
				outline none
				&::-webkit-input-placeholder
					color #999
			span
				width 9.2rem
				height 3.3rem
				line-height 3.3rem
				text-align center
				background-color #ff659b
				border-radius .3rem
				position absolute
				right 1.5rem
				color #F5F5FA
				font-size 1.5rem
				top .85rem
		.border-none
			border none
		.submit-btn
			line-height 5rem
			background-color #FF659B
			border-radius .3rem
			width 92%
			position relative
			left 4%
			display block
			text-align center
			font-size 1.6rem
			font-weight 500
			color #F5F5FA
			margin-top 1.5rem
</style>