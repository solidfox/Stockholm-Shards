// No use of framewords in this code.

shards = {};
shards.setMovieHeight = function () {
	var movie = document.getElementById("conceptmovie");
	if (movie) {
		movie.height = 9 * movie.offsetWidth / 16;
	}
};