var chatinputtexttext=document.getElementById("chat-input-text-text")


//window.onkeydown=function(){	
//	
//	console.log(event.keyCode)
//	
//	if(event.keyCode==13){
//		console.log()
//		
//			addchat();
//			chatinputtexttext.value=null;
//			addchat2();	
//		
//		
//	}
//}
//function addchat(){
//	console.log("1")
//	//箭头
//	var chatjiantou=document.createElement("div");
//	chatjiantou.classList.add("xiaosanjiao2")
//	//显示框
//	var diyihua2=document.createElement("div");
//	var neirong=document.createElement("div");
//	neirong.innerText=chatinputtexttext.value;
//	diyihua2.classList.add("diyihua2");
//	neirong.className="aaaa"
//	
//	diyihua2.appendChild(chatjiantou)
//	diyihua2.appendChild(neirong)
//	//内容
//	var liaotnr=document.createElement("div");
//	liaotnr.classList.add("liaotnr")
//		liaotnr.appendChild(diyihua2)
//	//头像
//	var liaotnrtx=document.createElement("div");
//	liaotnrtx.classList.add("touxiang2")
//	
//	//整个聊天的大框
//	var chattextall=document.createElement("div")
//	chattextall.classList.add("ltlt2")
//		chattextall.appendChild(liaotnrtx)
//		chattextall.appendChild(liaotnr)
//
//
//	
//	
//	var ltym=document.getElementById("ltym")
//	ltym.appendChild(chattextall);
//}
//
//function addchat2(){
//	console.log("1")
//	//箭头
//	var chatjiantou=document.createElement("div");
//	chatjiantou.classList.add("xiaosanjiao")
//	//显示框
//	var diyihua2=document.createElement("div");
//	var neirong=document.createElement("div");
//	neirong.innerText=str;
//	diyihua2.classList.add("diyihua");
//	neirong.className="aaaa"
//	
//	    diyihua2.appendChild(chatjiantou)
//	    diyihua2.appendChild(neirong)
//	//内容
//	var liaotnr=document.createElement("div");
//	liaotnr.classList.add("liaotnr")
//		liaotnr.appendChild(diyihua2)
//	//头像
//	var liaotnrtx=document.createElement("div");
//	liaotnrtx.classList.add("touxiang3")
//	
//	//整个聊天的大框
//	var chattextall=document.createElement("div")
//	chattextall.classList.add("ltlt")
//		chattextall.appendChild(liaotnrtx)
//		chattextall.appendChild(liaotnr)
//
//
//	
//	
//	var ltym=document.getElementById("ltym")
//	ltym.appendChild(chattextall);
//}


var jianpan = document.getElementById("jianpan")
var jiahao = document.getElementById("加号和表情")
var jiahaotan=document.getElementById("jiaHaoTanChu")

var count = 1;
jiahao.onclick=function(){
	if(count%2==1){
		jianpan.style.bottom = "0px"
	}
	if (count%2==0){
		jianpan.style.bottom = "-170px"
		
	}
	
		
	count++;
}




var kuang=document.getElementsByClassName("kuangkuang")
var count2=1;
chatinputtexttext.onclick=function(){
	
	
    
}
//语音的那个
var yuyin = document.getElementById("yuyin")



	var lightbox;
	
	
	yuyin.onclick = function() {
		createLightBox();
		
		lightbox.onclick = function() {
			document.body.removeChild(this)
		}
	}
	
	function createLightBox() {
		var h = screen.availHeight;
		var w = screen.availWidth;

		lightbox = document.createElement("div");
		lightbox.style.width = w+"px";
		lightbox.style.height = h+"px";
		lightbox.className = "light-box";
		
		createLogin();
		
		document.body.appendChild(lightbox)
		
	}
	

var hongbao = document.getElementById("hongbao")
hongbao.onclick=function(){
	alert("您的微信版本过低，不能使用此功能");
}
var paizhao = document.getElementById("paishe")
paizhao.onclick=function(){
	alert("您的手机居然没有摄像头。。。");
}