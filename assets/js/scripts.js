function scrollTop(){var e=$("#to-top"),a=$("html, body"),o=!1;return $(window).scroll(function(){$(this).scrollTop()>350&&!o?e.addClass("show"):$(this).scrollTop()<=350&&o&&e.removeClass("show"),o=$(this).scrollTop()>350}),e.on("click",function(e){e.preventDefault(),a.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",function(){a.stop()}),a.animate({scrollTop:0},800,"easeOutQuad")}),!1}function smoothScroll(e){$('a[href^="#"]').on("click",function(a){var o=$(this.getAttribute("href"));o.length&&(a.preventDefault(),$("html, body").stop().animate({scrollTop:o.offset().top},e,"easeInOutQuad"))})}function burger(){$(".nav-toggle").on("click",function(){$(this).toggleClass("open"),$(".menu-left").toggleClass("collapse"),$(".overlay").toggleClass("show"),$("body").toggleClass("lock"),$("html").toggleClass("lock")}),$(".menu-left a").on("click",function(){$("html").removeClass("lock"),$("body").removeClass("lock"),$(".nav-toggle").removeClass("open"),$(".menu-left").removeClass("collapse"),$(".overlay").removeClass("show")}),$(".overlay").on("click",function(){$(".nav-toggle").removeClass("open"),$(".menu-left").removeClass("collapse"),$(".overlay").removeClass("show"),$("#expanded").prop("checked",!1),$("body").removeClass("lock"),$("html").removeClass("lock")})}function ShowHideNav(e){var a=0,o=$("#header"),t=$("#header").outerHeight();$(window).scroll(function(e){if($(window).width()>=1024){if(!o.hasClass("fixed")){var s=$(this).scrollTop(),l=Math.abs(s-a);s>t?(s>650&&(o.hasClass("fix-nav")||o.addClass("fix-nav")),l>=6&&(s>a?o.hasClass("hide-nav")||o.addClass("hide-nav"):o.hasClass("hide-nav")&&$("#header").removeClass("hide-nav"))):s<=0&&(o.removeClass(),$("body").hasClass("post")&&$(window).width()>=992&&null==navigator.userAgent.match(/iPad/i)?o.addClass("top"):o.removeClass())}window.innerHeight+window.scrollY>=document.body.offsetHeight&&o.removeClass("hide-nav"),a=s}else o.addClass("fix-nav")})}function formCheck(){$("#contactBtn").click(function(e){e.preventDefault();var a=$(".input input"),o=$(".input textarea"),t=!1;$(".input").removeClass("error"),$(".error-data").remove();for(var s=0;s<a.length;s++){var l=a[s];$(l).attr("required",!0)&&!validateRequired($(l).val())&&(addErrorData($(l),"This field is required"),t=!0),$(l).attr("requred",!0)&&"email"===$(l).attr("type")&&!validateEmail($(l).val())&&(addErrorData($(l),"Email address is invalid"),t=!0),$(o).attr("required",!0)&&!validateRequired($(o).val())&&(addErrorData($(o),"This field is required"),t=!0)}!1===t&&$("#contactForm").submit()})}function validateRequired(e){return""!=e}function validateEmail(e){return""==e||/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(e)}function addErrorData(e,a){e.parent().addClass("error"),e.after("<span class='error-data'>"+a+"</span>")}function Parallax(){var e=$(window).scrollTop(),a=$("#header").outerHeight(),o=$(".post-bg-image").height();return $("body").hasClass("post")&&$(window).width()>=992&&null==navigator.userAgent.match(/iPad/i)&&(0==$(".post-bg-image.out-of-sight").length&&($(".post-bg-image").css({transform:"translateY("+-.4*e+"px)"}),$(".post-intro").css({opacity:1-e/(o-58)})),e/(o+a)>1?$(".post-bg-image").css("visibility","hidden").hide().addClass("out-of-sight"):$(".post-bg-image").css("visibility","visible").show().removeClass("out-of-sight"),$(".post-bg-image").hasClass("out-of-sight")),!1}function ParallaxInit(){$(window).scroll(function(){Parallax()})}jQuery(document).ready(function(){$("body").removeClass("no-js"),ShowHideNav(),scrollTop(),smoothScroll(750),burger(),$(".effect").each(function(){$(this).addClass("active")}),$(".fade").addClass("active"),ParallaxInit(),formCheck()}),$("#contactForm").submit(function(e){var a=$("#contactBtn"),o=$(".input input"),t=$(".input textarea");name=$("input#name").val(),e.preventDefault(),$.ajax({url:"https://formspree.io/jan.czizikow@gmail.com",method:"POST",data:$(this).serialize(),dataType:"json",beforeSend:function(){a.prop("disabled",!0),a.text("Sending...")},complete:function(){a.prop("disabled",!1),a.text("Send")},success:function(e){o.val(""),t.val(""),alert("Thanks for contacting me, "+name+" ! Will get back to you soon!")},error:function(e){alert("Ups, something went wrong, please try again. You can check console log for more information."),console.log(e)}})}),$(window).resize(function(){$("body").removeClass("lock"),$(".nav-toggle").removeClass("open"),$(".menu-left").removeClass("collapse"),$(".overlay").removeClass("show"),$("#header").removeClass("hide-nav")});
