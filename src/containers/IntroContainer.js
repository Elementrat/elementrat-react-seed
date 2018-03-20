import IntroComponent from '../components/IntroComponent'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
    return {
        bullets : state.data.bullets
    }
}

const mapDispatchToProps = state =>{
    return {

    }
}

const Intro = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarqueeComponent)

export default Intro