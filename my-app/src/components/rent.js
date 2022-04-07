import React , {Component} from 'react';

export default class ForRent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         headers:'ForRent',
      }
    }

    render() {
        return (
            <div>
                <h1>{this.state.headers}</h1>
            </div>
        )
    }
}