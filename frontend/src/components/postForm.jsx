import axios from "axios";
import useForm from "../hooks/useForm";
const PostForm = (props) => {
  const { formData, handleUpdate, reset } = useForm({
    photoUrl: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/posts", formData)
      .then((res) => {
        props.setUpdate(res);
        reset();
      })
      .catch(console.error);
  };
  const handleReset = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <label>
          Photo Url
          <input
            type="text"
            value={formData.photoUrl}
            name="photoUrl"
            onChange={handleUpdate}
            required
          />
        </label>
        <label>
          Note
          <input
            type="text"
            value={formData.description}
            name="description"
            onChange={handleUpdate}
            required
          />
        </label>
        <div className="buttons-container">
          <button className="submit" type="submit">
            Add
          </button>
          <button className="reset" type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
