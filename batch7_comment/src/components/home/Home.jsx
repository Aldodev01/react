import './Home.css'
import {useEffect, useState} from 'react'

const Home = ()=>{

useEffect( () =>{
    fetch ('link', {
        method : 'GET',
        mode : 'cors',
        Headers : {
            'Content-Type' : 'Appliaction/json'
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
}, [])

    return (
        <section className='Home'>
            <h1>Welcome Home</h1>
        </section>
    )
}

export default Home
