import {Accordion, Button, Col, Form, InputGroup, ListGroup, Row} from "react-bootstrap";
import {useContext, useState} from "react";
import ThemeContext from "../../context/ThemeContext";
import "../../style/bodyStyle.css";
import Footer from "./Footer";
import LeftLayout from "./LeftLayout";
import PostModal from "./PostModal";
import UserContext from "../../context/UserContext";

export default function Body() {
    const {theme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [newPostName, setNewPostName] = useState('');
    const [newPostText, setNewPostText] = useState('');

    return (
        <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <div className={`mx-3 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} rounded`}>
                <Row>
                    <Col sm={'12'} md={'4'} lg={'2'}>
                        <Accordion>
                            <Accordion.Item eventKey={'0'}>
                                <Accordion.Header>ჩამონათვალი</Accordion.Header>
                                <Accordion.Body style={{margin: -20}}>
                                    <LeftLayout/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm={'12'} md={'8'} lg={'10'}>
                        {
                            user ? (
                                <Form className={'border border-5 border-danger p-5 rounded'}>
                                    <div>
                                        <Button variant={'danger'} onClick={()=>{localStorage.clear('password');window.location.reload()}}>გამოსვლა</Button>
                                    </div>
                                    <h1 className={'text-center'}>პოსტის დამატება</h1>
                                    პოსტის სახელი
                                    <InputGroup className="my-3">

                                        <Form.Control
                                            placeholder="type post"
                                            value={newPostName}
                                            onChange={event=>setNewPostName(event.target.value)}
                                        />
                                    </InputGroup>
                                    პოსტის ტექსტი
                                    <InputGroup className="my-3">
                                        <Form.Control
                                            placeholder="type post"
                                            as={'textarea'}
                                            style={{resize: "vertical", minHeight: 100, maxHeight: 400}}
                                            value={newPostText}
                                            onChange={event=>setNewPostText(event.target.value)}
                                        />
                                    </InputGroup>
                                    <div className={'d-flex justify-content-end'}>
                                        <Button
                                            variant="outline-info"
                                            onClick={()=>{
                                                setNewPostText('');
                                                setNewPostName('');
                                            }}
                                        >
                                            პოსტის დამატება
                                        </Button>
                                    </div>
                                </Form>
                            ) : ("")
                        }
                        <ListGroup style={{textAlign: "justify"}} className={''}>
                            <ListGroup.Item className={'m-2 rounded'} onClick={()=>{
                                setShow(true)
                            }}>
                                დავით აღმაშენებლის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                თამარ მეფის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                            <ListGroup.Item className={'m-2 rounded'}>
                                ერეკლე II-ის შესახებ
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={'12'} md={'12'} lg={'12'}>
                        <Footer/>
                    </Col>
                </Row>
            </div>

            <PostModal
                show={show}
                onHide={()=>{setShow(false)}}
                // data={data}
                />
        </div>
    );
}