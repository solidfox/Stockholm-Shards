// No use of framewords in this code.

shards = {};
shards.setMovieHeight = function () {
	var movie = document.getElementById("movie");
	if (movie) {
		movie.height = window.innerHeight - 80;
	}
};