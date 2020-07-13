import React , {useState} from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About';

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
 
/*
 async componentDidMount(){
   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  this.setState({loading: true});

  const res = await axios.get(`https://api.github.com/users?client_id=c6c9dcb6370122a1a283
  &client_secret=a89e45458252935881c25c4a2e7d018c3142880e`)

  this.setState({users : res.data , loading: false});
  }*/

  // search users
const searchUsers = async (text) => {
  setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
  setUsers(res.data.items)
  setLoading(false)
  }

  //Get a single github user

   const getUser = async (username) => {
      setLoading( true)
      const res = await axios.get(`https://api.github.com/users/${username}`)
      setUser(res.data);
      setLoading(false)
    }

  // clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false)
  }

  // Set alert

  const showAlert = (msg,type) => {
    setAlert({msg,type})

    setTimeout(() => 
      setAlert(null),4000
    )
  }

    return(
      <Router>

    <div>
      <Navbar title="Github finder" icon="fab fa-github" />
      <Alert alert={alert}/>
      <Switch>
        <Route exact path="/" render={props => (
          <>
      <Search searchUsers={searchUsers} 
      clearUsers={clearUsers} 
      setAlert={showAlert}
      />
      <Users loading={loading} users={users} />
          </>
        )} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:login" render={props => (
          <User {...props} 
          getUser={getUser} 
          user={user}
          loading={loading}
          />
        )} />
      </Switch>

    </div>

    </Router>
    );
 


}

export default App;
