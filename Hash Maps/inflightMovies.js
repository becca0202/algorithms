//Problem:
//Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

//O(n) Time and O(n) Space where n is the # of elements in the moviesLengths array
function inflightMovies(flightLength, movieLengths) {
  let runtimes = {};
  for (let i = 0; i < movieLengths.length; i++) {
    let curMovieTime = movieLengths[i];
    if (runtimes[flightLength - curMovieTime]) {
      return true;
    }
    runtimes[curMovieTime] = 1;
  }
  return false;
}
