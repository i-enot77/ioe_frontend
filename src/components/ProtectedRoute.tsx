import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "react-oidc-context";

function ProtectedRoute() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
