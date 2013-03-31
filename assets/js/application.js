shards.navbar = $('#navbar');
shards.navbar.height = shards.navbar.height();
shards.navwrapp = $('#navbarwrapp');
shards.appendCommentIcon = function () {
	parent = $(this);
	var comment = $("<span class='label label-info commentIcon'><i class='icon-info-sign icon-white'></i></span>");
	parent.append(comment);
	var topOffset = parent.innerHeight()/2 - comment.outerHeight()/2;
	comment.css({
		'top': topOffset,
		'position': 'absolute',
		'left': -comment.outerWidth()-7+'px'
	});
};
$('#navbarwrapp').css('height', shards.navbar.height);


// Movieheight relative to window height
$(window).resize(function() {
	shards.setMovieHeight();
});


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
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 400);
   window.location.hash = this.hash;
   // edit: Opera requires the "html" elm. animated
});


// Open all google docs links in new page
// Does not work on popovers - needs to be included in callback

$("a[href*='docs.google.com']").attr("target", "_blank");


// Popovers
$("a[data-toggle=popover]")
  .popover({html:true})
  .click(function(e) {
		e.preventDefault();
  });
$("p[data-toggle=popover]")
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

// Carousels
$('.carousel').carousel();
