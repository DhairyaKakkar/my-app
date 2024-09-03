import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Corrected import
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./user.context";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  
  return (
    <>
      <img 
        className='watermark' 
        src='https://play-lh.googleusercontent.com/u5zjxp6IbaDoGpWOk24q5L5Ej0jiwLjS3-h7PAHy0xbawRLfO37f010C23gcD9GL1gh4'
        alt='Chord watermark'
      />
      <img 
        className='side' 
        src='https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
        alt='Chord watermark'
      />
      <img 
        className='right' 
        src='https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
        alt='Chord watermark'
      />
      <div className='content'>
        <h2>App Name</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              name="email"
              value={form.email}
              onInput={onFormInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name="password"
              value={form.password}
              onInput={onFormInputChange}
            />
          </Form.Group>
          <Button className='button' variant="outline-light" onClick={onSubmit}>
            Submit
          </Button>
          <p>Have an account already? <Link to="/login">Login</Link></p>
        </Form>
      </div>
    </>
  );
}