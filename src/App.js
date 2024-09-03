import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./user.context";
import MainPage from './MainPage.js'
import Login from './Login.js';
import SignUp from './SignUp.js';
import NavBar from './NavBar';
import PrivateRoute from "./PrivateRoute";
import Searchbar from './Search.js'; 
import HistoryDisplay from './history.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TopPicksArtists from './TopPicksArtists';


export default function App() {
  return (
    <>
    <div className = 'app'>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path ="/" element={<MainPage />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/NavBar" element={<NavBar />} />
            <Route exact path="/NavBar/Search" element={<Searchbar />} />
            <Route exact path="/NavBar/History" element={<HistoryDisplay />} />
            <Route path="/TopPicksArtists/:genre" element={<TopPicksArtists />} />
          </Route>
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
    </>
  );
}







