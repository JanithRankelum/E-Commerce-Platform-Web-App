import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

import "./App.css";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <NavBar />
        </section>

        <section>
          <Outlet />
        </section>

        {/* ------------- Footer -------------------- */}
        <Footer />
        {/* ------------- Footer End -------------------- */}
      </main>
    </div>
  );
}

export default Layout;
