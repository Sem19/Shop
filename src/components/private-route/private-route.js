import { Navigate, Outlet } from "react-router";

const PrivateRoute = (props) => {
  if (localStorage.getItem("auth")) return <Outlet {...props} />;
  else return <Navigate to={"/login"} />;
};
export default PrivateRoute;
