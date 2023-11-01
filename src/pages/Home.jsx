import { Outlet } from "react-router-dom";
import Footer from "../features/Footer";
import NavBar from "../features/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
