import React, {Component} from "react"
import "./Counter.css"
import PropTypes from "prop-types"

class CounterButton extends Component {

    render() {
        return (
            <div className="counterIncrement">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }
}


CounterButton.defaultProps = {
    by: 1,
};

CounterButton.propTypes = {
    by: PropTypes.number,
    incrementMethod: PropTypes.func.isRequired,
    decrementMethod: PropTypes.func.isRequired
};


export default CounterButton
export {CounterButton}
