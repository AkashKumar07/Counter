import React from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/Actions/counter';
import './Counter.css'
import Aux from '../../hoc/Aox/Aox'

class counter extends React.Component{

    componentDidMount(){
        console.log(this.props.counter)
    }
    render(){
        return(
            <Aux>
            <div className="Counter">
                <p className="txt">{this.props.counter}</p>
                <button className="button button1" onClick={this.props.inc}>increment</button>
                <button className="button button3" onClick={this.props.dec}>decrement</button>
            </div>
            </Aux>
        );
    }
}

const mapStateToProps= (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(actionTypes.increment()),
        dec: () => dispatch(actionTypes.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);