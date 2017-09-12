$(document).ready(function(){
	/**二维码**/
	var wechat = $(".chat .wechat");
	wechat.hover(function(){
		$(".qrcode").show();
	},function(){
		$(".qrcode").hide();
	});
	
	
	//banner轮播图
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
			
			var b= setInterval(bannerRunning,2000);
			banner.hover(function(){
				clearInterval(b);
			},function(){
				b = setInterval(bannerRunning,2000);
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
			

//          banner轮播图结束
				
			
			
			
			

				
	/**师资力量开始***/
			
			var teawidth = $(".teacherbox-img").width()
			var teacount = $(".teacherbox-img").length
			var y = 0;
			var first = $(".teacherbox-img:first-child").clone(true);
			var teacherbox = $(".teacherbox");
			var teacherlist = $(".teacherlist");
			var lef = $(".teacherword .lef");
			var rgh = $(".teacherword .rgh");
			teacherbox.width(teawidth*(teacount+1));
			teacherbox.append(first);
			var t = setInterval(teacher,3000);
			teacherlist.hover(function(){
				clearInterval(t);
			},function(){
				t = setInterval(teacher,3000);
			});
			
			lef.hover(function(){
				clearInterval(t);
			},function(){
				t = setInterval(teacher,3000);
			});
			
			rgh.hover(function(){
				clearInterval(t);
			},function(){
				t = setInterval(teacher,3000);
			});
			lef.click(function(){
				y = (y-1+teacount)%teacount;
				teacherbox.css("left",teawidth*y*-1+"px");
			
			});
			
			rgh.click(function(){
				y = (y+1)%teacount;
				teacherbox.css("left",teawidth*y*-1+"px");
				
				
			});
			
			function teacher(){
				y = (y+1)%teacount;
				if(y==0){
					teacherbox.animate({left:teawidth*teacount*-1+"px"},1000,function(){
						teacherbox.css("left","0px");
					});
				}
				teacherbox.animate({left:teawidth*y*-1+"px"},1000);
			}
		
//			
//			/**师资力量结束***/					
//			/**合作企业开始***/	
	var cooperbox = $(".cooperbox");
	var coowidth = $(".cooperbox .cooper-img").width();
	var coocount = $(".cooperbox .cooper-img").length;
	cooperbox.width((coowidth+14)*coocount);
	var x = 0;
	var h = setInterval(run,2000);
	$(".cooper").hover(function(){
					clearInterval(h);
				},function(){
					h = setInterval(run,2000);
					
				});
	$(".prev").hover(function(){
					clearInterval(h);
				},function(){
					h = setInterval(run,2000);
					
				});
	$(".next").hover(function(){
					clearInterval(h);
				},function(){
					h = setInterval(run,2000);
					
				});			
				
						
	$(".prev").click(function(){
				x = (x+1)%coocount;
				cooperbox.css("left",(coowidth+14)*x*-1+"px");
					
				});
				
	$(".next").click(function(){
					x = (x-1)%coocount;
					cooperbox.css("left",(coowidth+14)*x*1+"px");
					
					
				});
	
	function run(){
		
		x = (x+1)%coocount;
//		if( x<10)
		cooperbox.animate({left:(coowidth+14)*x*-1+"px"},500);
	}
//	
//	         /**合作企业结束***/	
//	         /**明星就业开始***/	
var jobbox = $(".jobbox");
var jobwidth = $(".jobbox").width();
var jobcount = $(".jobbox-img").length;
var z = 0;
jobbox.width(jobwidth*jobcount);
var l = setInterval(jobRunning,3000);
jobbox.hover(function(){
	clearInterval(l)
},function(){
	l = setInterval(jobRunning,3000);
});
function jobRunning(){
	z = (z+1)%jobcount;
	jobbox.animate({left:jobwidth*z*-1+"px"},500)
}

             /**明星就业结束***/	
						
});

$(document).scroll(function() {
				var H = $(window).height();
				var sTop = $("body").scrollTop();
				var ah = $(".aside-ad").height();
				$(".aside-ad").stop(true, true).animate({
					top: (((H - ah) / 2) + sTop) + "px"
				}, 1000, "easeOutBack");
			});
		
			