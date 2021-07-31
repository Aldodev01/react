
import './Home.css'
import NoteContainer from '../noteContainer/NoteContainer'

const handleHome =(e) => {
    e.preventDefault()

    .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                window.location.href ='/home'
            } else {
                alert(data)
            }
        })
}


const Home = ()=>{
    const isLogin = sessionStorage.getItem('isLogin')

    if(isLogin){
        return(
            <div className="home">
                <NoteContainer/>
                <div className="homeCard">
                    <div className="box"></div>
                </div>
            </div>

        )

    }else{
        window.location.href ='/login'
    }

}

export default Home