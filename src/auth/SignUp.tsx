import { useState } from "react";
import "./../css/SignIn.css";
import AuthNav from "./AuthNav";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass1, setPass] = useState<string>("");
  const [pass2, setPass2] = useState<string>("");
  return (
    <>
      <AuthNav />
      <section id="si-cont">
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
            value={pass1}
            onChange={(txt) => setPass(txt.target.value)}
            placeholder="Your Password"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Re Enter Password</label>
          <input
            type="string"
            value={pass2}
            onChange={(txt) => setPass2(txt.target.value)}
            placeholder="Your Password"
          />
        </div>
        <Link to="/">
          <button>Go Back</button>
        </Link>
        {email === "" || pass1 === "" || pass2 === "" ? (
          <p>Fields are empty</p>
        ) : email !== "" && pass1 !== "" && pass2 !== "" && pass1 !== pass2 ? (
          <p>Passwords does not match</p>
        ) : (
          <Link to="/">
            <button>Create Account</button>
          </Link>
        )}
      </section>
    </>
  );
};
export default SignUp;
