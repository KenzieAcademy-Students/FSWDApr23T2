// Your Code Here!
let baseMovies = movies;
let otherMovies = movieDetails;
// if (movies.length > movieDetails.length) {
//   baseMovies = movieDetails;
//   otherMovies = movies;
// }

const movieList = document.getElementById("movies");
const searchForm = document.getElementById("search-bar");
const resetButton = document.getElementById("clear-form");

resetButton.addEventListener("click", (e) => {
  renderFilteredMovies(combinedMovies);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target[0].value;
  const cast = e.target[1].value;

  const filteredMovies = filterMovies(title, cast);
  renderFilteredMovies(filteredMovies);
});

function findSameMovie(arr, movie) {
  return arr.find(
    (otherMovie) =>
      movie.title === otherMovie.title &&
      parseInt(otherMovie.release_date) === movie.year
  );
}

function renderFilteredMovies(movies) {
  movieList.innerHTML = "";
  movies.forEach((movie) => movieList.append(renderMovieCard(movie)));
}

function renderMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  console.log(movie);

  const img = document.createElement("img");
  img.src = movie.imageUrl;
  img.classList.add("movie-poster");

  const title = document.createElement("h3");
  title.innerText = movie.title;

  const cast = document.createElement("p");
  cast.innerText = movie.cast.join(", ");

  const year = document.createElement("p");
  year.innerText = movie.year;

  card.append(img, title, cast, year);

  return card;
}

function filterMovies(title, cast) {
  return (
    combinedMovies
      // Filter for movies including the title value
      .filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      )
      // Filter for movies including the cast value
      .filter((movie) =>
        movie.cast.some((castMember) =>
          castMember.toLowerCase().includes(cast.toLowerCase())
        )
      )
  );
}

const combinedMovies = baseMovies
  .map((movie) => {
    // Check to see that there is an equivalent movie in the other array.
    // Properties to compare: movie.title === otherMovie.title
    //                    and movie.year === parseInt(otherMovie.release_date)
    const otherMovie = findSameMovie(otherMovies, movie);

    if (!otherMovie) return;

    return { ...movie, ...otherMovie };
  })
  .filter((movie) => movie !== undefined);

renderFilteredMovies(combinedMovies);
