import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { SiteDetails } from "./features/sites/SiteDetails";
import JobsPage from "./pages/JobsPage";
import Views from "./pages/Views";
import SignIn from "./features/auth/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();
  console.log(auth.isAuthenticated);

  return (
    <div className="w-full h-screen flex flex-col justify-end overflow-hidden  bg-[#F3F2EF]">
      <BrowserRouter>
        {auth.user && <Navbar />}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/details"} element={<SiteDetails />} />
            <Route path={"/jobs"} element={<JobsPage />} />
            <Route path={"/devices"} element={<SiteDetails />} />
            <Route path={"/view"} element={<Views />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
