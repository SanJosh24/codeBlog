import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
       };
  }

  componentWillMount() {
    this.getAllProfileBlogs();

    this.setState({ loggedInUser: this.props.userInSession });
  }

  componentWillReceiveProps(nextprops){
    this.setState({ loggedInUser: nextprops.userInSession });

  }

 

  getAllProfileBlogs = () =>{
    axios.get(`http://localhost:5000/api/profile/${this.props.match.params.id}/blogs`)
    .then(responseFromApi => {
      console.log("this is the response from the axios get -=-=-=-=",responseFromApi.data);


      let othersBlogs = []


      responseFromApi.data.favoriteUsers.forEach((onePerson)=>{
        console.log("the first for each 1111111111111111111111", onePerson);

        onePerson.blogs.forEach((oneBlog)=>{
          console.log("the third for each 33333333333333333333333");
          othersBlogs.push(oneBlog)
        })
        console.log("the ending of the first for each 444444444444444444");    
      })

      console.log("the state after the axios call $$$$$$$$$$$$$$$$$$$$$$$$$$$ ", othersBlogs);
      this.setState({
        theProfile: responseFromApi.data,
        othersBlogs: othersBlogs,
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  showUserBlogs() {
    if(this.state.theProfile) {
      console.log("the state when trying to show blogs.. ..... ...... .. .... .... .", this.state.theProfile.blogs)
      return (
        this.state.theProfile.blogs.map((blog, index) => {
         return <div key={index}>
            <h3> {blog.title} </h3>
            <p>{blog.description}</p>
          </div>
        })
      )
    }
  }

  showFavoriteUserBlogs() {
    if(this.state.othersBlogs) {
      console.log("the state when trying to show favorite users blogs 909090909090909090909", this.state.othersBlogs.blogs);
      return (
        this.state.othersBlogs.map((blog, index) => {
          return <div key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        })
      )
    }
  }

  componentDidMount() {
    this.getAllProfileBlogs();
  }

  render() {
      console.log('=this is the state entering profile page',this.state);
      // console.log('=this is the props entering profile page $$$$$$$$$$$',this.state.loggedInUser.username);
      return (
        <div className="ProfilePage">
          <div className="profileHead">
            <h1>{this.state.loggedInUser && this.state.loggedInUser.username}'s Profile</h1>
            <h3>Post</h3>
            <form action="">
              <label>Blog Title</label>
              <input type="text"/>
              <br/>
              <textarea name="" id="" cols="150" rows="10" placeholder="Post a blog"></textarea>
              <br/>
              <button>Post</button>
            </form>
          <br/>

          {this.showUserBlogs()}
          {this.showFavoriteUserBlogs()}
          </div>
      </div>
    );
  }
  }
  
export default ProfilePage;