import { useState } from 'react'
import '../Styles/UpdateMerchant.css'

const UpdateMerchant = () => {
    let [name,setname]=useState("")
    let [gst_number,setgst_number]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [phone,setphone]=useState("")
    let [age,setAge]=useState("")
    let [gender,setGender]=useState("")
    return ( 
        <div className="updatemerchant">
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the name" required />

                <label htmlFor="">Gst_Number :</label>
                <input type="text" value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}} placeholder="Enter the Gst_Number" required />

                <label htmlFor="">Email :</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter the email" required />

                <label htmlFor="">Phone No :</label>
                <input type="number" value={phone} onChange={(e)=>{setphone(e.target.value)}} pattern="[0-9]{10}" placeholder="Enter the " required />

                <label htmlFor="">Password :</label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter the " required />

                <label htmlFor="">Merchant Age :</label>
                <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter the " required />

                <label htmlFor="">Merchant Gender :</label>
                <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}} placeholder="Enter the " required />

                <button className='btn btn-outline-info' >Submit</button>
            </form>
        </div>
     );
}
 
export default UpdateMerchant;