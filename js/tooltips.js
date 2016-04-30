'use strict';

$(function() {
  var $inputs = $("[data-tooltip]");
  var $tooltip = $(".form__tooltip");
  var $style = $tooltip.attr('style');

  ($inputs)
    .mouseover( function ( eventObject ) {
      var $left = $(this).position().left;
      var $top = $(this).position().top;

      $tooltip.text( $(this).data("tooltip") )
        .css({
            "left": $left - 25
        })
        .clearQueue()
        .delay(300)
        .animate({top: $top - 40}, 300).show(300)
        .animate({top: $top - 50}, 300).show(300)
        .animate({top: $top - 40}, 300).show(300)
    })
    .mouseout(function () {
      $tooltip.css({
        "display": "none"
      })
        .clearQueue()
        .removeAttr("style")
        .fadeOut("slow");
    });

});
