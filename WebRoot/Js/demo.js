
window.onload = function() {
	var divId = $("#div1");
	var divId2 = $("#div2");
	var divId3 = $("#div3");
	var divId4 = $('#div4');
	var winHeight = $(window).height();
	var winWidth = $(window).width();

	var divHeight = divId.height();
	var divWidth = divId.width();

	var top = (winHeight - divHeight) / 2 + 30;
	var left = (winWidth - divWidth) / 2 + 80;

	var left1 = (winWidth - divWidth) / 2 + $('#div1').width() +80;
	var top1 = (winHeight - divHeight) / 2 + 26;

	var top2 = winHeight / 11;
	var left2 = winWidth / 3 - 110;
	divId.css({
		top : top + "px",
		left : left + "px"
	});
	divId3.css({
		top : top + "px",
		left : left + "px"
	});
	divId2.css({
		top : top1 + "px",
		left : left1 + "px"
	});
	divId4.css({
		top : top2 + "px",
		left : left2 + "px"
	});
};
$(function() {
	$('#div1').css("width", 220).css("height", 75).css("background-image",
			"url(Img/div1.png)");
	$('#div3').css("width", 220).css("height", 75);
	$('#div4').css("width", 700).css("height", 135);
	$('#div3').hide();
	$('#div2').css("background-color", "white").css("width", 220).css(
			"height", 85).css("background-image", "url(Img/div2.png)");
	$('#p1').hide();
	$('#p2').hide();
	$('#user').css("border-radius", "8px").css("outline", "none").css(
			"padding", "4px");
	$('#pwd').css("border-radius", "8px").css("outline", "none").css("padding",
			"4px");
	var winWidth = $(window).width();
	var divLeft = (winWidth - $("#div1").width()) / 2 + 80;

	$('#but').click(function() {
		$('#div1').animate({
			left : divLeft + 220 + "px"
		}, 1000);
		setTimeout(function() {
			$.ajax({
				type : "post",
				url : "json/login",
				dataType : "json",
				data : {
					userName : $('#user').val(),
					userPwd : $('#pwd').val()
				},
				success : function(data) {
					if (data.success) {
						$('#div3').show();
						$('#p2').show();
						setTimeout(function() {

							location.href = "index.jsp";
						}, 1000);
					} else {
						$('#div3').show();
						$('#p1').show();
						setTimeout(function() {
							$('#user').val("");
							$('#pwd').val("");
							$('#div1').animate({
								left : divLeft + 'px'
							}, 1000);
							$('#div3').hide();
							$('#p1').hide();
						}, 1000);

					}
				},
				error : function(data) {
					$('#div3').show();
					$('#p1').show();
					setTimeout(function() {
						$('#user').val("");
						$('#pwd').val("");
						$('#div1').animate({
							left : divLeft + 'px'
						}, 1000);
						$('#div3').hide();
						$('#p1').hide();
					}, 1000);
				}
			});
		}, 1000);

	});
});


