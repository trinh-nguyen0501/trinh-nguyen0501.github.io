;(function($){$('.navbar-toggle').click(function(){$('.navbar-toggle').toggleClass('active');$('.navbar-nav').toggleClass('open');var h=$(window).height();$('.navbar-nav').css('height',h);$('.navbar-nav').css('overflow','auto');});})(jQuery);;(function($){var width=$(window).width(),icons={header:'icon icon-bt_up',activeHeader:'icon icon-bt_up'};if(width<992){$('#footer-accordion').accordion({header:'.link-title',heightStyle:'content',icons:icons});$('#toggle').on('click',function(){if($('#accordion').accordion('option','icons')){$('#accordion').accordion('option','icons',null);}else{$('#accordion').accordion('option','icons',icons);}});}})(jQuery);;(function($){if($('body').hasClass('home')){$('header').removeClass('header-1');$('header').addClass('header');$(window).scroll(function(){if($(window).scrollTop()>10){$('.header').addClass('fixed');}else{$('.header').removeClass('fixed');}});}else{var width=$(window).width();if(width>991&&width<1050){$('.option-menu').css('width',width);}}
$('[data-show-submenu]').on('click',function(){if($(this).find('[data-submenu]').css('display')==='block'){$(this).find('[data-submenu]').slideUp();}else if($(this).hasClass('user')){$(this).find('[data-submenu]').css('width',$(this).width());$(this).find('[data-submenu]').slideDown();}else{$(this).find('[data-submenu]').css('width',$(this).find('.packge').width());$(this).find('[data-submenu]').slideDown();}});$('[data-submenu]').find('li').on('click',function(){var href=$(this).find('a').attr('href');window.location.href=href;});$('body').on('click',function(e){if(!$(e.target).closest('[data-show-submenu]').length){$(this).find('[data-submenu]').slideUp();}});if($(window).width()>991){$('[data-notice-account]').on('click',function(){$(this).find('.notice-account').slideDown();});}})(jQuery);;(function($){$('.left-menu > .left-menu-header').click(function(){var navHeaderList=$(this).siblings('.navbar-collapse').find('.nav-header');var display=$('.navbar-collapse  > .nav-header').css('display');switch(display){case'none':navHeaderList.slideDown();break;case'block':navHeaderList.slideUp();$(this).siblings().find('.nav-content').slideUp();break;}});$('[data-type-book]').on('click',function(){var id=$(this).attr('data-type-book');var firstElement=$('.navbar-collapse').eq(0).children('.nav-header').attr('data-type-book');var width=$(window).width();var position=0;if(id===firstElement&&$(window).scrollTop()<10){if(width<992){$('.nav-header').slideUp();$('.nav-content').slideUp();}
return;}
switch(true){case(width>=992):position=$(id).offset().top- $('header').height()- 50;break;case(width<992):position=$(id).position().top- 50;$('.nav-header').slideUp();$('.nav-content').slideUp();break;}
$('html, body').animate({scrollTop:position},500);});$(window).scroll(function(){if($(window).width()<992){if($(window).scrollTop()>10){$('[data-left-menu]').addClass('fixed-left-menu');}else{$('[data-left-menu]').removeClass('fixed-left-menu');}}});})(jQuery);;(function($){$('#loadmore').click(function(){$('.comment-list').find('li').fadeIn();$(this).fadeOut();});})(jQuery);;(function($){function hideModal(){$('.modal').hide();$('body').removeClass('modal-open');}
if(/iPhone|iPad/i.test(navigator.userAgent)){$('.modal').css('cursor','pointer');}
$('[data-target]').on('click',function(){var id=$(this).attr('data-target');$(id).show();var top=$(window).height()- $(id).find('.modal-content').innerHeight();if(top>0){$(id).find('.modal-content').css('margin-top',top/2);}
$('body').addClass('modal-open');});$('.modal-content').find('.close').on('click',function(){hideModal();});$('.modal').on('click',function(e){if(!$(e.target).closest('.modal-content').length){hideModal();}});$('[data-type-package]').on('click',function(){var parent=$(this).parent().parent(),select=parent.find('.select'),typePackage=$(this).attr('data-type-package'),langPair=$(this).attr('data-pair');select.text(typePackage);select.attr('data-pair',langPair);});})(jQuery);$('.modal-body form').submit(function(e){var langPair=$(this).find('.create-package .select').attr('data-pair');$(this).find('[name=langpair-list]').val(langPair);$(this).find('button').text(gettext("Loading..."));$('button').attr('disabled',true).blur();});(function($){$(window).scroll(function(){if($(this).scrollTop()>100){$('#top').fadeIn();}else{$('#top').fadeOut();}});$('#top').click(function(){$('html, body').animate({scrollTop:0},800);return false;});})(jQuery);;(function($){var w=$(window).width(),icons={header:'icon icon-bt_up',activeHeader:'icon icon-bt_up'};$(window).resize(function(){if(w!==$(window).width()){w=$(window).width();if(w<992){$('#footer-accordion').accordion({header:'.link-title',heightStyle:'content',icons:icons});$('#toggle').on('click',function(){if($('#accordion').accordion('option','icons')){$('#accordion').accordion('option','icons',null);}else{$('#accordion').accordion('option','icons',icons);}});$('.option-menu').css('width','');if($('.modal').is('show')){$('body').css('overflow','hidden');}
var h=$(window).height();$('.navbar-nav').css('height',h);$('.navbar-nav').css('overflow','auto');if($(window).scrollTop()>10){$('[data-left-menu]').addClass('fixed-left-menu');}}
else{$('[data-left-menu]').removeClass('fixed-left-menu');$('.nav-header').css('display','');$('#footer-accordion').accordion('destroy');$('body').css('overflow','');$('.navbar-nav').css('height','');$('.sub-navbar-collapse').css('height','');$('.sub-navbar-collapse').css('overflow','');$('.sub-navbar-collapse').css('display','');setTimeout(function(){if(w>991&&w<1050){$('.option-menu').css('width',w- 30);}},200);$('.navbar-nav').css('overflow','');}}});})(jQuery);function showLeeRitVideo(isVietnameseVideo){var swfFileName;if(isVietnameseVideo){swfFileName='leerit_intro.swf';}else{swfFileName='leerit_intro_en.swf';}
var msg='<div style="margin: 0 auto; text-align: center;"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" id="leerit_intro" width="711" height="400" > <param name="movie" value="/static/'+ swfFileName+'"> <param name="bgcolor" value="#FFFFFF"> <param name="quality" value="high"> <param name="seamlesstabbing" value="false"> <param name="allowscriptaccess" value="samedomain"> <embed type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" name="leerit_intro" width="711" height="400" src="/static/'+ swfFileName+'" bgcolor="#FFFFFF" quality="high" seamlesstabbing="false" allowscriptaccess="samedomain"> <noembed> </noembed> </embed> </object></div>';$.fancybox(msg,{'autoDimensions':false,'width':720,'height':410});}
function showNotificationNewRewardInAffiliateProgram(name,messages){var msg;msg='<div style="margin: 0 auto; text-align: justify; padding: 10px; ">';msg+='<div style="font-size: 20px; color: #333; font-weight: bolder">Hi '+ name+',</div>';msg+='<br /><br />Bạn có <strong>'+ messages.length+' tin nhắn mới</strong> từ chương trình công tác viên:';msg+='<ul style="text-align: center; padding-top: 15px;">';for(var i=0;i<messages.length&&i<4;++i){msg+='<li style="display: inline-block; color: #336699;margin-bottom: 10px;">'+ messages[i]+'</li>';}
msg+='</ul>';msg+='<br /> <div>Bạn bấm vào nút dưới đây để vào xem tất cả nhé!</div>';msg+='<br /><br /><div style="text-align: center;"><div id="fancybox-view-details-button" class="blue-button">'+'Xem'+'</div>&nbsp;&nbsp;&nbsp';msg+='<div id="fancybox-cancel-button" class="white-button" style="float: none;">'+ pgettext('show_notification_cancel','Cancel')+'</div>';msg+='</div>';$.fancybox(msg,{'autoDimensions':true});$('#fancybox-cancel-button').click(function(){$.fancybox.close();})
var affiliateUrl='/account?tab=affiliate-tab';$('#fancybox-view-details-button').click(function(){$('#fancybox-view-details-button').text(gettext('Loading page...'))
window.location=affiliateUrl;})
setViewedNotification();}
function setViewedNotification(){$.ajax({type:"POST",url:"/account/notifications/viewed",dataType:"text",data:{},success:function(data){},error:function(request,status,error){}});}
function setToolTip(elementId,content,width){$('#'+ elementId).qtip({content:content,position:{corner:{target:'rightTop',tooltip:'topLeft'}},style:{width:width,color:'#21377F',background:'#fff',name:'blue'},border:{width:7,radius:8,color:'#0096C8'},show:'mouseover',hide:{when:'mouseout',fixed:true}});}
function setToolTip_right(elementId,content,width){$('#'+ elementId).qtip({content:content,position:{corner:{target:'topLeft',tooltip:'topRight'}},style:{width:width,color:'#21377F',background:'#fff',name:'blue'},border:{width:7,radius:8,color:'#0096C8'},show:'mouseover',hide:{when:'mouseout',fixed:true}});}
function setToolTipUsingDataTitle(id,width,isToolTipLeft){var msg=$('#'+ id).attr('data-title');if(isToolTipLeft){setToolTip(id,msg,width);}else{setToolTip_right(id,msg,width);}}
function disableForm(formType){$.ajax({type:"POST",url:"/account/disabled-form/"+ formType+"/",dataType:"text",data:{},success:function(data){},error:function(request,status,error){}});}
function sub_review_email(deckId,callBackSuccessFunc,callBackErrorFunc){$.ajax({type:"POST",url:"/account/sub_review_email",dataType:"text",data:{'deckId':deckId},success:function(data){if(data=='email'){window.location='/account/confirm-email/';}else{if(callBackSuccessFunc){callBackSuccessFunc(data);}}},error:function(request,status,error){if(callBackErrorFunc){callBackErrorFunc(request,status,error);}}});}
function addZeroAtFirst(num,size){var s=num+"";while(s.length<size)s="0"+ s;return s;}
function formatDateYYYY_MM_DD(dateObj,separator){separator=separator?separator:'-';var year=dateObj.getFullYear();var month=dateObj.getMonth()+ 1;var day=dateObj.getDate();dateStr=year+ separator+ addZeroAtFirst(month,2)+ separator+ addZeroAtFirst(day,2);return dateStr;}
function increaseDate(dateObj,numDays){numDays=numDays?numDays:1;dateObj.setDate(dateObj.getDate()+ numDays);return dateObj;}
function createDate(dateStr){if(dateStr){var a=dateStr.split(/[^0-9]/);var date=new Date(a[0],a[1]-1,a[2]);return date;}else{return new Date();}}
function formatVietNameDate(dateObj){var monthNames=["T.Một","T.Hai","T.B","T.Tư","T.Năm","T.Sáu","T.Bảy","T.Tám","T.Chín","T.Mười","T.Mười một","T.Mười hai"];var day=dateObj.getDate();var monthIndex=dateObj.getMonth();var year=dateObj.getFullYear();return day+' '+ monthNames[monthIndex]+' '+ year;}
function getCookie(name){var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+ 1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+ 1));break;}}}
return cookieValue;}
function csrfSafeMethod(method){return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));}
var csrftoken=getCookie('csrftoken');$.ajaxSetup({beforeSend:function(xhr,settings){if(!csrfSafeMethod(settings.type)&&!this.crossDomain){xhr.setRequestHeader("X-CSRFToken",csrftoken);}}});var COPY_WARNING_MSG="Các bài viết ở LeeRit là để giúp các bạn ở LeeRit học tốt và hiệu quả hơn.\n\nTất cả những nội dung này thuộc bản quyền của LeeRit. Sao chép lại những nội dung này là không được phép.\n\nNếu bạn sao chép, chương trình sẽ có thể khóa tài khoản của bạn vì vi phạm quy định sử dụng của LeeRit.";function preventPrint(){$('.playfield').hide();}
function afterPrint(){$('.playfield').show();}
function preventCopy(){var selection;if(window.getSelection){selection=window.getSelection();}else if(document.selection){selection=document.selection.createRange().text;}
var selectionStr=$.trim(selection+"");if(selectionStr.length>=100){showWarning();selection.selectAllChildren(document.createElement('div'));if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty();}else if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges();}}else if(document.selection){document.selection.empty();}}}
function showWarning(){alert(COPY_WARNING_MSG);}
function beforePrint(){showWarning();preventPrint();};if(window['matchMedia']){var mediaQueryList=window['matchMedia']('print');mediaQueryList['addListener'](function(mql){if(mql['matches']){beforePrint();}else{afterPrint();}});}