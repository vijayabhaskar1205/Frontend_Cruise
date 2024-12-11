import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './screens/Home'
import AmenitiesScreen from './screens/AmenitiesScreen';
import AboutScreen from './screens/AboutScreen';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ExploreScreen from './screens/ExploreScreen';
import ResetPassword from './components/ResetPassword';
import Bookings from './components/Bookings';
import Payment from './components/Payment';

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/amenities"  element={<AmenitiesScreen/>} />
        <Route path="/about"  element={<AboutScreen/>} />
        <Route path="/signup"  element={<SignUp/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/explore"  element={<ExploreScreen/>} />
        <Route path="/forgotpassword"  element={<ForgotPassword/>} />
        <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
        <Route path='/bookingsPage' element={<Bookings/>} />
        <Route path='/payment' element={<Payment/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
