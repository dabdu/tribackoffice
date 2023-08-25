import { Navigate, Outlet, useLocation } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token ? true : false;
};
const ProtectedRoute = () => {
  const location = useLocation();
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" from={location} />;
};

export default ProtectedRoute;
