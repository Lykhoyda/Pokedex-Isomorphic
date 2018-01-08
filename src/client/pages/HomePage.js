import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  getPokemonByName
} from '../actions';

class HomePage extends Component {
  componentDidMount() {
    this.props.getPokemonByName('eevee');
  }

  render() {
    return ( <div> Board </div>);
  }
}

const mapStateToProps = state => {
  return {
    data
  };
};

const loadData = ({
  dispatch
}) => dispatch(getPokemonByName('eevee'));



export default {
  loadData,
  component: connect(mapStateToProps, {
    getPokemonByName
  })(HomePage)
};