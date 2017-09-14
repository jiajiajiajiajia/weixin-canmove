
var count = 1;
var lightbox=document.getElementsByClassName("lightbox")
var str = "";

xiangji.onclick=function(){
	if(count%2==1){		
		lightbox[0].style.display="block";
	}
	if(count%2==0){
		lightbox[0].style.display="none";
	}
	count++;
}

var qvxiao = document.getElementById("qvxiao")
qvxiao.onclick=function(){
	lightbox[0].style.display="none";
}

var queding = document.getElementById("queding")
var wenzibufen=document.getElementById("wenzibufen")
var pyqnr3 = document.getElementById("pyqnr3")
var p=document.getElementById("p")
queding.onclick=function(){
	
	var temp=pyqnr3.cloneNode(true);
	
	console.log(str)
	temp.style.top="200px";
	temp.lastChild.firstChild.nextSibling.innerHTML=wenzibufen.value;
	temp.lastChild.firstChild.nextSibling.nextSibling.style.backgroundImage=str;
	
	
	pyqnr1.style.top="410px";
	pyqnr2.style.top="690px"
	pyqnr3.style.top="900px"
    document.getElementById("pyqzym").appendChild(temp)
	
	
	
	
	
	lightbox[0].style.display="none";
}

function  preview(file) {
	if(file.files && file.files[0]) {

		var reader = new FileReader();

		reader.readAsDataURL(file.files[0]);
		//当读取完毕时
		reader.onload = function() {
			//文件一旦开始读取，无论成功或失败，实例的 result 属性都会被填充
			p.innerHTML = '<img src="' + event.target.result + '" />';
			str = p.innerHTML;
			console.log(str)
		}
	}
	
}




var pyqft = document.getElementById("pyqft")


var lightbox;
	
	
	pyqft.onclick = function() {
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