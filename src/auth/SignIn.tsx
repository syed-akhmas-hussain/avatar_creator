import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../css/SignIn.css";
import AuthNav from "./AuthNav";
import { useSession } from "../providers/useSession";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const navigation = useNavigate();
  const { setSession } = useSession();
  const handleSigninClick = () => {
    if (email === "admin@gmail.com" && pass === "123") {
      setSession(true);
      navigation("/home");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      <AuthNav />
      <div id="si-cont">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="string"
            value={email}
            onChange={(txt) => setEmail(txt.target.value)}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="string"
            value={pass}
            onChange={(txt) => setPass(txt.target.value)}
            placeholder="Your Password"
          />
        </div>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        {email === "" || pass === "" ? (
          <p>Fields are empty</p>
        ) : (
          <button onClick={handleSigninClick}>Sign In</button>
        )}
      </div>
    </>
  );
};
export default SignIn;
