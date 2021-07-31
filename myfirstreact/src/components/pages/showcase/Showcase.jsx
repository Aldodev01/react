import { useEffect } from 'react'
import './Showcase.css'


const Showcase = ()=>{

   useEffect( ()=>{

    window.scrollTo(0, 0)

   }, [] )

    return(
        <section className="showcase">
            <h1>Page Showcase</h1>
        </section>
    )
}

export default Showcase