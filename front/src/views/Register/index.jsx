import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/user";

import styles from "./Register.module.css";

const validateRegister = (input) => {
  let errors = {};
  if (!input.email) errors.email = "Email is required";
  if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = "Email is invalid";
  if (!input.name) errors.name = "Name is required";
  if (!input.address) errors.address = "Address is required";
  if (!input.phone) errors.phone = "Phone is required";
  if (!input.profile_pic) errors.profile_pic = "Profile Picture is required";
  if (!input.password) errors.password = "Password is required";
  return errors;
};

function Register() {
  const {register} = useContext(UserContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    profile_pic: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    profile_pic: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validateRegister({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length) {
      alert("Please fill the form correctly");
    } else {
      await register(input);
      alert("User registered successfully");
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={input.email}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={input.name}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={input.address}
        />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={input.phone}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>Profile Picture</label>
        <input
          type="text"
          name="profile_pic"
          placeholder="Profile Picture"
          onChange={handleChange}
          value={input.profile_pic}
        />
        {errors.profile_pic && <span>{errors.profile_pic}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={input.password}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
