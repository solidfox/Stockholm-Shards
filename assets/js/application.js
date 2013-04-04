shards.navbar = $('#navbar');
shards.navbar.height = shards.navbar.height();
shards.navwrapp = $('#navbarwrapp');
shards.loading = 0;
shards.startLoading = function () {this.loading++;};
shards.doneLoading = function () {
	this.loading--;
	if (this.loading <= 0) {
		shards.newStuffLoaded();
	}
};
shards.newStuffLoaded = function () {
	// Open all google docs links in new page
	// Does not work on popovers - needs to be included in callback

	$("a[href*='docs.google.com']").attr("target", "_blank");


	// Popovers
	$("[data-toggle=popover]").popover({html:true});
	$("a.btn[data-toggle=popover]")
		.popover({html:true})
		.click(function(e) {
			e.preventDefault();
		});
	$("p[data-toggle=popover],h2[data-toggle=popover],h3[data-toggle=popover]")
		.popover({
			html:true,
			trigger:"click",
			title:"Motivering"
		})
		.each(shards.appendCommentIcon);
	$("p[data-toggle=popover]")
		.tooltip({
			placement:"right",
			trigger:"hover",
			title:"Klicka för motivering",
			delay:{show:0, hide:500}
		});

	$('body').on('click', function (e) {
			$('[data-toggle=popover]').each(function () {
					//the 'is' for buttons that trigger popups
					//the 'has' for icons within a button that triggers a popup
					if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
							$(this).popover('hide');
					}
			});
	});

	// Carousels
	$('.carousel').carousel();
};
shards.appendCommentIcon = function () {
	var parent = $(this);
	var comment = $("<a class='btn btn-mini btn-info commentIcon'>Varför?</a>");
	parent.prepend(comment);
	comment.addClass('pull-right');
	// var topOffset = parent.innerHeight()/2 - comment.outerHeight()/2;
	// comment.css({
	// 	'top': topOffset,
	// 	'position': 'absolute',
	// 	'left': -comment.outerWidth()-7+'px'
	// });
};
shards.tooltipInPopover = function (element) {
	$(element).tooltip('show');
};

$('#navbarwrapp').css('height', shards.navbar.height);

// Load articles
$('div[load]').each(function () {
	var source = this.getAttribute("load");
	var loadingDiv = $(this);
	shards.startLoading();
	$.get(source, function(data) {
		loadingDiv.replaceWith(data);
		shards.doneLoading();
	});
});

// Movieheight relative to window height
$(window).resize(shards.setMovieHeight);


// Sticky navbar
$(window).scroll(function() {
	if ($(window).scrollTop() > shards.navwrapp.offset().top - 1) {
		shards.navbar.addClass('navbar-fixed-top');
	} else {
		shards.navbar.removeClass('navbar-fixed-top');
	}
});


// Fluid scrolling
$('ul.nav li a[href*=#]').bind('click', function(e) {
	e.preventDefault();
	$('body').animate({ scrollTop: $(this.hash).offset().top }, 400);
	window.location.hash = this.hash;
	// edit: Opera requires the "html" elm. animated
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-39841511-1', 'kth.se');
ga('send', 'pageview');