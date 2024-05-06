import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/ViewProduct.css'
import { useNavigate } from 'react-router-dom'

const ProductView = () => {
  let [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8010/products")
      .then((response) => {
        setData(response.data.data)
      })
      .catch(() => {
        console.log("not found the data");
      })
  }, [])

  let navigate=useNavigate()

  let editProduct=(id)=>{
    navigate(`/merchanthomepage/editproduct/${id}`)  
  }

  return (
    <div className='ProductView'>
      {
        data.map((x) => {
          return (
            <div>
              <table border={"2px solid black"} >
                <tr>
                  <h1>Product Details</h1> <hr />
                </tr>
                <tr>
                  <img className='pic' src={x.image_url} alt="" />
                </tr>
                <tr>
                  <td>Name</td><input type="text" value={x.name} />
                </tr>
                <tr>
                  <td>Brand</td><input type="text" value={x.brand} />
                </tr>
                <tr>
                  <td>Category</td> <input type="text" value={x.category} />
                </tr>
                <tr>
                  <td>Descrption</td> <input type="text" value={x.description} />
                </tr>
                <tr>
                  <td>Cost</td> <input type="text" value={x.cost} />
                </tr>
                <tr>
                  <button className='btn btn-outline-secondary'onClick={() => { editProduct(x.id) }} >Edit</button>
                  <button className='btn btn-outline-secondary'>Delete</button>
                </tr>

              </table>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductView

