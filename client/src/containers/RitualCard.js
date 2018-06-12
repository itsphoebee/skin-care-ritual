import React, { Component } from 'react';
import photo from '../adult-hand-cream-hands-1029896.jpg'

class RitualCard extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

  handleOnClick = (event) => {
    this.setState({
      count: this.state.count += 1
    })
  }
  render() {
    const { ritual } = this.props
    debugger
    return(
      <div className="ritual" key={ritual.id}>
        <div> {ritual.name}
          <br/><br/>
          {this.state.count}
          <button
            onClick={this.handleOnClick}
            >
            Click
          </button> <br/>
          <img src={photo} width="30%" alt="default" />
        </div>
      </div>
    )
  }
}

export default RitualCard
