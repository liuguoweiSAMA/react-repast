<template>
	<div>
		<div class="twoheader">
			<a href="#/">返回</a>
			<div class="tworight">
				<span>NAS<em>|CookBook</em></span>
	   			<p>星云菜谱</p>
			</div>
		</div>
		<div>
			<span style="color: #660000;">{{this.data.name}}</span>
			<div>
				<div class="all">
					<div class="left"><img :src="this.data.img"/></div>
					<div>
						<br />
						原料:{{this.data.raw}}
						<br /><br />
						配料 {{this.data.season}}
					</div>
					
				</div>
				<div class="show">
					<p>{{this.data.content}}</p>
					<p>{{this.data.content1}}</p>
					<p>{{this.data.content2}}</p>
					<p>{{this.data.content3}}</p>
					<p>{{this.data.content4}}</p>
					<p>{{this.data.content5}}</p>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				data:""
			}
			
		},
		 created(){
		 	var name=this.$route.query.name
			axios.get("/static/now.json").then((res)=>{
				for(var i=0;i<res.data.length;i++){
					console.log(res.data.length)
					if(name==res.data[i].name){
						this.data=res.data[i]
					}else if(i+1==res.data.length && this.data==""){
						location.href="#/to"
					}
				}
				
				
			})
			
		}
		
	}
</script>

<style>
</style>