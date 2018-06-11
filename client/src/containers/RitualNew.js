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

  handleOnSubmit = event => {
    event.preventDefault();
    const { createRitual } = this.props;
    createRitual(this.state);
  }

  render(){
    return (
      <div >
        <form onSubmit={this.handleOnSubmit.bind(this)} >
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

          <Button className="btn btn-outline-info" type="submit"> <span className="glyphicon glyphicon-ok"></span> Add Ritual </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const ritual = state.rituals.find(r => r.id === +ownProps.match.params.ritualId)
  if (ritual) {
    return { ritual }
  } else {
    return { ritual: {} }
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createRitual
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RitualNew);
