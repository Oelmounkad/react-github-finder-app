import React, { Component } from 'react'

export class Search extends Component {

    state = {
        text :''
    }

onChange = (e) => this.setState({[e.target.name] : e.target.value})
onSubmit = (e) => {
    e.preventDefault()
    if(this.state.text === ''){
        this.props.setAlert('Please enter a name', 'danger')
    }
    else{
         this.props.searchUsers(this.state.text);
         this.setState({text : ''})
    }
  
}

    render() {
        return (
            <>
   <form onSubmit={this.onSubmit} className="form-group">
      <input type="text" className="form-control" 
      name="text" placeholder="Search users..." 
      value={this.state.text} 
      onChange={this.onChange}/>
      <button type="submit" className="btn btn-primary btn-block">Search</button>
   </form>
   <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
 
   </>
        )
    }
}

export default Search
