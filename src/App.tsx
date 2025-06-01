import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./screens/MainApp";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { SessionProvider } from "./providers/useSession";
import TryOn from "./screens/TryOn";

const App: React.FC = () => {
  return (
    <SessionProvider>
      <div id="app">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<MainApp />} />
            <Route path="/tryon" element={<TryOn />} />
          </Routes>
        </Router>
      </div>
    </SessionProvider>
  );
};

export default App;
