import React, {Component} from "react"
import CounterButton from "./CounterButton";

class Counter extends Component {

    constructor() {
        super(CounterButton.props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="counter">
                <div className={"counterButtons"}>
                    <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                </div>
                <div>
                    <span className={"count"}>{this.state.count}</span>
                </div>
                <div>
                    <button className={"reset"} onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }

    /**
     * Increments the count state by provided number
     * @param {Number} incrementBy amount to increment by
     */
    increment = (incrementBy) => {
        this.setState(
            (prevState) => {
                return {count: prevState.count + incrementBy}
            }
        )
    };

    /**
     * Decrements the count state by provided number
     * @param {Number} decrementBy
     */
    decrement = (decrementBy) => {
        this.setState(
            (prevState) => {
                return {count: prevState.count - decrementBy}
            }
        )
    };

    reset = () => {
        this.setState(
            () => {
                return {count: 0}
            }
        )
    }
}

export default Counter
