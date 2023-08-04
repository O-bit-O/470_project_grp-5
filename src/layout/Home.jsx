import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";

const Home= () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Home;