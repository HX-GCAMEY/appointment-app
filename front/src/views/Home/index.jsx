import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Login from "../Login";
import Profile from "../Profile";
import Register from "../Register";

function Home() {
  return (
    <div>
      <Navbar />
      <Services />
      <Profile />
      <Register />
      <Login />
    </div>
  );
}

export default Home;
