import './Card.css'

const Card = ({ title, body, date })=> {
    return (
        <div className="card">
            <h3 className="title">{title}</h3>
                <p className="body">{body}</p>
                    <small className="date">{date}</small>
        </div>
    )
}

export default Card
