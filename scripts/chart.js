

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

  var pluginName = 'chart', click = true;

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  function creatArrows(ele, items, itemsOfSlider) {
  	if(itemsOfSlider > items) {
  		ele.show();
  	} else {
  		ele.hide();
  	}
  }

  function stateSlide(indexStart, items, itemsOfChart, eleItemChart){
  	eleItemChart.removeClass('prev');
		eleItemChart.removeClass('next');
		$('.button-prev, .button-next').removeClass('disable');

  	if(indexStart < itemsOfChart - items) {
  		eleItemChart.eq(indexStart).addClass('prev');
  		eleItemChart.eq(indexStart + items).addClass('next');
  	}

  	if(indexStart === itemsOfChart - items) {
  		eleItemChart.eq(indexStart).removeClass('next');
  		eleItemChart.eq(indexStart).addClass('prev');
  		$('.button-next').addClass('disable');
  	}

  	if(indexStart === 0) {
  		eleItemChart.eq(indexStart).removeClass('prev');
  		eleItemChart.eq(indexStart + items - 1).removeClass('next');
  		$('.button-prev').addClass('disable');
  	}
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      that.vars = {
      	eleChartList: $('['+that.options.eleChartList+']'),
      	eleWrapper: that.element,
      	eleItemChart: $('['+that.options.eleChartList+']').find('[data-item]'),
      	eleArrows: that.element.find('[data-arrows]'),
      	eleArrowButton: that.element.find('[data-arrows] button'),
      	items: that.options.items,
      	itemsOfChart: $('['+that.options.eleChartList+']').find('[data-item]').length,
      	widthOfWrapper: $('['+that.options.eleChartList+']').width(),
      	widthOfItem: $('['+that.options.eleChartList+']').width() / that.options.items,
      	widthChartList: $('['+that.options.eleChartList+']').find('[data-item]').length * $('['+that.options.eleChartList+']').width() / that.options.items,
      	indexCurrent: 0
      };

      if(that.vars.itemsOfChart < that.vars.items) {
      	that.vars.items = that.vars.itemsOfChart;
      	that.vars.widthOfItem = that.vars.widthOfWrapper / that.vars.items;

      	that.vars.widthChartList = (that.vars.widthOfItem * that.vars.itemsOfChart);
      }

      // arrows
    	creatArrows(that.vars.eleArrows, that.vars.items, that.vars.itemsOfChart);

      // init width of list chart
      that.vars.eleWrapper.width(that.vars.widthOfWrapper);
      that.vars.eleChartList.width(that.vars.widthChartList + 10);

      // init width of item chart
      that.vars.eleItemChart.width(that.vars.widthOfItem);

      // init slide
      stateSlide(that.vars.indexCurrent, that.vars.items, that.vars.itemsOfChart, that.vars.eleItemChart);

      // slide item
      that.vars.eleArrowButton.on('click', function(){
      	if(!$(this).hasClass('disable')) {
	      	if(click) {
		      	if($(this).hasClass('button-next')) {
		      		that.slideChart('next', that.vars.eleChartList, that.vars.eleItemChart, that.vars.widthOfItem);
		      	}else{
		      		that.slideChart('prev', that.vars.eleChartList, that.vars.eleItemChart, that.vars.widthOfItem);
		      	}

		      	click = false;
	      	}
      	}
      });

      // resize
      $(window).resize(function(){
      	that.resize();
      });

      $.isFunction(this.options.onCallback) && this.options.onCallback();
    },
    slideChart: function(action, eleChartList, eleItemChart, widthOfItem) {
    	var that = this, next = -1, prev = -1, step = 0;
    	eleItemChart.each(function(){
    		if($(this).hasClass('next')){
    			next = $(this).index();
    		}
  			if($(this).hasClass('prev')){
  				prev = $(this).index();
  			}
    	});

    	if(action === 'next') {
    		if(next !== -1) {
					if(that.vars.indexCurrent + that.vars.items <= that.vars.itemsOfChart - that.vars.items ) {
						step = that.vars.items;
					}else{
						step = that.vars.itemsOfChart - that.vars.items - that.vars.indexCurrent;
					}

  				eleChartList.stop().animate({
  					left: parseInt(eleChartList.css('left')) - (widthOfItem*step)
  				}, function(){
  					click = true;
  				});

  				that.vars.indexCurrent = that.vars.indexCurrent + step;

  				stateSlide(that.vars.indexCurrent, that.vars.items, that.vars.itemsOfChart, that.vars.eleItemChart);
    		}
    		click = true;
    	} else {
    		if(prev !== -1) {
    			if(that.vars.indexCurrent - that.vars.items >= 0 ) {
						step = that.vars.items;
					}else{
						step = that.vars.indexCurrent;
					}

					if(step < 0) {
						step = 0;
					}

  				eleChartList.stop().animate({
  					left: parseInt(eleChartList.css('left')) + (widthOfItem*step)
  				}, function(){
  					click = true;
  				});

  				that.vars.indexCurrent = that.vars.indexCurrent - step;

  				stateSlide(that.vars.indexCurrent, that.vars.items, that.vars.itemsOfChart, that.vars.eleItemChart);
    		}
    	}
    },
    resize: function(){
    	var that = this;

    	that.vars.eleWrapper.attr('style', '');

    	that.vars.widthOfWrapper = that.vars.eleWrapper.width();
    	that.vars.widthOfItem = that.vars.widthOfWrapper / that.vars.items;
    	that.vars.widthChartList = that.vars.widthOfItem * that.vars.itemsOfChart;

    	// resize width of list chart
      that.vars.eleWrapper.width(that.vars.widthOfWrapper);
      that.vars.eleChartList.width(that.vars.widthChartList + 10);

      // resize width of item chart
      that.vars.eleItemChart.width(that.vars.widthOfItem);

      // update left postion
      that.vars.eleChartList.css({
      	left: - (that.vars.indexCurrent * that.vars.widthOfItem)
      });
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
    items: 7
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));