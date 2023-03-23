import axios from "axios";
import { useEffect, useState } from "react";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (() => {
      axios
        .get("http://localhost:4000/api/posts")
        .then((res) => {
          if (res.data) {
            setPosts(res.data);
          }
        })
        .catch(console.error);
    })();
  }, [props.update]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:4000/api/posts/${id}`).then((res) => {
      props.setUpdate(res);
    });
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto'
  }
  return (
    <>
      <div className="articles-container">
        {posts &&
          posts.map((post, index) => (
            <article className="article" key={index}>
              <img
                className="article-image"
                src={post.photoUrl}
                alt="random"
                style={imgStyle}></img>
              <p className="article-description">{post.description}</p>
              <button
                className="delete-button"
                onClick={(e) => handleDelete(e, post._id)}>
                Delete
              </button>
            </article>
          ))}
      </div>
    </>
  );
};

export default PostList;
