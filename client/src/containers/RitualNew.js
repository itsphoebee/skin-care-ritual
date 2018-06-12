import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { createRitual } from '../actions/index';

class RitualNew extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      category: '' ,
      description: '',
      items: []
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { createRitual, history } = this.props;
    createRitual(this.state, history);
  }

  render(){
    return (
      <div >
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name:
          </label>
          <br></br>
          <input
            type="text"
            name="name"
            placeholder="Ritual Name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
           <br></br>
           <label>
             Category:
           </label>
           <br></br>
            <input
             type="text"
             name="category"
             placeholder="Category"
             value={this.state.category}
             onChange={this.handleOnChange}
            />
            <br></br>
            <label>
              Description:
            </label>
            <br></br>
            <textarea
              style={{width: 300, height: 150}}
              type="text"
              name="description"
              placeholder="Add the description and steps to your ritual here. Be detailed!"
              value={this.state.description}
              onChange={this.handleOnChange}
            />
            <br></br>
            <br></br>
          <Button
            bsStyle="btn btn-outline-info"
            type="submit"
          >
            Add Ritual
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createRitual
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(RitualNew);
