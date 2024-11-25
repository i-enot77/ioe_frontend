import { useAuth } from "react-oidc-context";

function SignOut() {
  const auth = useAuth();

  //   const handleSignOut = () => {
  //     auth.signoutRedirect();
  //   };

  const signoutRedirect = () => {
    const clientId = "4u2mb54i0aj1uj7g1r37pb47u0";
    const logoutUri = "http://localhost:5173/signin";
    const cognitoDomain =
      "eu-north-1hnezll8bn.auth.eu-north-1.amazoncognito.com";

    window.location.href = `https://${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
    auth.removeUser();
  };
  return (
    <nav>
      {/* Your navigation links */}
      {auth.isAuthenticated && (
        <button onClick={signoutRedirect}>Sign Out</button>
      )}
    </nav>
  );
}

export default SignOut;
