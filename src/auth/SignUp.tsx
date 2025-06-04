import { useState } from "react";
import "./../css/SignIn.css";
import AuthNav from "./AuthNav";
import { Link, useNavigate } from "react-router-dom";

export type SignUpCredentialsType = {
  email: string;
  pass1: string;
  pass2: string;
};

const SignUp: React.FC = () => {
  const navigation = useNavigate();
  const [userCred, setUserCred] = useState<SignUpCredentialsType>({
    email: "",
    pass1: "",
    pass2: "",
  });

  const handleCreateAccountClick = () => {
    if (!userCred.email && userCred.pass1 && userCred.pass2) {
      alert("Email is required");
    } else if (userCred.email && (!userCred.pass1 || !userCred.pass2)) {
      alert("Password fields are required");
    } else if (!userCred.email && !userCred.pass1 && !userCred.pass2) {
      alert("All fields are required");
    } else if (userCred.pass1 !== userCred.pass2) {
      alert("Passwords does not match!!");
    } else {
      alert("Account created successfuly");
      navigation("/");
    }
  };
  return (
    <>
      <AuthNav />
      <section id="si-cont">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={userCred.email}
            onChange={(txt) =>
              setUserCred((prev) => ({
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
            value={userCred.pass1}
            onChange={(txt) =>
              setUserCred((prev) => ({
                ...prev,
                pass1: txt.target.value,
              }))
            }
            placeholder="Your Password"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Re Enter Password</label>
          <input
            type="password"
            value={userCred.pass2}
            onChange={(txt) =>
              setUserCred((prev) => ({
                ...prev,
                pass2: txt.target.value,
              }))
            }
            placeholder="Your Password"
          />
        </div>
        <button onClick={handleCreateAccountClick}>Create Account</button>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </section>
    </>
  );
};
export default SignUp;
