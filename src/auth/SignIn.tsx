import { useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const { session, setSession } = useSession();

  useEffect(() => {
    if (session) {
      navigate("/home", { replace: true });
    }
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInCred((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSigninClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInCred.email || !signInCred.pass) {
      alert("All input data is required!!");
      return;
    }
    try {
      const resp = await fetch(
        `http://localhost:5000/login?email=${encodeURIComponent(
          signInCred.email
        )}&password=${encodeURIComponent(signInCred.pass)}`,
        {
          method: "GET",
        }
      );
      const data: { success: boolean; message: string } = await resp.json();
      if (resp.ok && data.success === true) {
        setSession(true);
        alert(data.message || "Login successfull");
        navigate("/home", { replace: true });
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      alert(`Server Error ${err}`);
    }
  };
  return (
    <>
      <AuthNav />
      <div id="si-cont">
        <form onSubmit={handleSigninClick}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={signInCred.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              name="pass"
              type="password"
              value={signInCred.pass}
              onChange={handleChange}
              placeholder="Your Password"
            />
          </div>
          <div className="btn-adj">
            <button type="submit">Sign In</button>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
