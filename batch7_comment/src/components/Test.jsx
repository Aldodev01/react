import {useEffect, useState} from 'react'

function Test() {

    const [comment, setComment] = useState()


    useEffect(()=>{
        
        fetch('http://jsonplaceholder.typicode.com/users', {
            method : 'GET',
            mode : 'cors',
            headers : {
                'Content-Type' : 'Application/json'
            }

        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setComment(data)
        })

    }, [])


    return(

        <div className="test">
            {console.log(comment)}
        </div>
    )
    
}

export default Test