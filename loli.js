function jump1(){
	var scroll_offset = $(".header").offset(); //得到pos这个div层的offset，包含两个值，top和left 
	$("body,html").animate({ scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动 
	},1000); 
	}
function jump2(){
	var scroll_offset = $(".information").offset(); //得到pos这个div层的offset，包含两个值，top和left 
	$("body,html").animate({ 
	scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动 
	},1000); 
}
function jump3(){
	var scroll_offset = $(".skill").offset(); //得到pos这个div层的offset，包含两个值，top和left 
	$("body,html").animate({ 
	scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动 
	},1000); 
}
function jump4(){
	var scroll_offset = $(".others").offset(); //得到pos这个div层的offset，包含两个值，top和left 
	$("body,html").animate({ 
	scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动 
	},1000); 
}
$(function() {
	$.scrollify({
        section: ".my",
		scrollSpeed: 1500,

    });
	$(window).scroll(function() {
        if ($(window).scrollTop() > 600)
            $('#go-top').fadeIn(500);
        else
            $('#go-top').fadeOut(500);
    });
    $('#go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});
