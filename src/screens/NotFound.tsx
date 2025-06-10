import { useNavigate } from "react-router-dom";
import AuthNav from "../auth/AuthNav";
import { useSession } from "../providers/useSession";
import "./../css/NotFound.css";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const { session } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 3000);
    } else {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    }
  }, [navigate]);
  return (
    <div>
      <AuthNav />
      <div className="not-found-cont">
        <div className="r1">
          <p>404</p>
        </div>
        <div className="r2">
          <p>Requested page not found</p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
