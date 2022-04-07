import React , {Component} from 'react';

export default class Forsale extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         headers:'Forsale',
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