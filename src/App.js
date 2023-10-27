import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Offers from "./pages/Offers";
import ForgetPassword from "./pages/ForgetPassword";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
