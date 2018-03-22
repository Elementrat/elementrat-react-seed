import { connect } from 'react-redux';
import IntroComponent from '../components/IntroComponent';

const mapStateToProps = state => (
  {
    bullets: state.data.bullets,
  }
);


const mapDispatchToProps = state => ({

});

const Intro = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroComponent);

export default Intro;
