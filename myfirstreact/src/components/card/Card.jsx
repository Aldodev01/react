import './Card.css'

const Card = ( {c_title, c_body} )=>{
    return (
        <div className="card">

            <h3 className="card_title">
                {c_title}
            </h3>
            <p className="card_body">
                {c_body}
            </p>
        </div>
    )
}

export default Card
