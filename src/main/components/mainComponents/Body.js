import {Col, ListGroup, Row} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../context/ThemeContext";
import "../../style/bodyStyle.css";
import LeftLayout from "./LeftLayout";
import PostModal from "./PostModal";
import UserContext from "../../context/UserContext";
import ControlPanel from "../adminPanel/ControlPanel";
import axios from "axios";
import LanguageContext from "../../context/LanguageContext";
import ServerUrlContext from "../../context/ServerUrlContext";

export default function Body() {
    const {theme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    const [newsDetailed, setNewsDetailed] = useState({});
    const [newsList, setNewsList] = useState([]);
    const {language} = useContext(LanguageContext);
    const {serverUrl} = useContext(ServerUrlContext);

    useEffect(()=>{
        //TODO: უნდა წამოიღოს სერვერიდან სიახლეები
        // {
        //     newsId: 0,
        //     title: 'epa',
        //     text: 'aaa',
        // }
        axios.get(`${serverUrl}/refresh_news`, {
            params: {
                language
            }
        }).then((response)=>{
            setNewsList(response.data)
        }).catch((error)=>console.error(error, 'error during refreshing news list'));


        setNewsList([{
            newsId: 0,
            title: 'lazo',
            text: 'lazo',
            date: '2022/07/29'
        }, {
            newsId: 1,
            title: 'oto',
            text: 'oto',
            date: '2022/07/28'
        }, {
            newsId: 2,
            title: 'luka',
            text: 'luka',
            date: '2022/07/27'
        }, {
            newsId: 3,
            title: 'dachi',
            text: 'dachi',
            date: '2022/07/26'
        }])

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
                                            <div>
                                                <h1 id={"topicTitleId"} className={'text-center'}></h1>
                                                <div id={"sideBarComponent"} className={'m-2 p-5 border border-1 rounded'}></div>
                                            </div>
                                        ) : (
                                            <div>
                                                <h1 className={'text-center'}>
                                                    {language === 'en' ? 'news' : 'სიახლეები'}
                                                </h1>
                                                <ListGroup className={'m-2'}>
                                                    {
                                                        newsList.map((listItem)=>(
                                                            <ListGroup.Item
                                                                key={listItem.newsId}
                                                                onClick={()=>{
                                                                    setShow(true);
                                                                    setNewsDetailed(listItem)
                                                                }}
                                                            >
                                                                {listItem.title}
                                                            </ListGroup.Item>
                                                        ))
                                                    }
                                                </ListGroup>
                                            </div>

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
                            data={newsDetailed}
                        />
                    </div>
                )
            }
        </>
    );
}