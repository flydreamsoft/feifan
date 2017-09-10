$(document).ready(function(){
	//轮播图
	var banner = $(".banner");
			var images = $(".banner a");
			var index = 0;
			var count = images.length;
			// 仅第一张显示
			images.hide().eq(0).show();
			
			// 添加点
			for(var i=0;i<count;i++){
				$(".points").append("<span></span>");
			}
			var points = $(".points span");
			$(".points").css("margin-left",(-1*20*count)+"px");
			points.eq(0).addClass("active");
			
			var t = setInterval(bannerRunning,2000);
			banner.hover(function(){
				clearInterval(t);
			},function(){
				t = setInterval(bannerRunning,2000);
			});
			
			points.hover(function(){
				var i = $(this).index();
				if(i!=index){
					images.eq(index).fadeOut(200);
					points.eq(index).removeClass("active");
				}
				index = i;
				images.eq(index).fadeIn(200);
				points.eq(index).addClass("active");
			});
			
			
			function bannerRunning(){
				images.eq(index).fadeOut(200);
				points.eq(index).removeClass("active");
				index = (index+1)%count;
				images.eq(index).fadeIn(200);
				points.eq(index).addClass("active");
			}
			
			
			$(".cou-mid ul li").hover(function(){
				var index = $(this).index();
				$(".cou-mid ul li").removeClass("active").eq(index).addClass("active");
				$(".cou-mid .contenxt .tenxt").hide().eq(index).show();
			});
			
			
			
			$(".newtle ul li").hover(function(){
				var index = $(this).index();
				$(".newtle ul li").removeClass("active").eq(index).addClass("active");
				$(".newcon .newlist").hide().eq(index).show();
			});
			
			
			
			$(".worktle ul li").hover(function(){
				var index = $(this).index();
				$(".worktle ul li").removeClass("active").eq(index).addClass("active");
				$(".workcon .worklist").hide().eq(index).show();
			});
			
			
			
			$(".newlist dl dd:first-child a ").hover(function(){
				$(this).children("img").animate({
					width:"150%",
					height:"150%",
					top:"-25%",
					left:"-25%"
					
				},800);
				
			},function(){
				$(this).children("img").animate({
					width:"100%",
					height:"100%",
					top:"0%",
					left:"0%"
				},1000);
			});
			
			
			
			
			
			
			
			
			$(".worklist dl dt a ").hover(function(){
				$(this).children("img").animate({
					width:"150%",
					height:"150%",
					top:"-25%",
					left:"-25%"
					
				},800);
				
			},function(){
				$(this).children("img").animate({
					width:"100%",
					height:"100%",
					top:"0%",
					left:"0%"
				},1000);
			});
			

            
				
			
	
});