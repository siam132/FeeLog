import React from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";

class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  deletePost = e => {                                     //temporary delete method that deletes whats currently on the page.... Needs to talk to the data base
    const temp = this.state.posts; 
   
    for( var i = 0; i < temp.length; i++){                //
      if ( temp[i].key === e.i) {
       temp.splice( temp[i].key , 1); 
          
      }
   }
   this.setState({
      posts: temp
  })
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid  text-center">
        <div className="row justify-content-center">
          {this.state.posts.map((properties, i) => (
            <Post {...properties} key={i} onDelete={() => this.deletePost(i)} />
           
          ))}
           {console.log(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default PostsListPage;
