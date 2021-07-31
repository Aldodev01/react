import { useState } from 'react'
import './Container.css'

const Container = ( { bgColor, title, description, children } )=>{
    // State pada func component
    const [ mystate, setMyState ] = useState({
        name : "Aldodevv",
        adrees : "depok",
        age : 99,
    })

    
    return(

        <section className="container" style= {{
            backgroundColor : bgColor,
        }}>
            <h1>{title}</h1>
            <p>{description}</p>

            {children}
        </section>

    )
}

export default Container

// Class Component
// import React from 'react'

// export default class Component extends React.Component{

//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "Aldodevv",
//             addres : "Jl. Pitara Raya Masuk Kedalem",
//             age : 99
//         }
//     }

//     render(){
//         return(
//             <main className="container">
//                 <h1>Hallo { this.state.name } Class Component</h1>
//                 <small>{ this.state.addres }</small>
//         <small>{ this.state.age }</small>
//             </main>
//         )
//     }

// }