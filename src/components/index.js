import React, {Component} from 'react';
import Menu from './Menu';
import Content from './Content';
import { getUsersPost } from '../api';
import { LocalStorage } from "../helpers/storage";
import '../style/normalize.css';
import '../style/layout.css'


class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        usersPost : [],
        currentUser : {},
        myState: true,
      }
      this.onSelect = this.onSelect.bind(this);
  }

  onSelect(user){

    this.setState({ currentUser : user });
    this.setState({ myState : false });

    getUsersPost(user.id)
    .then(response => response.json())
    .then(post => {
      this.setState({ usersPost : post });
      LocalStorage.set("usersPostAmount", post.length)
    }).catch(error => console.log(error))

    console.log(this.state.usersPost);
  }


  render(){
    const checkstate=this.state.myState;

    const divStyle = checkstate ? (
        {display: 'block'}
   ) : (
     {display: 'none'}
   );
    return(

      <div className="container">
        <Menu onSelect={this.onSelect}/>
         <div className="information" style={divStyle} > * Please select user for more information</div>
        <Content usersPost={this.state.usersPost} currentUser={this.state.currentUser}/>
      </div>
    )
  }
}

export default App;
