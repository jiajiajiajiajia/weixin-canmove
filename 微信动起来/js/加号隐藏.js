$(function(){

	/*  先让点赞和评论区  都隐藏   */
	$(".jhtanchukuang").hide();
	
	/* 点击事件 */
	$("#jiahao").click(function(){
		var control = $(this).find(".jhtanchukuang");
		$(control).toggle(100)
	});
	

});
