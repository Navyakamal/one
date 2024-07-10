import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {  RegisterUser } from '../../apis/users'

function Login({register}) {
    
    const [userInputs,setInputs]=useState({
        username:"",
        email:"",
        password:""
    })
    
    const setData=(e)=>{
        const {name,value}=e.target
        setInputs({...userInputs,[name]:value})
      }
    
 
      const handleRegister = async (e) => {
        e.preventDefault();
        const { username, email, password } = userInputs;
        if (!username || !email || !password) {
            alert('Please fill all details');
        } else {
            try {
                const response = await RegisterUser(userInputs);
                if (response && response.success) {
                    alert('Account created successfully');
                } else {
                    alert('Registration failed');
                }
            } catch (error) {
                console.error('Registration error:', error);
                alert('An error occurred during registration');
            }
        }
    };
    console.log(userInputs);
  return (
    <div className='auth'>
    <div className='background'></div>
    <Container className='w-25 signin shadow'>
        <h3 className='text-center mt-4 name'><span className='text-danger'>Watch</span>Wise</h3>
        {register?
        <>
           <input type="text" name="username" placeholder='Enter username'  className='s1 form-control mt-3' onChange={(e)=>setData(e)} />
        {/* {validUname &&
             <p className='text-danger text-start my-1'>Please include alphabets and spaces only</p>

           } */}
           <input type="text" name="email" placeholder='Enter email id'  className='s1 form-control mt-3' onChange={(e)=>setData(e)} />
           {/* {validemail &&
             <p className='text-danger text-start my-1'>Please enter a valid email</p>

           }             */}
           <input type="password" name="password" placeholder='Enter password'  className='s1 form-control mt-3' onChange={(e)=>setData(e)} />
           {/* {validPassword &&
             <p className='text-danger text-start my-1'>Please include letters and numbers only</p>

           } */}
           </>
           :
           
            <>
            <input type="text" placeholder='Enter email id' name='email' className='s1 form-control mt-3' onChange={(e)=>setData(e)} />
            {/* {validemail &&
            <p className='text-danger text-start my-1'>Please enter a valid email</p>
  
            } */}
           <input type="password" placeholder='Enter password' name='password' className='s1 form-control mt-3' onChange={(e)=>setData(e)} />
          {/* {validPassword &&
            <p className='text-danger text-start my-1'>Please include letters and numbers only</p>
  
           } */}

          </>          
          }
        {register?
          
        <>
          <button className='sb1' onClick={handleRegister} >SIGN UP</button>
          <p className='text-center mt-3'>ALREADY REGISTERED? <Link to={'/login'}  style={{textDecoration:'none'}}><span className='text-danger'> SIGN IN</span></Link></p>

        </>
        :
        <>
        <button className='sb1'>SIGN IN</button>
        <p className='text-center mt-3'>NEW USER?<Link to={'/register'} style={{textDecoration:'none'}}> <span className='text-danger'> SIGN UP</span></Link></p>


    </>
      }
         
      
    </Container>
  </div>

  )
}

export default Login
