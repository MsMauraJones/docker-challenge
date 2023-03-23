import { useState } from "react";

const useForm = (props) => {
  const [formData, setFormData] = useState(props);

  const handleUpdate = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const reset = () => {
    setFormData(props);
  };
  return { formData, handleUpdate, reset };
};

export default useForm;
