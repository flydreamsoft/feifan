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
			

            
				
			
			
			
			
			/****轮播***/
			var box = $(".jobbox");
				var ul = $(".jobbox ul");
				var count = $(".jobbox li").length;
				var index = 0;
				var width = $(".jobbox").width();
				
				
				ul.width(width*count+1);
				
				// 第一张图克隆添加到最后
				var first = $(".jobbox ul li:first-child").clone(true);
				ul.append(first);
				
				var t = setInterval(running,2000);
				// 悬停  关闭  定时器  移开重新打开定时器
				box.hover(function(){
					clearInterval(t);
					$(".prev,.next").show();
				},function(){
					t = setInterval(running,2000);
					$(".prev,.next").hide();
				});
				
				$(".prev").click(function(){
					index = (index-1+count)%count;
					
					ul.css("left",width*-1*index+"px");
					
				});
				
				$(".next").click(function(){
					index = (index+1)%count;
					
					ul.css("left",width*-1*index+"px");
				});
				
				//轮播函数
				function running(){
					// index 取值范围[0~7] 
					index = (index+1)%count;
					
					if(index==0){
						ul.animate({left:width*-1*count+"px"},500,function(){
							ul.css("left","0px");
						});
					}else{
						ul.animate({left:width*-1*index+"px"},500);
					}
				}
				
				
			/**合作企业***/	
	var cooperbox = $(".cooperbox");
	var width = $(".cooperbox .cooper-img").width();
	var count = $(".cooperbox .cooper-img").length;
	box.width((width+14)*count);
	var x = 0;
	var s = setInterval(running,2000);
	$(".cooper").hover(function(){
		
					clearInterval(s);
					
					
				},function(){
					s = setInterval(run,2000);
					
				});
	
//	$(".prev").click(function(){
//					x = (x-1+count)%count;
//					
//					cooperbox.css("left",width*-1*index+"px");
//					
//				});
//				
//				$(".next").click(function(){
//					x = (x+1)%count;
//					
//					cooperbox.css("left",width*-1*index+"px");
//				});
	
	function run(){
		
		x = (x+1)%count;
		if( x<10)
		cooperbox.animate({left:(width+14)*x*-1+"px"},500);
	}
	
	
	
	
	
	
	
	
//	
//	setInterval(function(){
//		x = (x+1)%count;
//		if( x<10)
//		box.animate({left:(width+14)*x*-1+"px"},500);
//		
//	},1000);

			
					
			
});


		
			