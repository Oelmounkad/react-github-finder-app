import React , {Component} from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About';

class App extends Component {
  state = {
    users : [],
    user: {},
    loading : false,
    alert: null
  }
/*
 async componentDidMount(){
   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  this.setState({loading: true});

  const res = await axios.get(`https://api.github.com/users?client_id=c6c9dcb6370122a1a283
  &client_secret=a89e45458252935881c25c4a2e7d018c3142880e`)

  this.setState({users : res.data , loading: false});
  }*/

  // search users
searchUsers = async (text) => {
  this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    console.log(res.data)
  this.setState({users : res.data.items , loading: false});
  }

  //Get a single github user

    getUser = async (username) => {
      this.setState({loading: true})
      const res = await axios.get(`https://api.github.com/users/${username}`)
      console.log(res.data)
      this.setState({user : res.data , loading: false});
    }

  // clear users
  clearUsers = () => {
    this.setState({users : [], loading:false})
  }

  // Set alert

  setAlert = (msg,type) => {
    this.setState({
      alert: {msg,type}
    })

    setTimeout(() => 
      this.setState({alert : null}),4000
    )
  }

  render(){

    return(
      <Router>

    <div>
      <Navbar title="Github finder" icon="fab fa-github" />
      <Alert alert={this.state.alert}/>
      <Switch>
        <Route exact path="/" render={props => (
          <>
      <Search searchUsers={this.searchUsers} 
      clearUsers={this.clearUsers} 
      setAlert={this.setAlert}
      />
      <Users loading={this.state.loading} users={this.state.users} />
          </>
        )} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:login" render={props => (
          <User {...props} 
          getUser={this.getUser} 
          user={this.state.user}
          loading={this.state.loading}
          />
        )} />
      </Switch>

    </div>

    </Router>
    );
 
  }

}

export default App;
