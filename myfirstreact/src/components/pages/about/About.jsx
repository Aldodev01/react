import { useEffect } from 'react'
import './About.css'
import untiled from '../../../assets/untitled.png'

const About = ()=>{

    useEffect( ()=>{

        window.scrollTo (0, 0)

    }, [] )
    return(
        <section className="about">
           <img src={untiled} alt="" width="360"/>
        </section>
    )
}

export default About