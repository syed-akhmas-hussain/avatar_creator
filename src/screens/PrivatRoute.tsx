import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "../providers/useSession";
type PrivateRouteType = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { session } = useSession();
  return session ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;
