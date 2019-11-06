import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

/* Smart 컴포넌트 */
class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="Movie">
        <div className="Movie__columns">
          <MoviePoster poster={this.props.poster} alt={this.props.title} />
        </div>
        <div className="Movie__columns">
          <h1>{this.props.title}</h1>
          <div className="Movie__Genres">
            {this.props.genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
          </div>
          <div className="Movie__Synopsis">
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters" />
          </div>
        </div>
      </div>
    )
  }
}

class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  render() {
    return (
      <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie__Poster"/>
    )
  }
}

class MovieGenres extends Component {
  static propTypes = {
    genre: PropTypes.string.isRequired,
  };

  render() {
    return (
      <span className="Movie__Genre">{this.props.genre}</span>
    )
  }
}


/* Dumb 컴포넌트 */ /*
function Movie({title, poster, genres, synopsis}){
    return (
      <div className="Movie">
        <div className="Movie__columns">
          <MoviePoster poster={poster} alt={title} />
        </div>
        <div className="Movie__columns">
          <h1>{title}</h1>
          <div className="Movie__Genres">
            {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
          </div>
          <p className="Movie__Synopsis">
            {synopsis}
          </p>
        </div>
      </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
      <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenres({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MovieGenres.propTypes = {
  genre: PropTypes.string.isRequired,
};
*/

export default Movie;
