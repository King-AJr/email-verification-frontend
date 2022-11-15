import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Signin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home"


    const handleSubmit = async(e) => {
        e.preventDefault();
            try {
              await fetch(`https://enigmatic-meadow-80878.herokuapp.com/user/login`, {
                method: 'POST',
                headers: {'content-Type': 'application/json'},
                body:JSON.stringify({
                     name: name, email:email,  password: password
                })
            })
            .then(res => res.json())
              .then(res=> {
                if(res.login){
                  console.log(res);
                setName('');
                setPassword('');
                navigate(from, {replace : true});
                }
                else{
                  console.log('incorrect submission');
                }
              })
                       
                        
                        console.log('working');
            }
            catch(err){
                if(!err?.response){
                    console.log('no server response');
                }
                else {
                    console.log('registeration failed')
                }
            }
      }


  return (
    <div>
        <div>
            <body>
    <div id="ebazar-layout" className="theme-blue">

        <div className="main p-2 py-3 p-xl-5">
            
            <div className="body d-flex p-0 p-xl-5">
                <div className="container-xxl">

                    <div className="row g-0">
                        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                            <div style={{maxWidth: '25rem'}}>
                                <div className="text-center mb-5">
                                    <i className="bi bi-bag-check-fill  text-primary" style={{fontSize: '90px'}}></i>
                                </div>
                                <div className="mb-5">
                                    <h2 className="color-900 text-center">A few clicks is all it takes.</h2>
                                </div>
                                <div className="">
                                    <img src="../d_assets/images/login-img.svg" alt="login-img"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                            <div className="w-100 p-3 p-md-5 card border-0 shadow-sm" style={{maxWidth: '32rem'}}>
                                <form onSubmit={handleSubmit}
                                className="row g-1 p-3 p-md-4">
                                    <div className="col-12 text-center mb-5">
                                        <h1>Sign in</h1>
                                        <span>Free access to our dashboard.</span>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div
                                        className= 'form-control  mb-2'>
                                            <label className="form-label">Email address</label>
                                            <input 
                                            name="email-address"  
                                            id="email-address"
                                            autoComplete='off'
                                            onChange={(e) => {setEmail(e.target.value)}}
                                            value = {email}
                                            required
                                            type="email" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter your email"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div 
                                        className = 'form-control mb-2'>
                                            <label className="form-label">Password</label>
                                            <input
                                            name="password"  
                                            id="password"
                                            autoComplete='off'
                                            onChange={(e) => {setPassword(e.target.value)}}
                                            value = {password}
                                            required 
                                            type="password" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter your password"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                    <button 
                                    className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6'
                                    disabled={!email || !name || !password ? true : false}>
                                        Submit
                                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</body>
</div>
</div>
  )
}

export default Signin
