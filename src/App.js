import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Navbar from "./component/layout/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Contact from "./component/pages/Contact";
import Notfount from "./component/pages/Notfound";
import AddUser from "./component/pages/users/AddUser";
import EditUser from "./component/pages/users/EditUser";
import User from "./component/pages/users/User";
import Login from "./component/pages/Login";

function App() {
  const RequireAuth = ({ children }) => {
    let location = useLocation();
    let token = localStorage.getItem("userToken");

    if (!token) {
      return <Navigate to="/" state={{ from: location }} />;
    }
    return children;
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route
            exact
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/user/add"
            element={
              <RequireAuth>
                <AddUser />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/user/edit/:id"
            element={
              <RequireAuth>
                <EditUser />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/user/view/:id"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Notfount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
