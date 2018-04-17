import React,{Component} from 'react'

import { getUser } from '../../api'



class Menu extends Component{

  constructor(props){
    super(props);

    this.state = {
      users : []
    }
  }

  componentDidMount(){
    getUser()
    .then(response => response.json())
    .then(users => this.setState({ users : users }))
    .catch(error => console.log(error))
  }


  render() {

    const { users } = this.state;
    const { onSelect } = this.props;

    if(users.length > 0){
      return(
        <div className="menu">
          <ul>
            {
              users.map((user,key) => <li onClick={() => onSelect(user)} key={key}>{user.name} {user.surname}</li>)
            }
          </ul>
        </div>
      );
    }else{
      return null;
    }
  }
};


export default Menu;
