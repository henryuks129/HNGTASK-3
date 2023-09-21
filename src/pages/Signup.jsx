// import { useRef, useState } from "react";
// import { Card, Button, Form, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../styles/Signup.css";
// import { useAuth } from "../hooks/AuthContext";

// export default function Signup() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();
//   const {signup} = useAuth();
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   async function handleSubmit(e){
//     e.preventDefault()

//     if(passwordRef.current.value === confirmPasswordRef.current.value){
//         return setError('Passwords do not match')
//     }

//     try{
//         setError('')
//         setLoading(true)
//         signup(emailRef.current.value, passwordRef.current.value)
//     } catch{
//         setError('Failed to create an account')
//     } finally{
//         setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>
//                 <b>Email:</b>
//               </Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>
//                 <b>Password:</b>
//               </Form.Label>
//               <Form.Control type="Password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>
//                 <b>Confirm Password:</b>
//               </Form.Label>
//               <Form.Control type="password" ref={confirmPasswordRef} required />
//             </Form.Group>
//             <Button type="Submit" className="w-100">
//               Sign Up
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div disabled={loading} className="w-100 text-center mt-2">
//         <h4>
//           Already have an account?
//           <Link>Log In</Link>
//         </h4>
//       </div>
//     </div>
//   );
// }
