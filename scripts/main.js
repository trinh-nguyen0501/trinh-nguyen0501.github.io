function isMobile(){
return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}
var w_ = $(window).width(), h_ = $(window).height(), checkClick = true, idp;
var iActive, iNext, iPrev, total = $('.item-animate').length - 1, countNext = 0, countPrev = 0;

function Page(){
	var body = $("html, body");
	var self = this;

	this.init = function(){
		$(window).load(function(){
			self.jquery();
		});
	}

	this.jquery = function(){
		if($('[data-scroll]').length > 0) {
			$('[data-scroll]').mCustomScrollbar();
		}

		$('.notif-wrapper').click(function(){
			var notif = $('.heading-milestone .notif');
			if(notif.hasClass('active')){
				$(this).removeClass('active');
				notif.removeClass('active');
				$(this).parent().find('.notif-show').stop().slideUp();
			}else{
				$(this).addClass('active');
				notif.addClass('active');
				$(this).parent().find('.notif-show').stop().slideDown();
			}
		});
		$('.dl-mobile > img').click(function(){
			if($('.dl-mobile .days-learning-mb').hasClass('active')){
				$('.dl-mobile .days-learning-mb').removeClass('active');
				$(this).parent().find('.days-learning-mb').removeClass('active');
			}else{
				$('.dl-mobile .days-learning-mb').addClass('active');
				$(this).parent().find('.days-learning-mb').addClass('active');
			}
		});
		// click outside
		$(document).on('click touchstart', function (e) {
			e.stopPropagation();
		    var container1= $('.notif-wrapper'), container2 = $('.notif-show');

		    if (!container1.is(e.target) && container1.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0)
		    {
		      if($('.notif-wrapper').hasClass('active')) {
		      	$('.notif-wrapper').trigger('click');
		      }
		    }
		});
		$('.xem-lo-trinh').click(function(){
			$('.learing-process').show();
		});
		$('.point-close').click(function(){
			$('.learing-process').hide();
		});
		// delete notif item
		$('.notif-list .icon-delete').click(function(){
			$(this).closest('li').remove();
		});
		// click outside
		$(document).on('click touchstart', function (e) {
			e.stopPropagation();
		    var container = $('.dl-mobile');

		    if (!container.is(e.target) // if the target of the click isn't the container...
		        && container.has(e.target).length === 0) // ... nor a descendant of the container
		    {
		      if($('.dl-mobile .days-learning-mb').hasClass('active')) {
		      	$('.dl-mobile > img').trigger('click');
		      }
		    }
		});
	}

	/*document.documentElement.addEventListener("touchend", function(e){
	    var container = $('.heading-milestone .notif');

	    if (!container.is(e.target) && container.has(e.target).length === 0) {
     		$('.heading-milestone .notif .no.active').trigger('click');
	    }
	});*/
	// slick chart
	if($('.slick-chart').length > 0) {
		$('.slick-chart').on('init', function(event, slick){
			var step = 0;
			if($(window).width() > 767) {
				step = 7;
			}else{
				step = 0;
			}
			var indexActive = $('.slick-chart .item.active').index();

			if(indexActive >= step) {
				indexActive = indexActive - step;
			}

			slick.slickGoTo(indexActive);
		});

		$('.slick-chart').slick({
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 14,
		  slidesToScroll: 7,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 5
		      }
		    }
		  ]
		});
	}

	$('[data-chart-tab]').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).closest('.slick-chart').find('.item').removeClass('active');
			$(this).parent().addClass('active');
			var ele = $($(this).data('id'));

			if(ele) {
				$('[data-chart-content]').find('.tab-pane').removeClass('active');
				$('[data-chart-content]').find('.tab-pane').removeClass('in');
				ele.addClass('active');
				ele.addClass('in');
			}
		}
	});
	// fix feedback 27-03-2017
		document.getElementById("copy-link").addEventListener("click", function() {
	    copyToClipboard(document.getElementById("copy-text"));
	});

	function copyToClipboard(elem) {
		  // create hidden text element, if it doesn't already exist
	    var targetId = "_hiddenCopyText_";
	    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	    var origSelectionStart, origSelectionEnd;
	    if (isInput) {
	        // can just use the original source element for the selection and copy
	        target = elem;
	        origSelectionStart = elem.selectionStart;
	        origSelectionEnd = elem.selectionEnd;
	    } else {
	        // must use a temporary form element for the selection and copy
	        target = document.getElementById(targetId);
	        if (!target) {
	            var target = document.createElement("textarea");
	            target.style.position = "absolute";
	            target.style.left = "-9999px";
	            target.style.top = "0";
	            target.id = targetId;
	            document.body.appendChild(target);
	        }
	        target.textContent = elem.textContent;
	    }
	    // select the content
	    var currentFocus = document.activeElement;
	    target.focus();
	    target.setSelectionRange(0, target.value.length);

	    // copy the selection
	    var succeed;
	    try {
	    	  succeed = document.execCommand("copy");
	    } catch(e) {
	        succeed = false;
	    }
	    // restore original focus
	    if (currentFocus && typeof currentFocus.focus === "function") {
	        currentFocus.focus();
					$('#copy-link').html('Copied');
	    }

	    if (isInput) {
	        // restore prior selection
	        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	    } else {
	        // clear temporary content
	        target.textContent = "";
	    }
	    return succeed;
	}
	// fix feedback 27-03-2017
}
Page = new Page();
$(document).ready(function() {
	Page.init(); });
