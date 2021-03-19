'use strict';
/* global galite */
(function(e, t, n, i, s, a, c){
	e[n] = e[n] || function(){ (e[n].q = e[n].q || []).push(arguments); }
	;a = t.createElement(i);c = t.getElementsByTagName(i)[0];a.async = true;a.src = s
	;c.parentNode.insertBefore(a, c);
})(window, document, "galite", "script", "/assets/js/ga-lite.min.js");

galite('create', 'UA-10597401-5', 'auto');
galite('send', 'pageview');