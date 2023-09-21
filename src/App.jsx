import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import { Container } from "react-bootstrap";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route index element={<Signup/>} /> */}
        <Route index element={<Signin/>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
