import React, {useContext, useEffect, useState} from 'react';
import ThemeContext from "../../context/ThemeContext";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "react-pro-sidebar/dist/css/styles.css";
import "../../style/leftLayoutStyle.css";
import {Accordion} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";
import axios from "axios";
import ServerUrlContext from "../../context/ServerUrlContext";

export default function LeftLayout(props) {
    const {theme} = useContext(ThemeContext);
    const [menu, setMenu] = useState([])
    const {language} = useContext(LanguageContext);
    const {serverUrl} = useContext(ServerUrlContext);
    const [tempItem, setTempItem] = useState("");
    const [centerContent, setCenterContent] = useState("");

    useEffect(()=>{

        setMenu([
            {
                itemId: 0,
                name: {
                    ka: 'ეპარქიები',
                    en: 'epa',
                }
            }, {
                itemId: 1,
                name: {
                    ka: 'მონასტრები',
                    en: 'monastery',
                }
            }, {
                itemId: 2,
                name: {
                    ka: 'ეკლესიები',
                    en: 'church',
                }
            }
        ])

        //TODO: უნდა წამოიღოს სერვერიდან მერე
        axios.get(`${serverUrl}/refresh_menu`, {
            params: {
                language
            }
        }).then((response)=>{
            setMenu(response.data)
        }).catch((error)=>console.error(error, 'error during refreshing menu'));


        if (tempItem) {
            request(tempItem)
        }

    },[language])

    const request = async (item) => {
        await axios.get(`${serverUrl}/retrieve_topic_text`, {
            params: {
                itemId: item.itemId,
                language
            }
        }).then((response)=>{
            setCenterContent(response.data);
        }).catch((error)=>console.error(error, 'error during retrieving topic text'));

        props.showSideBarInfo(true);
        setTimeout(() => {
            document.getElementById('topicTitleId').innerText = language === 'en' ? item.name.en : item.name.ka;
            document.getElementById('sideBarComponent').innerHTML = centerContent + '<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg" alt="lazo" width="200" height="200"></p>\n' +
                '<p>lazo magaria</p>'; // content sheidzleba object iyos... content.text iqneba mashin an rame msgavsi
        }, 1);

        setTempItem(item)
    }

    return (
        <Accordion className={`menu m-2 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <Accordion.Item eventKey="0">
                <Accordion.Header className={'text-center'}>
                    {
                        language === 'en' ? 'Menu' : 'მენიუ'
                    }
                </Accordion.Header>
                <Accordion.Body
                    className={'hovering'}
                    onClick={() => {
                        window.location.replace('http://localhost:3000')
                    }}
                >
                    {
                        language === 'en' ? 'Home' : 'მთავარი გვერდი'
                    }
                </Accordion.Body>
                {
                    menu.map((item) => (
                        <Accordion.Body
                            key = {item.itemId}
                            className={'hovering'}
                            onClick={() => {
                                request(item)
                            }}
                        >
                            {language === 'en' ? item.name.en : item.name.ka}
                        </Accordion.Body>

                    ))
                }
            </Accordion.Item>
        </Accordion>
    );
}