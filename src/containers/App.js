import { connect } from 'react-redux';
import AppComponent from '../components/App';
import '../App.css';

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
