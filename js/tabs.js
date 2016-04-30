"use strict";

$(function(e){

	var $tabs = $('.tabs__item');
	var currentIndex = 0;

	$tabs.on('click', function(e) {

		var $newTab, $icon, $cache;
		var $newContent;
		var $currentTab = $($tabs[currentIndex]);
		var $currentContent = $('.content--' + currentIndex);
		var newIndex = 0;
		var title = $currentTab.attr('title');

		newIndex = $tabs.index(e.target); 

		if(currentIndex == newIndex || newIndex > 4) {return;} // декоративный 5-й таб
		if(newIndex == 3){window.location.href = 'sizzlejs.html'; return;}

		$newTab = $(this);
		$newContent = $('.content--' + newIndex);

		$currentTab.removeClass('tabs__item' + currentIndex + '--active');
		$currentTab.addClass('tabs__item' + currentIndex + '--inactive');

		$newTab.removeClass('tabs__item' + newIndex + '--inactive');
		$newTab.addClass('tabs__item' + newIndex + '--active');

		$currentContent.css('display', 'none');
		$newContent.css('display', 'block');

		title = $newTab.attr('title');
		document.title = title;

		$icon = $('link[rel="icon"], link[rel="shortcut icon"]');
		$cache = $icon;
		$cache.attr("href", 'icons/icon' + newIndex + '.ico');
		$icon.replaceWith($cache);

		//..... finally
		currentIndex = newIndex;
		$currentTab = $newTab;
		$currentContent = $newContent;

		$icon = null;
		$cache = null;

	});

});
