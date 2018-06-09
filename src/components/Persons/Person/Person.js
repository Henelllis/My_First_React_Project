import React, { Component } from 'react';
import classes from './Person.css';
//import Radium from 'radium';
import withClass from'../../../hoc/withClass';
import Aux from'../../../hoc/Aux';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App'


class Person extends Component{
    //testing git
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor',props);
        this.inputElement = React.createRef();
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside ComponentWillMount');
      }
    
      componentDidMount(){
        console.log('[Person.js] Insied component did mount');
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
      }

      focus(){
          this.inputElement.current.focus();
      }


    render () {
        console.log('[Person.js] Insied render')

        return (
            <Aux  >
                <AuthContext.Consumer>
                    {auth => auth ? <p> I'm authenticated </p> : null }
                </AuthContext.Consumer>
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

//export default Radium(person);
export default withClass(Person, classes.Person);