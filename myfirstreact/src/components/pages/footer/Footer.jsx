import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer_left">
                <h3 className="footer_left_title">A L D O</h3>
                <hr className="footer_left_line"/>
                <p className="footer_left_body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam hic quaerat, quae sit fugit optio cupiditate. Consectetur deleniti repudiandae doloremque, a earum culpa labore? Iure doloribus tempore perferendis assumenda distinctio.
                </p>
                <div className="footer_left_socmed">
                    <span>
                        <i className="fab fa-facebook"></i>Facebook
                    </span>
                    <span>
                        <i className="fab fa-twitter"></i>Twitter
                    </span>
                </div>
            </div>
                    <div className="footer_right">
                        <div className="footer_right_sitemap">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/gallery">Gallery</Link>
                        </div>
                        <div className="footer_right_subscribe">
                            <p className="sub_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius omnis quae pariatur aperiam nesciunt reiciendis beatae recusandae excepturi magni eaque dolore aliquam tenetur doloremque iure odio, delectus similique deleniti consequatur!
                            </p>
                            <div className="forum_grup">
                                <input type="email" className='input_email' placeholder='masukan email anda'/>
                                <button className="btn">
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
        </footer>
    )
}

export default Footer