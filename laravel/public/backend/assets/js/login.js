$(function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$('form[name="login"]').submit(function(e){e.preventDefault();const a=$(this),t=a.attr("action"),s=a.find('input[name="email"]').val(),i=a.find('input[name="password"]').val();$.post(t,{email:s,password:i},function(e){if(console.log(e),e.message&&n(e.message,3),e.redirect){setTimeout(function(){window.location.href=e.redirect},3e3)}},"json")});var e=3;function n(e,n){var a=$(e);a.append("<div class='message_time'></div>"),a.find(".message_time").animate({width:"100%"},1e3*n,function(){$(this).parents(".message").fadeOut(200)}),$(".ajax_response").append(a)}$(".ajax_response .message").each(function(a,t){n(t,e+=1)}),$(".ajax_response").on("click",".message",function(e){$(this).effect("bounce").fadeOut(1)})});