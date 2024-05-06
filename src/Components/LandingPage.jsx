import {Link} from "react-router-dom"
import '../Styles/LandingPage.css'

const LandingPage = () => {
    return ( 
        <div className="landingpage">
            
            <Link to="/merchant">
                <img src="https://imgs.search.brave.com/Q6umXClzh1HqwtO9PhJFV8lMHIDab5q0Qs4kNrpLKac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M2L2Zl/L2YxL2M2ZmVmMWNh/MjdiNDFjNDVjMGRk/NTY3MGZmY2RjZWFl/LmpwZw" alt="" />
                <br />
                Merchant
            </Link>
            <Link to="/user">
                <img src="https://imgs.search.brave.com/vwimYLUDcAbT_ZWKjz9DlBVRoovzdUlB7dl-L8ZFB78/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZV8x/ODcyOTktMzk1OTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc" alt="" />
                <br />
                User
            </Link>
        </div>
     );
}
 
export default LandingPage;