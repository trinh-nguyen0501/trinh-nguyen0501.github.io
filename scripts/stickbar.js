

/**
 *  @name google-map
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    bindEvent
 *    destroy
 */
/*global google*/
;(function($, window, undefined) {
  'use strict';

  var pluginName = 'stickbar';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this, ele = that.element;

      that.vars = {
      	buttonOpen: ele.find('[data-open]'),
      	eleMenu: ele.find('[data-menu]'),
      	itemMenu: ele.find('[data-item]')
      };
      
      that.vars.buttonOpen.on('click.' + pluginName, function(){
      	if($(this).hasClass('active')) {
      		$(this).removeClass('active');
      		that.vars.eleMenu.removeClass('active');

      		if($('.overplay').length > 0) {
      			$('.overplay').remove();
      		}

      		$('html, body').removeClass('open-stickbar');
      	}else{
      		$(this).addClass('active');
      		that.vars.eleMenu.addClass('active');
      		if(!$('.overplay').length) {
      			$('body').append('<div class="overplay"></div>')
      		}
      		$('html, body').addClass('open-stickbar');
      	}
      });

      that.vars.itemMenu.on('click', function(e){
      	e.preventDefault();
      	var id = $(this).attr('href');
      	
      	that.vars.buttonOpen.trigger('click');

      	if($(id).length > 0) {
      		$('body').stop().animate({
	        	scrollTop: $(id).offset().top - 71
		    	}, 1000);
      	}
      });

      $.isFunction(this.options.onCallback) && this.options.onCallback();
    },
    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    eleChartList: 'data-chart-list',
    items: 7,
    itemsMobile: 5, 
    wMobile: 767
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));