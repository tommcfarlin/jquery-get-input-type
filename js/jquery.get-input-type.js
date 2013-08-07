(function ($) {
    "use strict";

    $.fn.getInputType = function () {

        return this[0].tagName.toString().toLowerCase() === "input" ?
              $(this[0]).prop("type").toLowerCase() :
              this[0].tagName.toLowerCase();

    }; // getInputType

}(jQuery));
