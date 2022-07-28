import {Col, ListGroup, Row} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../context/ThemeContext";
import "../../style/bodyStyle.css";
import LeftLayout from "./LeftLayout";
import PostModal from "./PostModal";
import UserContext from "../../context/UserContext";
import ControlPanel from "../adminPanel/ControlPanel";

export default function Body() {
    const {theme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    useEffect(()=>{
        console.log('logged from body.js -> useEffect');
    }, [sideBar])

    return (
        <>
            {
                user ? (
                    <ControlPanel/>
                ) : (
                    <div className={`bodyChanger bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        <div className={`mx-3 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                            <Row>
                                <Col sm={'6'} md={'4'} lg={'2'} className={'mx-auto flex-fill'}>
                                    <LeftLayout showSideBarInfo={()=>{setSideBar(true)}} hideSideBar={()=>{setSideBar(false)}}/>
                                </Col>
                                <Col sm={'6'} md={'8'} lg={'10'}>
                                    {
                                        sideBar ? (
                                            <div id={"sideBarComponent"} className={'m-2 p-5 border border-1 rounded'}></div>
                                        ) : (
                                            <ListGroup className={'m-2'}>
                                                {/*{*/}
                                                {/*    // TODO: serverze dasamatebelia postebis sia*/}
                                                {/*    array.map((listItem)=>(*/}
                                                {/*        <ListGroup.Item*/}
                                                {/*            key={listItem.id}*/}
                                                {/*            onClick={()=>{*/}
                                                {/*                setShow(true);*/}
                                                {/*                // give data of the post to the modal and add data as useEffect's deps*/}
                                                {/*            }}*/}
                                                {/*        >*/}
                                                {/*            {listItem.title}*/}
                                                {/*        </ListGroup.Item>*/}
                                                {/*    ))*/}
                                                {/*}*/}
                                                <ListGroup.Item
                                                    onClick={()=>{
                                                        setShow(true);
                                                        // give data of the post to the modal and add data as useEffect's deps
                                                    }}
                                                >
                                                    პოსტი - დავით აღმაშენებლი
                                                </ListGroup.Item>
                                            </ListGroup>
                                        )
                                    }
                                </Col>
                            </Row>
                        </div>

                        <PostModal
                            show={show}
                            onHide={() => {
                                setShow(false)
                            }}
                            // data={data}
                        />
                    </div>
                )
            }
        </>
    );
}