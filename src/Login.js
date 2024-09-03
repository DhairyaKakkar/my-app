import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./user.context";

export default function Login() {
  const navigate = useNavigate();
 const location = useLocation();
 
 // We are consuming our user-management context to
 // get & set the user details here
 const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);
 
 // We are using React's "useState" hook to keep track
 //  of the form values.
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // This function will be called whenever the user edits the form.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 // This function will redirect the user to the
 // appropriate page once the authentication is done.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/NavBar");
 }
 
 // Once a user logs in to our app, we don’t want to ask them for their
 // credentials again every time the user refreshes or revisits our app, 
 // so we are checking if the user is already logged in and
 // if so we are redirecting the user to the home page.
 // Otherwise we will do nothing and let the user to login.
 const loadUser = async () => {
   if (!user) {
     const fetchedUser = await fetchUser();
     if (fetchedUser) {
       // Redirecting them once fetched.
       redirectNow();
     }
   }
 }
 
 // This useEffect will run only once when the component is mounted.
 // Hence this is helping us in verifying whether the user is already logged in
 // or not.
 useEffect(() => {
   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
 // This function gets fired when the user clicks on the "Login" button.
 const onSubmit = async (event) => {
   try {
     // Here we are passing user details to our emailPasswordLogin
     // function that we imported from our realm/authentication.js
     // to validate the user credentials and log in the user into our App.
     const user = await emailPasswordLogin(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
       if (error.statusCode === 401) {
          alert("Invalid username/password. Try again!");
      } else {
          alert(error);
      }
 
   }
 }

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
              onChange={onFormInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              name ="password"
              value={form.password}
              onChange={onFormInputChange}
            />
          </Form.Group>
          <Button className='button' variant="outline-light" onClick={onSubmit}>
            Submit
          </Button>
          <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </Form>
      </div>
    </>
  );
}