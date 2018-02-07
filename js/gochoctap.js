/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */

var Site = (function($, window, undefined) {
  'use strict';

  var privateVar = null;
  var privateMethod = function() {
    // to do
  };

  return {
    publicVar: privateVar,
    publicMethod: privateMethod
  };

})(jQuery, window);

jQuery(function() {
  Site.publicMethod();
});

;(function($, window, undefined) {
  'use strict';

  var pluginName = 'collapse',
      win = $(window),
      width = win.innerWidth();

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this,
        ele = that.element,
        eleContent = $(ele.data('target'));
      if(width <= 991) {
        // console.log(ele);
        ele.removeClass('active');
        eleContent.stop().hide();

      }
      win.resize(function() {
        width = win.innerWidth();
        // console.log(width);
        if(width <= 991) {
          ele.removeClass('active');
          eleContent.stop().hide();
        }
        else {
          ele.addClass('active');
          eleContent.stop().show();
        }
      });
      ele.on('click.' + pluginName, function(){
        var self = $(this),
        content = $(self.data('target'));

        if(content.length) {
          if(self.hasClass('active')) {
            content.stop().hide();
            self.removeClass('active');
          } else {
            content.stop().show();
            self.addClass('active');
          }
        }
      });
      if(eleContent.length) {
        if(ele.hasClass('active')) {
          eleContent.stop().show();
        }
      }

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

  $.fn[pluginName].defaults = {};

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));

;(function($, window, undefined) {
  'use strict';

  var pluginName = 'pie-chart';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
    	var that = this,
    			options = that.options;

			window.Highcharts.chart({
			    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false,
		        margin: [0, 0, 0, 0],
		        spacingTop: 0,
		        spacingBottom: 0,
		        spacingLeft: 0,
		        spacingRight: 0,
		        renderTo: $(options.idChart)[0]
			    },
			    colors: [
			    	'#2cb7e8', '#ffed00', '#ddd'
			    ],
			    exporting: {
			    	enabled: false
			    },
			    plotOptions: {
			        pie: {
			        		size:'100%',
			            dataLabels: {
			                enabled: true,
			                distance: -22,
			                style: {
			                    fontWeight: 'bold',
			                    color: 'black',
													textOutline: false
			                }
			            },
			            startAngle: 15,
			            endAngle: 375,
			            center: ['50%', '50%'],
			            borderWidth: 0
			        }
			    },
			    title:{
					    text:''
					},
					credits: {
					      enabled: false
					  },
			    tooltip: {
			    	enabled: false
			    },
			    series: [{
			        type: 'pie',
			        innerSize: '40%',
			        size: '100%',
			        states: {
			          hover: {
			            enabled: false
			          }
			        },
			        data: [
			            [options.numberOne + '%', options.numberOne],
			            [options.numberTwo + '%', options.numberTwo],
			            [options.numberThree + '%', options.numberThree]
			        ]
			    }]
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
  	idChart: '',
  	numberOne: 0,
  	numberTwo: 0,
  	numberThree: 0
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));
