shards.navbar = $('#navbar');
shards.navbar.height = shards.navbar.height();
shards.commentIcon = function () {
	return "<i class='icon-comment'></i>";
};
$('#navbarwrapp').css('height', shards.navbar.height);


// Movieheight relative to window height
$(window).resize(function() {
	shards.setMovieHeight();
});


// Sticky navbar
$(window).scroll(function() {
	var navwrapp = $('#navbarwrapp');
	if ($(window).scrollTop() > navwrapp.offset().top - 1) {
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
      .append(shards.commentIcon());
$("p[data-toggle=popover]")
      .tooltip({
      	placement:"right",
		trigger:"hover",
		title:"Klicka för motivering"
      });

// Carousels
$('.carousel').carousel();
