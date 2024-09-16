import {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styles from "../Register/Register.module.css";
import {UserContext} from "../../context/user";

const validateLogin = (input) => {
  let errors = {};
  if (!input.email) errors.email = "Email is required";
  if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = "Email is invalid";
  if (!input.password) errors.password = "Password is required";
  return errors;
};
function Login() {
  const {login, user} = useContext(UserContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validateLogin({
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
      await login(input);
    }
  };

  useEffect(() => {
    if (user?.id) {
      navigate(`/profile/${user.id}`);
    }
  }, [user, navigate]);

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
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
