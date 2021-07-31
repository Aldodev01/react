import './Login.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Login = ()=>{

    const [inputData, setInputData] = useState ({
        email : "",
        password : "",
    })

const handleLogin = (e)=>{
    e.preventDefault()

    fetch('http://localhost:5000/login', {
        method : 'POST',
        mode : 'cors',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(inputData),
    })  
    .then(res => res.json())
    .then(data => {
        if (data.accessToken) {
            alert ('Selamat bro')
            // kita set session storag
            sessionStorage.setItem('isLogin', true)

            // Kita tambahkan 
            sessionStorage.setItem("user", inputData.email)


            window.location.href ='/home'
        } else {
            alert('salah gblk')
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

        <form className='login' onSubmit={handleLogin}>
            
            <h1 className="logTitle">Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Masukan email' onChange={(e)=>{
                setInputData({
                    ...inputData,
                    email : e.target.value
                })
                console.log(inputData)
            }}/>

            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Masukan password' onChange={(e)=>{
                setInputData({
                    ...inputData,
                    password : e.target.value
                })
                console.log(inputData)
            }}/>


            <button type='submit' className='logButton'>Sign In</button>
            <h4>Or</h4>
            
            <small>
                Not Have Account
                <Link to="/register">Register Here ...</Link>
            </small>
        
        </form>

    )

}

export default Login