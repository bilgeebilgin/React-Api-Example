import React, { Component } from 'react';
import _ from 'lodash'


class Content extends Component {

  constructor(props){
    super(props);

    this.state = {
     usersPost:[] ,
     currentUser:{},
    }

  }


 componentWillReceiveProps(nextProps){
   this.setState({
     usersPost:nextProps.usersPost,
     currentUser: nextProps.currentUser,
   });
 }

  search(event){
    const value = event.target.value;
    const usersPost = this.state.usersPost;
   this.setState({ usersPost : _.filter(usersPost,function(usersPost) {
    return usersPost.title.includes(value); })});

    console.log('Filter  '+value);
    console.log('Filter  '+usersPost);
  }

  sort(){
    const usersPost = this.state.usersPost;
   this.setState({ usersPost : _.sortBy(usersPost,function(usersPost) {
    return usersPost.title; })});
  }
  //_.sortBy(users, [function(o) { return o.user; }]);


  render(){

    const { usersPost , currentUser } = this.state;

    //const{usersPost,currentUser}=this.props;
    if(usersPost.length > 0 ){
      return(
        <div className="content">

          <input placeholder={"Search by title"} type="text" onChange={(e) => this.search(e)}/>
          <input  className="btnSort" value="Sort Table"type="submit" onClick={() => this.sort()}/>

          <table>
            <thead>
              <tr>
                <td>User</td>
                <td>Title</td>
                <td>Body</td>
              </tr>
            </thead>

            <tbody>
                {usersPost.map((post,key) =>
                <tr key={key}>
                  <td>{currentUser.name}</td>
                  <td>{post.title}}</td>
                  <td>{post.body}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      )
    }else{
      return null;
    }
  }

}

export default Content
