import {Card} from "react-bootstrap";
import "../../style/errorPageStyle.css";
import errorPageImage from "../../images/errorPageImage.jpg";

export default function ErrorPage() {
    return (
        <div className={'errorPageStyle'}>
            <Card>
                <Card.Header>
                    <Card.Title className={'text-center'}>
                        <div>
                            You wrote url incorrectly.
                        </div>
                        <div>
                            Click on the photo to get back on main page...
                        </div>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <a href={'http://localhost:3000'}>
                        <div className={'d-flex justify-content-center'}>
                            <img
                                src={errorPageImage}
                                alt={"There was error page foto, but probably you can't see it"}
                            />
                        </div>
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
}