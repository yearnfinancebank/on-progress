/*
 * Rick Sanchez - Portfolio
 *
 * Copyright (c) 2021 Rick Sanchez
 * Released under the MIT license
 * 
 * 
 */ 

$(window).on('load', function () {

	let vh = window.innerHeight * 0.01

	document.documentElement.style.setProperty('--vh', `${vh}px`)

	// Spinner Load
	var preloaderFadeOutTime = 500;

	function hidePreloader() {

		var preloader = $('.spinner-wrapper');

		setTimeout(function () {
			preloader.fadeOut(preloaderFadeOutTime);
		}, 500);
	}
	hidePreloader();
});
