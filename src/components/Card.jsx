import { Button } from "react-bootstrap";

const Card = (props) => {
    const { img, title, text } = props;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100">
                <img src={img}
                    className="card-img-top" alt="Banda de rock" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>
                        {text}
                    </p>
                    <Button variant="danger">Ver más</Button>
                </div>
            </div>
        </div>
    )
}

export default Card;
