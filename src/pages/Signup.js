import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom'


const Signup = () => {
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/signin"  

    const handleSubmit = async(e) => {
        e.preventDefault();      

        if(validName && validPass && matchPassword){
            try {
                fetch(`https://enigmatic-meadow-80878.herokuapp.com/user/signup`, {
                    method: 'POST',
                    headers: {'content-Type': 'application/json'},
                    body:JSON.stringify({
                        name: name, email: email, password: password
                    })
                });     //navigate(from, {replace : true});
                        setName('');
                        setEmail('');
                        setMatchPassword('');
                        setPassword('');
                        console.log('sent to the backend');
            }
            catch(err){
                console.log(err)
            }
        }
    }

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/signin"
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);

    const [password, setPassword] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [matchPassword, setMatchPassword]  = useState('');
    const [checkMatch, setCheckMatch] = useState(false)
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    

    useEffect(() => {
        // eslint-disable-next-line
        setValidName(USER_REGEX.test(name));
        console.log(name);
    }, [name]);

    useEffect(() => {
        // eslint-disable-next-line
        setValidEmail(EMAIL_REGEX.test(email));
        console.log(validEmail);
        console.log(email);
    }, [email]);

    useEffect(() => {
        // eslint-disable-next-line
        const result = PWD_REGEX.test(password);
        console.log(password);
        console.log(result);
        setValidPass(result);
        const match = (password === matchPassword)        
        setCheckMatch(match);
        console.log(matchPassword);
    }, [password, matchPassword]);

    return (
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
                                        <h1>Create your account</h1>
                                        <span>Free access to our dashboard.</span>
                                    </div>
                                    <div className="col-12">
                                        <div 
                                        className= {
                                            validName ? 'form-control mb-2' : 'form-control error mb-2'
                                        }>
                                            <label className="form-label">Full name</label>
                                            <input 
                                            name="name"  
                                            id="name"
                                            autoComplete='off'
                                            onChange={(e) => {setName(e.target.value)}}
                                            value = {name}
                                            required
                                            type="text" 
                                            className="form-control form-control-lg" 
                                            placeholder="name"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div
                                        className={
                                            validEmail ? 'form-control  mb-2' : 'form-control error mb-2'
                                        }>
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
                                            placeholder="name@example.com"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div 
                                        className={
                                            validPass ? 'form-control mb-2' : 'form-control error mb-2'
                                    }>
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
                                            placeholder="8+ upper,lower,num, & symbol"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div
                                            className={
                                                checkMatch ? 'form-control mb-2' : 'form-control error mb-2'
                                        }>
                                            <label 
                                            className="form-label">Confirm password</label>
                                            <input
                                            name="password"  
                                            id="password"
                                            autoComplete='off'
                                            onChange={(e) => {setMatchPassword(e.target.value)}}
                                            value = {matchPassword}
                                            required 
                                            type="password" 
                                            className="form-control form-control-lg" 
                                            placeholder="confirm password"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                    <button 
                                    className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6'
                                    disabled={!validEmail || !validName || !validPass || !checkMatch ? true : false}>
                                        Submit
                                    </button>
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <span>Already have an account? <Link className="text-secondary" to="/Signin">Sign In</Link></span>
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
    )
}           
export default Signup