import React from 'react'
import './Contact.css';
import { useState } from 'react';
import axios from "axios"



const Contact = () => { 
    

  const [name, setname]=useState('')
  const [email, setemail]=useState('')
  const [phone, setphone]=useState('')
  const [comments, setcomments]=useState('')

       const handlesubmit = (e)=>{
        e.preventDefault();
        const data ={
          Name:name,
          Email:email,
          Phone:phone,
          Comments:comments,
        }
        axios.post('https://sheet.best/api/sheets/62e582ed-861f-4a02-bb68-355875eb9e23',data).then((respone)=>{console.log(respone)
          setname('');
          setemail('');
          setphone('');
          setcomments('')
        });
       }
   
 

  return (
    <div className='wholecontact'>  {/* contactpage whole div*/}
     
     <div className='cont-page'>
       
     </div>

     <div className='cont-2-content'>
       
       <div  className='cont-2-page1' >
       <h1  className='cont-2-page1-h1'>Office Address</h1>
       <p  className='cont-2-page1-para'>380 St Kilda Road, Melbourne
       VIC 3004, Australia</p>
       </div>


       <div className='cont-2-page1' >
       <h1  className='cont-2-page1-h1'>Working Hour</h1>
       <p  className='cont-2-page1-para'>380 St Kilda Road, Melbourne
       VIC 3004, Australia</p>
  

       </div>
       <div className='cont-2-page1'>
       <h1  className='cont-2-page1-h1'>Message us</h1>
       <p  className='cont-2-page1-para'>380 St Kilda Road, Melbourne
       VIC 3004, Australia</p>

     </div>
   </div>


   <div className='contact-form'>  {/* contact form whole div*/}
    <form className='form-div' onSubmit={handlesubmit}>

      <div className='cont-form-heading'>
        <h1 className='cont-form-h1-1' >___</h1>
        <h1 className='cont-form-h1-2'>contact page</h1>
      </div>
      <h1 className='cont-form-h1-3'>Get A Quotes</h1>
      <label className='form-label'>Name</label> <br></br>
      <input className='form-input' type='text' placeholder='name' onChange={(e)=>setname(e.target.value)} value={name}></input><br></br>

      <label className='form-label'>E-mail</label> <br></br>
      <input  className='form-input' type='mail' placeholder='email' onChange={(e)=>setemail(e.target.value)} value={email}></input><br></br>

      <label className='form-label'>phone number</label> <br></br>
      <input  className='form-input' type='text' placeholder='phone number'
      onChange={(e)=>setphone(e.target.value)} value={phone}></input><br></br>

      <label className='form-label'>comments</label> <br></br>
      <input  className='form-input' type='textarea' placeholder='comments' onChange={(e)=>setcomments(e.target.value)} value={comments}></input><br></br>


      <button className='form-btn-submit' type='submit'>submit</button>

    </form>
   </div>  {/* contact form div over */}








    </div>  /* contactpage whole div over*/
  )
}

export default Contact
