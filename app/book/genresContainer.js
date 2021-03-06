import { connect } from 'react-redux';
import GenresComponent from './genresComponent';
import store from '../store';

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks
  };
}

const GenresContainer = connect(mapStateToProps)(GenresComponent);

export default GenresContainer;
