import './Home.css'
import ava from '../../../assets/brick.png'
import { useEffect, useState } from 'react'

const Home = ()=>{

    const [user, setUser]  = useState()

    useEffect( ()=>{
        
        window.scrollTo(0, 0)

        fetch('http://jsonplaceholder.typicode.com/users', {
            method : 'GET', 
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => setUser(data))

    } , [] )

    return(        <section className="home">
                <img src={ava} class="girl" width="250" />

                {user ? (<table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>phone</th>
                                </tr>
                            </thead>

                            <tbody>
                            
                                 {user.map((e)=>{
                                     return (
                                       <tr>
                                           <td>{e.id}</td>
                                           <td>{e.name}</td>
                                           <td>{e.username}</td>
                                           <td>{e.email}</td>
                                           <td>{ e.phone}</td>
                                       </tr>     
                                     )
                                 })}
                            
                            </tbody>

                            </table>) : (<small>Sabar lah user</small>)}
                
        </section>
    )
}

export default Home