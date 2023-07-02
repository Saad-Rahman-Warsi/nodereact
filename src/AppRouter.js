import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Facilities" element={<Facilities />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;