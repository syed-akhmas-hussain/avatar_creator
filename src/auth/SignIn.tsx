import { useState } from "react";
import "./../css/SignIn.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
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
      {email === "" || pass === "" ? (
        <p>Fields are empty</p>
      ) : (
        <button>Sign Up</button>
      )}
    </div>
  );
};
export default SignIn;
