import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { SiteDetails } from "./features/sites/SiteDetails";
import JobsPage from "./pages/JobsPage";
import Views from "./pages/Views";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-end overflow-y-auto  bg-[#F3F2EF]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/details"} element={<SiteDetails />} />
          <Route path={"/jobs"} element={<JobsPage />} />
          <Route path={"/devices"} element={<SiteDetails />} />
          <Route path={"/view"} element={<Views />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
