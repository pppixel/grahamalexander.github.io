
(function() {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = "";
    var last_i = "-";

    window.debounce = function(method, delay) {
        clearTimeout(method._tId);
        method._tId= setTimeout(function(){ method(); }, delay);
    };

    Array.prototype.forEach.call(section, function(e) { sections[e.id] = e.offsetTop; });

    window.onscroll = function() {
        debounce(handleScroll, 100);
    };

    window.handleScroll = function(){
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (i in sections) {
            if (sections[i] <= scrollPosition + 200) {
                document.querySelector('.menu a.active').setAttribute('class', '');
                document.querySelector('.menu a[href*=' + i + ']').setAttribute('class', 'active');
                last_i = i;
            }
        }

        if(window.location.hash != "#" + last_i){
            history.replaceState({}, "", "#"+last_i);
        }
    }

})();
