<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="less">
	html {
		/* 假定设计稿 750px的情况下 ，那么 1rem = 100px */
		font-size: calc(100vw/7.5);
	}
	
	body {
		margin: 0;
		background-color: #f6f6f6;
		font-size: 0.28rem;
		font-family: -apple-system, Helvetica, sans-serif;
		line-height: 1.5;
		color: #333;
	}
	
	a {
		text-decoration: none;
		color: #333;
	}
	
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	ul {
		margin: 0;
		padding: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.flex {
		display: flex;
	}
	
	.flex-item {
		flex: 1;
	}
</style>