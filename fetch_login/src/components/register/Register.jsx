import './Register.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Register = ()=>{

    const [same, setSame] = useState(false)

    const [inputData, setInputData] = useState({
        email : '',
        password : '',
        password2 : ''
    })

    // Check password sama
    useEffect(()=>{
        if(inputData.password === inputData.password2) {
            setSame(true)
        } else {
            setSame(false)
        }
    }, [inputData])

  

    const handleRegister = (e)=>{
        e.preventDefault()

        fetch('http://localhost:5000/register', {
            method : 'POST',
            mode : 'cors',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email: inputData.email,
                password: inputData.password,
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                window.location.href ='/login'
                sessionStorage.setItem('isLogin', true)
            } else {
                alert(data)
            }
        })
    }


    useEffect(() => {
        // tampungan nilai session storage bernama isLogin
        const isLogin = sessionStorage.getItem('isLogin')
    
        // apabila nilai isLogin TRUE maka kembalikan dia ke pagee HOME
        if(isLogin) {
            window.location.href ='/home'
        }
    }, [])

    return(

        <form className='register' onSubmit={handleRegister}>
            
            <h1 className="regTitle">Register</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Masukan email' onChange={(e)=>{
                setInputData({
                    // ... adalah mengcopy state yang sebelumnya
                    ...inputData,
                    email : e.target.value //edit properti yang diinginkan
                })
                console.log(inputData)
            }}/>

            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Masukan password' onChange={(e)=>{
                setInputData({
                    // ... adalah mengcopy state yang sebelumnya
                    ...inputData, 
                    password : e.target.value  //edit properti yang diinginkan
                })
                console.log(inputData)
            }}/>

            <label htmlFor="password2">Password</label>
            <input type="password" id='password2' placeholder='Ulangi password' onChange={(e)=>{
                setInputData({
                     // ... adalah mengcopy state yang sebelumnya
                    ...inputData,
                    password2 : e.target.value  //edit properti yang diinginkan
                })
                console.log(inputData)
            }}/>
            {same === false ? (<small>Password harus sama</small>) : null}


            <button type='submit' className='regButton' disabled={!same} onClick={()=>{handleRegister()}}>Sign Up</button>
            
            <small>
                Already Have Account
                <Link to="/login">Login Here ...</Link>
            </small>
        
        </form>

    )

}

export default Register