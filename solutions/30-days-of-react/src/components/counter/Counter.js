import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0
    }
    
    addOne = () => this.setState({count: this.state.count + 1});
    minusOne = () => this.setState({count: this.state.count - 1});
  
    render() {
        return (
            <div className="counter">
                <h4>{this.state.count}</h4>
                <button onClick={this.addOne} > +1 </button>
                <button onClick={this.minusOne} > -1 </button>
            </div>
        )
    }
  }