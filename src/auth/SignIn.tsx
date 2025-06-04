import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../css/SignIn.css";
import AuthNav from "./AuthNav";
import { useSession } from "../providers/useSession";
export type SignInCredType = {
  email: string;
  pass: string;
};

const SignIn: React.FC = () => {
  const [signInCred, setSignInCred] = useState<SignInCredType>({
    email: "",
    pass: "",
  });
  const navigation = useNavigate();
  const { setSession } = useSession();
  const handleSigninClick = () => {
    if (!signInCred.email && signInCred.pass) {
      alert("Email is required");
    } else if (signInCred.email && !signInCred.pass) {
      alert("Password is required");
    } else if (!signInCred.email || !signInCred.pass) {
      alert("All input data is required!!");
    } else if (
      signInCred.email === "admin@gmail.com" &&
      signInCred.pass === "123"
    ) {
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
            type="email"
            value={signInCred.email}
            onChange={(txt) =>
              setSignInCred((prev) => ({
                ...prev,
                email: txt.target.value,
              }))
            }
            placeholder="example@gmail.com"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={signInCred.pass}
            onChange={(txt) =>
              setSignInCred((prev) => ({
                ...prev,
                pass: txt.target.value,
              }))
            }
            placeholder="Your Password"
          />
        </div>
        <button onClick={handleSigninClick}>Sign In</button>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
    </>
  );
};
export default SignIn;
