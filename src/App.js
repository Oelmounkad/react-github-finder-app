import React , {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';

import axios from 'axios'


class App extends Component {
  state = {
    users : [],
    loading : false
  }

 async componentDidMount(){
   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  this.setState({loading: true});

  const res = await axios.get(`https://api.github.com/users?client_id=c6c9dcb6370122a1a283
  &client_secret=a89e45458252935881c25c4a2e7d018c3142880e`)

  this.setState({users : res.data , loading: false});
  }

  render(){

    return(

    <div >
      <Navbar title="Github finder" icon="fab fa-github" />
      <Users loading={this.state.loading} users={this.state.users} />
    </div>

    );
 
  }

}

export default App;
