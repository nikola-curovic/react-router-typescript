import { useState } from "react";
import { IUserData } from "../types";

const AddUser = () => {
  const [id, setId] = useState<number>(100);
  const [formData, setFormData] = useState<IUserData>({
    username: "",
    city: "",
    company: "",
    email: "",
  });

  const addFormData = (value: string, key: string) => {
    setFormData({ ...formData, [key]: value, id: id });
    setId((id) => id + 1);
  };

  const addNewUser = () => {
    let users = localStorage.getItem("users");

    if (users) {
      let userList = JSON.parse(users);
      userList.push(formData);
      localStorage.setItem("users", JSON.stringify(userList));
    } else {
      localStorage.setItem("users", JSON.stringify([formData]));
    }
  };

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        addNewUser();
      }}
    >
      <input
        className="form-control"
        placeholder="User Name"
        onChange={(e) => addFormData(e.target.value, "username")}
      />
      <input
        className="form-control"
        placeholder="Email"
        onChange={(e) => addFormData(e.target.value, "email")}
      />
      <input
        className="form-control"
        placeholder="City"
        onChange={(e) => addFormData(e.target.value, "city")}
      />
      <input
        className="form-control"
        placeholder="Company"
        onChange={(e) => addFormData(e.target.value, "company")}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
