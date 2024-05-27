/**	STYLE SWITCHER
*************************************************** **/
jQuery(document).ready(function() {
	"use strict";

    jQuery("#hideSwitcher, #showSwitcher").click(function () {

        if (jQuery("#showSwitcher").is(":visible")) {

			var _identifier = "#showSwitcher";
            jQuery("#switcher").animate({"margin-left": "0px"}, 500).show();
			createCookie("switcher_visible", 'true', 365);

        } else {

			var _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({"margin-left": "0"}, 500);
			createCookie("switcher_visible", 'false', 365);

        }

		jQuery(_identifier).animate({"margin-left": "-500px"}, 500, function () {
			jQuery(this).hide();
		});

    });

	// REMOVE # FROM URL
	$("a[href='#']").on("click", (function(e) {
		e.preventDefault();
	}));

	$('.transition-direction > div').on('click', function(){
		$('.transition-direction > div').removeClass('active');
		$(this).addClass('active');
	})

	function removeAllClasses() {
		$('body').removeClass('animation-top');
		$('body').removeClass('animation-right');
		$('body').removeClass('animation-bottom');
		$('body').removeClass('animation-left');
		$('body').removeClass('animation-cornertopleft');
		$('body').removeClass('animation-cornertopright');
		$('body').removeClass('animation-cornerbottomleft');
		$('body').removeClass('animation-cornerbottomright');
	}

	$('#top').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-top');
	});

	$('#right').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-right');
	});

	$('#bottom').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-bottom');
	});

	$('#left').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-left');
	});

	$('#cornertopleft').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-cornertopleft');
	});

	$('#cornertopright').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-cornertopright');
	});

	$('#cornerbottomleft').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-cornerbottomleft');
	});

	$('#cornerbottomright').on('click', function(){
		removeAllClasses();
		$('body').addClass('animation-cornerbottomright');
	})

                      
});

function setActiveStyleSheet(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title) { a.disabled = false; }
		}
	}

	// DARK SKIN
	var color_skin = readCookie('color_skin');
	if(color_skin == 'dark') {
		jQuery("#css_dark_skin").remove();
		jQuery("head").append('<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />');
		jQuery("#is_dark").trigger('click');
		jQuery("a.logo img").attr('src', 'assets/images/logo_dark.png');
	}
}

function getActiveStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) { return a.getAttribute("title"); }
	}

	return null;
}

function getPreferredStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) {
			return a.getAttribute("title");
		}
	}

	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else {
		expires = "";
	}	document.cookie = name+"="+value+expires+";";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];

		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}

		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}

	return null;
}


/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
	@ON LOAD
**/
var switcher_visible = '';
window.onload = function(e) {

	// COLOR SCHEME
	var cookie = readCookie("style");
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);

	// SWITCHER OPEN|CLOSED
	
}