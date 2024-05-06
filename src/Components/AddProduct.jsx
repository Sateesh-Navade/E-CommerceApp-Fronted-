import { useState } from "react";
import '../Styles/AddProduct.css'
import axios from "axios";
import React from "react";


const AddProduct = () => {
    let [name, setname] = useState("")
    let [brand, setbrand] = useState("")
    let [category, setcategory] = useState("")
    let [description, setdescription] = useState("")
    let [cost, setcost] = useState("")
    let [image_url, setimage_url] = useState("")

    let data = { name, brand, category, description, cost, image_url }
    
    let admin = JSON.parse(localStorage.getItem("Merchant"))

    let addproduct = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8010/products/${admin.id}`, data)
            .then((res) => {
                console.log(res);
                alert("Product Added Succesfull✔")
            })
            .catch(() => {
                alert("Product Not Added🤔")
            })
    }

    return (
        <div className='addproducts'>
            <form onSubmit={addproduct} action="">
                <label htmlFor="">Name</label>
                <input required value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Enter the Name" />
                
                <label htmlFor="">Brand</label>
                <input required type="text" value={brand} onChange={(e) => { setbrand(e.target.value) }} placeholder="Enter the brand " />
                
                <label htmlFor="">Category</label>
                <input required type="text" value={category} onChange={(e) => { setcategory(e.target.value) }} placeholder="Enter the category" />
                
                <label htmlFor="">Description</label>
                <input required type="text" value={description} onChange={(e) => { setdescription(e.target.value) }} placeholder="Enter the description" />
                
                <label htmlFor="">cost</label>
                <input required type="number" value={cost} onChange={(e) => { setcost(e.target.value) }} placeholder="Enter the cost" />
                
                <label htmlFor="">image_url</label>
                <input required type="text" value={image_url} onChange={(e) => { setimage_url(e.target.value) }} placeholder='Enter the image url' />
                
                <button className='btn btn-outline-info'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct