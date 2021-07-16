import React from 'react';
import axios from 'axios';
import PostApp from './PostApp';
class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            users:[]
        }
    }



 displayUsersFromServer = async()=>{

    await axios.get('http://127.0.0.1:8080/').then( response=> { this.setState({users:response.data.users},()=>{ return this.state.users })}).catch((error)=>{ console.log(error)})


}//end of the method   




componentDidMount(){
    this.displayUsersFromServer();
}

 render(){
     return(
         <div>
         {
             this.state.users.map((user) =>{ 
                 return(
                     <div key={user.id}> 
                     <h1>{user.name}</h1>
                         </div>
                 )
              })
         }

         <PostApp />

             </div>
     )
 }   
}

export default App;