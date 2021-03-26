// JavaScript Document
$(function(){
	new WOW().init();
})
//下拉菜单
$(document).ready(function () {
	$(".navb").slideUp()
	$(".nava").mouseenter(function () {
		$(this).children(".navb").stop(true, true).slideDown(200).css("opacity", "1");
	});
	$(".nava").mouseleave(function () {
		$(this).children(".navb").stop(true, true).slideUp(300).css("opacity", "0");
	});
});

//轮播图
$(document).ready(function () {
	var fv = 0
	var gs = $(".imgbox img").length;
	//	var m =$(".imgbox img").index+1;
	$(".imgbox img").hide().first().fadeIn();
	$(".flip li").click(function () {
		$(this).addClass("ppp").siblings().removeClass("ppp");
		fv = $(this).index();
		$(".imgbox img").fadeOut().eq(fv).fadeIn();
	});
	//点击右箭头
	$(".bt-f").click(function () {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".imgbox img").fadeOut().eq(fv).fadeIn();
		$(".flip li").eq(fv).addClass("ppp").siblings().removeClass("ppp");
		$(".bt-f").addClass("boya");
		$(".bt-b").removeClass("boya");
	});
	//点击左箭头
	$(".bt-b").click(function () {
		if (fv > 0) {
			fv = fv - 1;
		} else {
			fv = 0;
		}
		$(".imgbox img").fadeOut().eq(fv).fadeIn();
		$(".flip li").eq(fv).addClass("ppp").siblings().removeClass("ppp");
		$(".bt-b").addClass("boya");
		$(".bt-f").removeClass("boya");
	});
	//自动轮播
	setInterval(function () {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".imgbox img").fadeOut().eq(fv).fadeIn();
		$(".flip li").eq(fv).addClass("ppp").siblings().removeClass("ppp");
	}, 5000);
	$(".bt-a").hide();
	$(".bt-k").hide();
	$(".ban").mouseenter(function () {
		$(".bt-a").fadeIn();
		$(".bt-k").fadeIn();
	});
	$(".ban").mouseleave(function () {
		$(".bt-a").fadeOut();
		$(".bt-k").fadeOut();
	});

	// 推荐产品-tab切换
	$(".nav li").mouseenter(function () {
		$(this).addClass("current").siblings("li").removeClass("current");
		var index = $(this).index();
		$(".nav-con .item").eq(index).show().siblings(".item").hide();
	});
});

window.onload=function()
	{
		var oTTSlider=document.getElementById('TTSlider');
		var oTTSliderTitle=getByClass('TTSliderTitle',oTTSlider,'div')[0];
		var aSubNav=oTTSliderTitle.getElementsByTagName('li');
		var oTTSliderPrevBtn=document.getElementById('TTSliderPrevBtn');
		var oTTSliderNextBtn=document.getElementById('TTSliderNextBtn');
		var oTTSliderPicList=getByClass('TTSliderPicList',oTTSlider,'div')[0];
		var aItem=oTTSliderPicList.getElementsByTagName('ul');
		var len=aItem.length;
		var showIndex=aItemImgWidth=iNow=0;
		var aEle=[];
		for(var i=0;i<len;i++)
		{  
			var aItemImgs=aItem[i].getElementsByTagName('li');
			if(!aItemImgWidth)
			{
				aItemImgWidth=aItemImgs[0].offsetWidth;
			}
			aEle.push(aItemImgs);	//存入数组,考虑到有多个轮播,且每个轮播里面的图片个数可能一致.
			aSubNav[i].index=i;
			aSubNav[i].onmouseover=function()//切换
			{
				var index=showIndex=this.index;  
				for(var j=0;j<len;j++)
				{
					if(j!=index)
					{
							aItem[j].className='';
							aSubNav[j].className='';
					}
				}
				aSubNav[index-1] && (aSubNav[index-1].className='noneBorRight' );
				if(index>0)
				{
					(aSubNav[0].getElementsByTagName('div')[0].style.borderLeft='1px solid #C3C5C7');
				}
				else
				{
					aSubNav[0].getElementsByTagName('div')[0].style.borderLeft='2px solid #C3C5C7';
				}
				
				aSubNav[index].className='cur';
				aItem[index].className='show';
			}
		}


		for(var i=0;i<len;i++)
		{
			var num=aEle[i].length;
			if(aItem[i].className=='show')
			{
				showIndex=i;
			}
			aItem[i].style.width=num*(aItemImgWidth)+'px'
		}
		oTTSliderNextBtn.onclick=function()
		{
			var maxNum=aEle[showIndex].length-1;
			aItem[showIndex].insertBefore(aEle[showIndex][maxNum],aEle[showIndex][0]);
			aItem[showIndex].style.left=-aItemImgWidth+'px';
			doMove(aItem[showIndex],0);
		}

		oTTSliderPrevBtn.onclick=function()
		{
			doMove(aItem[showIndex],-(aItemImgWidth),function(){
				aItem[showIndex].style.left=0;
				aItem[showIndex].appendChild(aEle[showIndex][0])
			});
		}

		function doMove(o,t,fn)
		{
			clearInterval(o.timer);
			o.timer=setInterval(function(){
				var is= (t-getStyle(o,'left'))/8;
				is= is>0?Math.ceil(is):Math.floor(is);
				if(t==o.offsetLeft)
				{
					clearInterval(o.timer);
					(typeof fn==='function') && fn();
				}
				else
				{
					o.style.left=o.offsetLeft+is+'px';
					o.style.left=o.offsetLeft+is+'px';
				}

			},30)
		}
		function getStyle(o,a)
		{
			return o.currentStyle ? parseFloat(o.currentStyle[a]) : parseFloat(getComputedStyle(o,false)[a]);
		}
		function getByClass(s,p,e)
		{
			var reg=new RegExp('(\\b)'+s+'(\\b)');
			var aElement=(p||document).getElementsByTagName(e||'*');
			var aResult=[];
			for(var i=0;i<aElement.length;i++)
			{
				reg.test(aElement[i].className) && aResult.push(aElement[i]);
			}
			return aResult;
		}
	}

// 客户评价
$(document).ready(function () {
    var n = 0
    var b = $(".csfc").length;
    var o = $(".csfwa").width();
    var c = $(".csfb").width(o * b / 3);
    var a = $(".csfc").width(b / 3 * o / b);

    $(".csfw_y").click(function () {
        if (n < b - 3) {
            n++;
        } else {
            n = 0;
        }
        $(".csfb").animate({ marginLeft: -b / 3 * o / b * n }, 500, "easeInOutCubic");
    });
   
});
$(document).ready(function () {
    var n = 0
    var b = $(".csfc1").length;
    var o = $(".csfwa1").width();
    var c = $(".csfb1").width(o * b / 2);
    var a = $(".csfc1").width(b / 2 * o / b);
    $(".csfw_y1").click(function () {
        if (n < b - 2) {
            n++;
        } else {
            n = 0;
        }
        $(".csfb1").animate({ marginLeft: -b / 2 * o / b * n }, 500, "easeInOutCubic");
    });
    $(".csfw_z1").click(function () {
        if (n > 0) {
            n = n - 1;
        } else {
            n = 0;
        }
        $(".csfb1").animate({ marginRight: -b / 2 * o / b * n }, 500, "easeInOutCubic");
    });
});

$(document).ready(function(){
	carousel(
		$('.demo1'),	//必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
		{
			type: 'leftright',	//可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
			// arrowtype: 'move',	//可选，默认一直显示 - 'move' / 'none'	(鼠标移上显示 / 不显示 )
			autoplay: false,	//可选，默认true - true / false (开启轮播/关闭轮播)
			time:3000	//可选，默认3000
		}
	);
})

// 新闻咨询切换②
$(function () {
	$(".news-atab_list li").click(function () {
		$(this).addClass("news-acurrent").siblings("li").removeClass("news-acurrent");
		var index = $(this).index();
		console.log(index);
		$(".news-atab_con .news-aitem").eq(index).show().siblings(".news-aitem").hide();
	});

})
// 新闻咨询切换③
$(function () {
	$(".news-btab_list li").click(function () {
		$(this).addClass("news-bcurrent").siblings("li").removeClass("news-bcurrent");
		var index = $(this).index();
		console.log(index);
		$(".news-btab_con .news-bitem").eq(index).show().siblings(".news-bitem").hide();
	});
})