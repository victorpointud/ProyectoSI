import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import RDENES from "./pages/RDENES";
import VENTAS from "./pages/VENTAS";
import PRODUCTOS from "./pages/PRODUCTOS";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registro":
        title = "";
        metaDescription = "";
        break;
      case "/inicio-sesin":
        title = "";
        metaDescription = "";
        break;
      case "/ver-perfil":
        title = "";
        metaDescription = "";
        break;
      case "/rdenes":
        title = "";
        metaDescription = "";
        break;
      case "/ventas":
        title = "";
        metaDescription = "";
        break;
      case "/productos":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/inicio-sesin" element={<Login />} />
      <Route path="/ver-perfil" element={<Profile />} />
      <Route path="/rdenes" element={<RDENES />} />
      <Route path="/ventas" element={<VENTAS />} />
      <Route path="/productos" element={<PRODUCTOS />} />
    </Routes>
  );
}
export default App;
