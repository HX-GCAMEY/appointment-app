import {useState, createContext} from "react";
import axios from "axios";

export const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
  isLogged: false,
  getAppointments: () => {},
  appointments: [],
});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const login = async (input) => {
    try {
      const {data} = await axios.post(
        "http://localhost:3000/users/login",
        input
      );

      setUser(data.user);
      setIsLogged(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLogged(false);
  };

  const register = async (input) => {
    try {
      await axios.post("http://localhost:3000/users/register", input);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const getAppointments = async (id) => {
    try {
      const {data} = await axios.get(`http://localhost:3000/users/${id}`);
      setAppointments(data.appointments);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isLogged,
        getAppointments,
        appointments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
