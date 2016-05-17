$(document).ready(function () {
  getMovies();

  // add a movie
  $('#movieSubmit').on('click', postMovie);
});

function getMovies() {
  $.ajax({
    type: 'GET',
    url: '/movies',
    success: function (movies) {

        $('#movieList').append('<tbody>');
      movies.forEach(function (movie) {

        var fave = movie.favorite==true?'&#9733;':'';

        $('#movieList').append('<tr><td>' + movie.title +
          '</td><td> ' + movie.year +
          ' </td><td> ' + movie.genre +
          ' </td><td> ' + movie.director +
          ' </td><td> ' + movie.main_actor +
          ' </td><td> ' + fave + '</td></tr>'
        );
      });
        $('#movieList').append('</tbody></table>');
    },
  });


}

function postMovie() {
  event.preventDefault();

  var movie = {};

  $.each($('#movieForm').serializeArray(), function (i, field) {
    movie[field.name] = field.value;
  });

  $.ajax({
    type: 'POST',
    url: '/movies',
    data: movie,
    success: function (data) {
      console.log('Successful post!');
    },
  });
}
