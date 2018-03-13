import MarqueeComponent from '../components/MarqueeComponent'
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

const Marquee = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarqueeComponent)

export default Marquee