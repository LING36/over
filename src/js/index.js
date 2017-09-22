$(function() {
	//主体轮播开始
	function lunbo() {
		var _index = 0;

		//鼠标移到底部按钮时
		$(".but ul li").hover(function() { //鼠标滑到上面要做的事
			clearInterval(playTime); //清除定时器，停止自动轮展
			$(this).addClass("hover").siblings().removeClass("hover");
			//鼠标放上去的那个li添加 class="hover"
			_index = $(this).index(); //鼠标放上去的那个li的序列号
			$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
		}, function() { //鼠标移开时要做的事
			auto_Play(); //起动自动播放
		});

		//鼠标点击左右按钮时
		$(".but_left").click(function() {
			clearInterval(playTime); //清除定时器，停止自动轮展
			--_index;
			if(_index < 0) {
				_index = 6;
			}
			$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
			$(".but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
		});
		$(".but_right").click(function() {
			clearInterval(playTime); //清除定时器，停止自动轮展
			_index++;
			if(_index > 5) {
				_index = 0;
			}
			$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();
			$(".but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
		});

		//鼠标移到轮播图上时
		$("ul.adlist li").hover(function() {
			clearInterval(playTime); //清除定时器，停止自动轮展
		}, function() { //鼠标移开时要做的事
			auto_Play(); //起动自动播放
		});
		//自动轮播
		$("ul.adlist li").eq(0).show().siblings().hide(); //先显示第一张
		function auto_Play() {
			playTime = setInterval(function() {
				_index++; //序列号加 index+1
				if(_index > 6) {
					_index = 0;
				}
				$(".but ul li").eq(_index).addClass("hover").siblings().removeClass("hover");
				$("ul.adlist li").eq(_index).fadeIn().siblings().fadeOut();

			}, 3000);
		}
		auto_Play(); //调用
	}
	lunbo();
	//主体轮播结束
	
//	注册登录
	var height = $('.bigbox').height() + 70;
	var zz = $('.zz').css({ "height": height });
	var box = $('.box1');
	box.css({
		left: ($(window).width() - box.outerWidth()) / 2,
		top: ($(window).height() - box.outerHeight()) / 2 + $(window).scrollTop()
	}).show();
	$(window).on('resize scroll', function() {
		box.stop().animate({
			left: ($(window).width() - box.outerWidth()) / 2,
			top: ($(window).height() - box.outerHeight()) / 2 + $(window).scrollTop()
		});
	})
})