<template>
  <div class="hello">
   	<header>
   		<span>NAS<em>|CookBook</em></span>
   		<p>星云菜谱</p>
   		<button class='btn'>创建菜谱</button>
   	</header>
   	<div class="seach">
   		<div class="seachimg">
   		<input type="text" placeholder="老鸭汤" id='search'/><button><a  @click="sea()">搜索菜谱</a></button>
   		</div>
   	</div>
   	<br />
   	<hr />
   		<div class="up">
   			<div class="up_1">
   				<span>今日推荐</span>
   				<img src="../assets/u8.png"/>
   			</div>
   			<div class="up_2">
   				<span>今日推荐</span>
   				<p>原料：排骨400克，香菇200克</p>
   				<p>调味料：淀粉100克，酱油10克，姜10克，葱10克</p>
   			</div>
   		</div>
   		<div class="down">
   			<br />
   			1.干香菇买回来，先泡30分钟，然后去蒂对半切块。
			<br />2.仔排洗干净，锅中水开，倒入仔排，水开后捞去浮沫，2分钟后就可以捞出来待用了。
			<br />3.锅中放少许底油，油热，放姜片爆香，倒入沥开水份的仔排下去大火翻炒几分钟，把仔排的油逼出来。
			<br />4.加料酒，酱油上色，继续翻炒1到2分钟。然后加水没过排骨，放入几个八角和一个桂皮，加盐，加少许糖，滴几点醋。大火烧开后转小火。
			<br />5.小火10分钟后加切好的香菇。继续大火烧开后转小火。
			<b>r</b>6.小火20分钟后，就可以大火收汁了。勾点芡，撒些葱花就可以起锅了。芡粉就是淀粉加点水，一点点就行了，不要勾多了。骨头比较烂也很好吃。
   		</div>
  </div>
</template>

<script>
	export default {
	 	methods:{
	 		sea(){
	 			var search=document.getElementById("search");
	 			location.href="#/cai?name="+search.value
	 		}
	 	}
	}
</script>


