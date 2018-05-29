import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';    
import Cockpit from  '../components/Cockpit/Cockpit';           
//import Persons from '../components/Persons/Person/Person'                 
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


export const AuthContext = React.createContext(false);
//import Radium, { StyleRoot } from 'radium';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor',props);
    this.state = {
    persons: [
      {id: 'sdfd' ,name: 'Henry', age: 28},
       {id: 'qwcdd',name: 'Arif', age: 45},
      {id: 'cxsas',name: 'Tyty', age: 68},
    ],
    showPersons: false,
    toggleClickCounter: 0,
    authenticated:false,
  };
  }

  componentWillMount(){
    console.log('[App.js] Inside ComponentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Insied component did mount')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE APP.js] Inside teh ShouldCompnenetUpdate', nextProps, nextState);
  //   return nextState.persons != this.state.persons ||
  //           nextState.showPersons != this.state.showPersons ;
  // }

  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE APP.js] Inside componetWillUpdate', nextProps);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[UPDATE APP.js] Inside getDerivedStateFromProps'
          , nextProps
        , prevState);
    return prevState;
  }


  getSnapshotBeforeUpdate(){
    console.log('[UPDATE APP.js] Inside getSnapshotBeforeUpdate');
    //save scroll position
  }

  componentDidUpdate(){
      console.log('[UPDATE APP.js] Inside componentDidUpdate');
  }
  
//   state =   {persons: [
//     {id: 'sdfd' ,name: 'Henry', age: 28},
//      {id: 'qwcdd',name: 'Arif', age: 45},
//     {id: 'cxsas',name: 'Tyty', age: 68},
//   ],
//   showPersons: false
// };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    } )
  }

  togglePersonsHandler = () =>{
    this.setState( (prevState,props ) => {
      return {      
        showPersons: !prevState.showPersons,
        toggleClickCounter: prevState.toggleClickCounter + 1, 
      }
    });
}

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  loginHandler = () =>{
      this.setState({authenticated: !this.state.authenticated})
  };

  render() {

    console.log('[App.js] Inside Render');
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){

      persons = (
          <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              /> 
              
      );

    }

    return (
        <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons= {this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}> 
            {persons} 
          </AuthContext.Provider>
        </Aux>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1' , null, 'Hi, i\'m a React Developer!!!'));
  }
}

//export default Radium(App);
export default withClass(App, classes.App);
