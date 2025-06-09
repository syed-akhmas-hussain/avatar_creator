import { useEffect, useState } from "react";
import "./../css/SignIn.css";
import AuthNav from "./AuthNav";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../providers/useSession";

export type SignUpCredentialsType = {
  name: string;
  email: string;
  password: string;
  pass2: string;
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { session } = useSession();
  useEffect(() => {
    if (session) {
      navigate("/home", { replace: true });
    }
  }, []);
  const [userCred, setUserCred] = useState<SignUpCredentialsType>({
    name: "",
    email: "",
    password: "",
    pass2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCred((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCreateAccountClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userCred.email ||
      !userCred.password ||
      !userCred.pass2 ||
      !userCred.name
    ) {
      alert("All fields are required");
      return;
    }
    if (userCred.password !== userCred.pass2) {
      alert("Passwords does not match!!");
      return;
    }
    try {
      const resp = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: userCred.name,
          email: userCred.email,
          password: userCred.password,
        }),
      });
      const data: { message: string } = await resp.json();
      if (resp.status === 201) {
        alert("Account created successfully");
        navigate("/");
      } else {
        alert(data.message || "Registration unsuccessfull, try again");
      }
    } catch (err) {
      alert(`Server error ${err}`);
    }
  };
  return (
    <>
      <AuthNav />
      <section id="si-cont">
        <form onSubmit={handleCreateAccountClick}>
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={userCred.name}
              onChange={handleChange}
              placeholder="Jhon Mark"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={userCred.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              value={userCred.password}
              onChange={handleChange}
              placeholder="Your Password"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Re Enter Password</label>
            <input
              name="pass2"
              type="password"
              value={userCred.pass2}
              onChange={handleChange}
              placeholder="Your Password"
            />
          </div>
          <button type="submit">Create Account</button>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </form>
      </section>
    </>
  );
};
export default SignUp;
