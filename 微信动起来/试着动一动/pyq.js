var zan = document.getElementById("zan");
var dianzanrenming=document.getElementById("dianzanrenming");
var count=1;
var str = dianzanrenming.innerHTML;
var xingxing=document.getElementById("xingxing")
var task
zan.onclick=function(){
	
	if (count%2==1){	
//		xingxing.style.display="block";
//		task = setInterval("loadImg()", 1000);
		dianzanrenming.innerHTML+="、Simple ";
		zan.innerHTML="no"
	}
	if(count%2==0){
		dianzanrenming.innerHTML=str;	
		zan.innerHTML="❤"
	}
	count ++;
}

function loadImg(){
	xingxing.style.display="none"
	window.clearInterval(task)
}

var ping = document.getElementById("ping")
var dianzankuang = document.getElementById("dianzankuang")
var dazikuang = document.getElementsByClassName("dazikuang")
var count = 1;
ping.onclick=function(){
	if (count%2==1){
		dazikuang[0].style.display="block"}
	if(count%2==0){
		dazikuang[0].style.display="none"}
	count ++;
}
var dazi = document.getElementById("dazi");
var fasong = document.getElementById("fa")
fa.onclick=function(){
	var mini = document.createElement("div");
	mini.className = "dianzanren";
	var minini = document.createElement("div");
	minini.className = "dianzanrenmingplq";
	mini.appendChild(minini);
	minini.innerHTML ="Simple ："+ dazi.value;
	
	dianzankuang.appendChild(mini);
	dazi.value=""
}

//var xingxing=document.getElementById("xingxing")
//zan.onclick=function(){
//	xingxing.style.display="block"
//	$(document).ready(function(){
//		$("button").click(function(){
// 		$("p").hide(1000);
// 	 });
//	});
//}

//var xingxing=document.getElementById("xingxing")
//var task
//zan.onclick=function(){
//	xingxing.style.display="block";
//	task = setInterval("loadImg()", 1000);
//}
//function loadImg(){
//	xingxing.style.display="none"
//	console.log(22222)
//	window.clearInterval(task)
//}
