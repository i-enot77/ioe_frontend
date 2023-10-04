import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import { TestPage } from "./pages/TestPage"
import SitesDetails from "./pages/SitesDetails"
import Navbar from "./components/navbar/Navbar"
import JobsPage from "./pages/JobsPage"

function App() {
  return (
    <div className="w-full h-screen overflow-hidden  bg-[#F3F2EF]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/test"} element={<TestPage />} />
          <Route path={"/details"} element={<SitesDetails />} />
          <Route path={"/jobs"} element={<JobsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
