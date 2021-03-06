import React from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import queryString from "query-string";
import anger from "../assets/anger.png";
import sadness from "../assets/sadness.png";
import fear from "../assets/fear.png";

class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    const filterOptions = queryString.parse(this.props.location.search || "");
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        console.log("posts", posts);
        this.setState({
          loading: false,
          posts: posts.filter(post => {
            let meetsCritera = true;
            const postDate = new Date(post.createdAt);
            if (
              "year" in filterOptions &&
              filterOptions.year !== postDate.getFullYear().toString()
            ) {
              meetsCritera = false;
            }
            if (
              "month" in filterOptions &&
              filterOptions.month !== postDate.getMonth().toString()
            ) {
              meetsCritera = false;
            }
            if (
              "date" in filterOptions &&
              filterOptions.date !== postDate.getDate().toString()
            ) {
              meetsCritera = false;
            }
            return meetsCritera;
          })
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  deletePost = post => {
    fetch(`/api/posts/${post.id}`, {
      method: "DELETE"
    }).then(res => {
      if (res.ok) {
        this.setState(state => {
          return {
            posts: state.posts.filter(e => e.id !== post.id)
          };
        });
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid  text-center">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-4">
              <img className="inside-out-img" src={fear}></img>
            </div> */}
            <div className="col-12">
              <h1 className="header-text">Logs</h1>
            </div>
            {/* <div className="col-4">
              <img className="inside-out-img" src={sadness}></img>
            </div> */}
          </div>
        </div>
        <div className="row">
          {this.state.posts
            .sort()
            .reverse()
            .map((properties, i) => (
              <Post
                {...properties}
                key={i}
                onDelete={() => this.deletePost(properties)}
              />
            ))}
          {console.log(this.state.posts)}
        </div>
        <footer>
        <p className="fine-print text-muted">
            If you are in distress and are experiencing suicidal thoughts,
            confidential help is always available 24/7. Please call the National
            Suicide Prevention Lifeline at <a target="blank" href="https://suicidepreventionlifeline.org/">1-800-273-8255.</a> 
          </p>
        </footer>
      </div>
    );
  }
}

export default PostsListPage;
