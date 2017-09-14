$(function(){

	/*  先让点赞和评论区  都隐藏   */
	$(".tanchukuang").hide();
	
	/* 点击事件 */
	$(".dzq").click(function(){
		var control = $(this).find(".tanchukuang");
		$(control).toggle(100)
	});
	
	

});


