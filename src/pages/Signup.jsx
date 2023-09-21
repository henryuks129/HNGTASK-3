import { useState, useEffect } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { auth } from "../Firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  // onAuthStateChanged(auth, (currentUser)=>{
    // if(!currentUser){}
    // setUser(currentUser)
  // })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Register = async (e) => {
    e.preventDefault();
    // if(password.current.value !== confirmPassword.current.value){
    //   return setError("Passwords do not match")
    // }
    try{
      setError('')
      setLoading(true)
      const user = await createUserWithEmailAndPassword(auth, email, password, confirmPassword);
      console.log(user);
    } catch(error){
      setError("Failed to create an account")
    }
    setLoading(false)
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={Register}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <b>Email:</b>
              </Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <b>Password:</b>
              </Form.Label>
              <Form.Control type="Password" onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <b>Confirm Password:</b>
              </Form.Label>
              <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)} required />
            </Form.Group>
            <Button type="Submit" className="w-100">
              Sign Up
            </Button>
          </Form>
          {user?.email}
        </Card.Body>
      </Card>
      <div disabled={loading} className="w-100 text-center mt-2">
        <h4>
          Already have an account?
          <Link to='/Signin'>Log In</Link>
        </h4>
      </div>
    </div>
  );
}
