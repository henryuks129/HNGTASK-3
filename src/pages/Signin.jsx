import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const login = async (e) => {
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert("Login Successful")
      navigate("/Home")
    } catch(error){
      setError("Failed to login")
    }
  };

  return (
    <div>
      <div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={login}>
              <Form.Group controlId="Email">
                <Form.Label>
                  <b>Email:</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>
                  <b>Password:</b>
                </Form.Label>
                <Form.Control
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button disabled={loading} type="Submit" className="w-100">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        <h4>
          Need an account?<Link href="/Signup"> Sign Up Here!</Link>
        </h4>
      </div>
      </div>
    </div>
  );
}
