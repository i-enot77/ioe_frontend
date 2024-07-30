import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { TestPage } from "./pages/TestPage";
import Navbar from "./components/Navbar";
// import JobsPage from "./pages/JobsPage";
import { SiteDetails } from "./features/sites/SiteDetails";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-end overflow-hidden  bg-[#F3F2EF]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/test"} element={<TestPage />} />
          <Route path={"/details"} element={<SiteDetails />} />
          <Route path={"/jobs"} element={<JobsPage />} />
          <Route path={"/devices"} element={<SiteDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
