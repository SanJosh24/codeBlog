import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditBlog from './EditBlog';

class BlogsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({ loggedInUser: this.props.userInSession });
  }

  componentWillReceiveProps(nextprops){
    this.setState({ loggedInUser: nextprops.userInSession });
  }

  componentDidMount() {
    this.getSingleBlog();
  }

  getSingleBlog = () => {
    const { params } = this.props.match;
    axios.get(process.env.REACT_APP_BASE_URL + `/blogs/${params.id}`)
    .then( responseFromApi =>{
        const theBlog = responseFromApi.data;
        this.setState(theBlog);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if(!this.state.title){
        this.getSingleBlog();
        } else {
        //                                                    {...props} => so we can have 'this.props.history' in Edit.js
        //                                                                                          ^
        //                                                                                          |
        return <EditBlog theBlog={this.state} getTheBlog={this.getSingleBlog} {...this.props} />
        }
    }


    // DELETE PROJECT:
  deleteProject = () => {
      if(this.state.owner === this.state.loggedInUser._id) {

        const { params } = this.props.match;
        axios.delete(process.env.REACT_APP_BASE_URL + `/blogs/${params.id}`)
        .then( responseFromApi =>{
          this.props.history.push('/blogs'); // !!!         
        })
        .catch((err)=>{
          console.log(err)
        })
      }
  }


  render() {
    const BlogId = (this.props.match.params.id);
    // console.log(this.state.loggedInUser);

    return (
      <div className="BlogsDetails">
        <h1>BlogsDetails page!</h1>
        
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        
        {/* <button onClick={() => this.deleteProject()}>Delete</button> */}

        {this.renderEditForm()}

        <Link to={'/blogs'}>Back to Blogs</Link>

        
      </div>
    );
  }
}
export default BlogsDetails;