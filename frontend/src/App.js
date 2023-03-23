import { useState } from "react";
import "./App.css";
import PostForm from "./components/postForm";
import PostList from "./components/postList";

function App() {
  const [update, setUpdate] = useState();
  return (
    <div className="App">
      <h1>The Photo of the Day</h1>
      <div className="post-container">
        <PostForm update={update} setUpdate={setUpdate} />
        <PostList update={update} setUpdate={setUpdate} />
      </div>
    </div>
  );
}

export default App;
