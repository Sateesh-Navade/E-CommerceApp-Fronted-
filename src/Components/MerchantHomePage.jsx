import { Route, Routes } from "react-router-dom";
import MerchantNavbar from "./MerchantNavbar";
import ProductView from "./ProductView";
import UpdateMerchant from "./UpdateMerchant";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import UpdateProducts from "./UpdateProducts";


const MerchantHomePage = () => {
    return ( 
        <div className="merchanthomepage">
            <MerchantNavbar/>
            <Routes>
                <Route path="/productview" element={<ProductView/>}></Route>
                <Route path="/addproducts" element={<AddProduct/>}></Route>
                <Route path="/updatemerchant" element={<UpdateMerchant/>}></Route>
                <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
                <Route path="/updateproducts" element={<UpdateProducts/>}></Route>
            </Routes>
        </div>
     );
}

export default MerchantHomePage;