import axios from 'axios';
import React from 'react';


class PostApp extends React.Component{
constructor(props){
    super(props)
    this.state = {
        username:'',
        lastname:'',
        users:[]
    }
}

submitHandler = (event)=>{
    event.preventDefault();
    const [ username ] = this.state.username;
    const [ lastname ] = this.state.lastname;

    this.PostNewUser(username , lastname);
}


PostNewUser = async (username , lastname)=>{

 await axios({
    method:'POST',
    url:'http://127.0.0.1:8080/',
    data:{
    name:username,
    lastName:lastname
    },
    Headers:{'Content-Type':'application/json'}
}).then( response =>{  console.log(response) }).catch( error =>{ console.log(error)} )
}

changeHandler = (event) =>{
  this.setState({[event.target.name]:[event.target.value]} , ()=>{ return this.state})

}

render(){

    return(
        <div>
            <h1>Add a new User in the db</h1>
            <form onSubmit={this.submitHandler}>
            <input type="text"  name="username" placeholder="username" onChange={this.changeHandler}/>
            <input type="text"  name="lastname" placeholder="lastname" onChange={this.changeHandler}/>
            <button type="submit">Add user</button>
            </form>
        </div>
    )//end of the return
}//end of the render method
}


export default PostApp;