import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <>
    <img 
    className = 'watermark' 
    src = 'https://play-lh.googleusercontent.com/u5zjxp6IbaDoGpWOk24q5L5Ej0jiwLjS3-h7PAHy0xbawRLfO37f010C23gcD9GL1gh4'
    alt = 'Chord watermark'
    />
    <img 
    className = 'side' 
    src = 'https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
    alt = 'Chord watermark'
    />
    <img 
    className = 'right' 
    src = 'https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
    alt = 'Chord watermark'
    />
    <div className = 'content'>
      <h2>App Name</h2>
      <Button className = 'button' variant="outline-light" onClick={() => navigate('Login')} >
        Log in
      </Button>{' '}
      <Button className = 'button' variant="outline-light" onClick={() => navigate('SignUp')} >
        Sign up
      </Button>{' '}
    </div>
    </>
  );
}