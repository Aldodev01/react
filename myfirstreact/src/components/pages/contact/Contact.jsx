import { useEffect } from 'react'
import './Contact.css'

const Contact = ()=>{

    useEffect( ()=>{
        window.scrollTo (0, 0)

        fetch('http://jsonplaceholder.typicode.com/posts', {
            method : 'GET',
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            }
        })

        .then(res => res.json())
        .then(data => console.log(data))
        
    }, [] )





    return(
        <div className="contact">
           

           


        </div>
    )
}

export default Contact