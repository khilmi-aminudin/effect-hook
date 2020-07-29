import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             name : ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} time`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log(this.state.name + this.state.count)
            document.title = `Clicked ${this.state.count} time`
        }
    }
    
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.name}
                    onChange={ e => this.setState({name : e.target.value})}                     
                />
                <br/>
                <button onClick={() => this.setState({ count: this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default ClassCounterOne
