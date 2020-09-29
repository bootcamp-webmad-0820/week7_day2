import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counterValue: 0
        }
    }

    handleCounterClick = () => this.setState({
        counterValue: ++this.state.counterValue
    })

    render() {
        return (
            <>
                <h3>Contador con estado</h3>
                <p>El contador se ha ejecutado {this.state.counterValue} veces</p>
                <button onClick={this.handleCounterClick}>+</button>
            </>
        )
    }
}

export default Counter