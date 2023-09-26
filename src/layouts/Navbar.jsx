import { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Search from "./Search";
import '../styles/Navbar.css'

export default function Navbar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate()

    const logout = async ()=>{
        await signOut(auth);
        alert("Logout Successful")
        navigate("/")
    }

    const signuproute = async ()=>{
      navigate("/Signup");
    }

    onAuthStateChanged(auth, (currentUser)=>{
      // if(!currentUser){}
      setUser(currentUser)
    })
  return (
    <div className="bg-dark">
      <nav
        // bg="dark"
        // variant="dark"
        className="d-flex justify-content-between align-items-center text-white container nav-body p-2"
      >
        <div>
          <h4>
            ANTIQUE
            <br />
            GALLERIA.
          </h4>
        </div>
        <div><Search/></div>
        {/* <div>{user?.email}</div> */}
        <div className="d-flex gap-3">
          <Link to={"/Signup"}>
          <button className="bg-primary button-1" onClick={signuproute}>Signup</button>
          </Link>
          <button className="bg-primary button-2" onClick={logout}>Logout</button>
        </div>
      </nav>
    </div>
  );
}
