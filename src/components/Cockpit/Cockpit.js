import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Auxillary'
const cockpit = (props) =>{

    const assignedClasses = []
    let btnClass = '';
    

    if(props.showPersons){
        btnClass = classes.Red;
    }


    if(props.persons.length <= 2 ){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }


    return (      
    <Aux>  
        <h1> {props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}> I guess this works </p>
        <button 
            className={this.btnClass}
            onClick={props.clicked}>
            Toggle Persons
        </button>
        <button
            onClick={props.login}>
            Log in
        </button>
    </Aux>
      );
};

export default cockpit;