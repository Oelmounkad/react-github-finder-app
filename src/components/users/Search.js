import React, {useState} from 'react'

 const Search = ({searchUsers,clearUsers, setAlert}) => {

  const [text, setText] = useState('')

const onChange = (e) => setText(e.target.value)
const onSubmit = (e) => {
    e.preventDefault()
    if(text === ''){
        setAlert('Please enter a name', 'danger')
    }
    else{
         searchUsers(text);
         setText('')
    }
  
}

        return (
            <>
   <form onSubmit={onSubmit} className="form-group">
      <input type="text" className="form-control" 
      name="text" placeholder="Search users..." 
      value={text} 
      onChange={onChange}/>
      <button type="submit" className="btn btn-primary btn-block">Search</button>
   </form>
   <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
 
   </>
        )
    
}

export default Search
