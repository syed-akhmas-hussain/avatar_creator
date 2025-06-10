import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./screens/MainApp";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { SessionProvider } from "./providers/useSession";
import TryOn from "./screens/TryOn";
import { DataProvider } from "./providers/useData";
import PrivateRoute from "./screens/PrivatRoute";
import NotFound from "./screens/NotFound";

const App: React.FC = () => {
  return (
    <SessionProvider>
      <DataProvider>
        <div id="app">
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <MainApp />
                  </PrivateRoute>
                }
              />
              <Route
                path="/tryon"
                element={
                  <PrivateRoute>
                    <TryOn />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </DataProvider>
    </SessionProvider>
  );
};

export default App;
