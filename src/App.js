import React , {Component} from 'react';
import Navbar from './components/layout/Navbar'


import Users from './components/users/Users';

class App extends Component {

  render(){

    return(

    <div >
      <Navbar title="Github finder" icon="fab fa-github" />
      <Users />
    </div>

    );
 
  }

}

export default App;
