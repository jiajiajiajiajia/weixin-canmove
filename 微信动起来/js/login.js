	var lightbox;
	
	
	login.onclick = function() {
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
//  刚开始的时候一个div一个div的插入
//	function createLogin() {
//		
//		var div = document.createElement("div");
//		div.className = "login";
//		var div2 = document.createElement("div");
//		div2.className = "firstKuang";
//		var div3 = document.createElement("div");
//		div3.className = "sKuang";
//		var div4 = document.createElement("div");
//		div4.className = "sanKuang";
//		var div5 = document.createElement("div");
//		div5.className = "denglu";
//		div5.innerHTML="登录"
//		var div6 = document.createElement("div");
//		div6.className = "qvxiao";
//		div6.innerHTML="取消"
//		
//		
//		div5.onclick = function() {
//			window.open("微信页面一.html")
//			event.stopPropagation();
//		}
//		div6.onclick = function() {
//			document.body.removeChild(this)
//			event.stopPropagation();
//		}
//		
//		div.appendChild(div2)
//		div.appendChild(div3)
//		div.appendChild(div4)
//		
//		div4.appendChild(div5)
//		div4.appendChild(div6)
//		
//		lightbox.appendChild(div);
//	}
