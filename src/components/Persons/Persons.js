import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
    
constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor',props);
    this.lastPersonRef = React.createRef();

    }
    
    componentWillMount(){
    console.log('[Persons.js] Inside ComponentWillMount');
    }
    
    componentDidMount(){
        console.log('[Persons.js] Insied component did mount');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE persons.js] Inside this.componentWillReceiveProps',nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Update Persons.js] Inside teh ShouldCompnenetUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //             nextProps.changed !==this.props.changed;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componetWillUpdate', nextProps);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }
    
    
    render(){
        console.log('[Persons.js] Insied render')

        return this.props.persons.map((person, index) => {
                return  <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age}
                    ref={this.lastPersonRef}
                    position={index}  
                    key={person.id}              
                    changed={(event) => this.props.changed(event, person.id)}
                  />     
             });

            
    }
}   

export default Persons;
