import './App.css';
import LandingPage from './Components/LandingPage';
import MerchantLogin from './Components/MerchantLogin';
import UserLogin from './Components/UserLogin';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignUp from './Components/MerchantSignUpPage';
import MerchantHomePage from './Components/MerchantHomePage';
import Error from './Components/Error';
import Protect from './Components/Protect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/*' element={<Error/>}/>
          <Route path="/merchant" element={<MerchantLogin/>} />
          <Route path="/user" element={<UserLogin/>} />
          <Route path="/merchantsignup" element={<MerchantSignUp/>} />
          <Route path="/merchanthomepage/*" element={<Protect Child={MerchantHomePage}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
