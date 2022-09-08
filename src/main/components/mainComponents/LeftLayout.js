import React, {useContext, useEffect, useState} from 'react';
import ThemeContext from "../../context/ThemeContext";
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

    useEffect(()=>{

        axios.get(`${serverUrl}/get_menu`).then((response)=>{
            setMenu(response.data)
        }).catch((error)=>console.error(error, 'error during refreshing menu'));

        if (tempItem) {
            request(tempItem)
        }

    },[language])

    const request = async (item) => {
        await axios.get(`${serverUrl}/get_menu_item_context`, {
            params: {
                menuItemId: item.menuItemId,
                language
            }
        }).then((response)=>{

            setTempItem(item)
            props.showSideBarInfo(true);
            setTimeout(() => {
                document.getElementById('topicTitleId').innerText = language === 'en' ? item.enText : item.kaText;
                document.getElementById('sideBarComponent').innerHTML = response.data;
            }, 1);
        }).catch((error)=>console.error(error, 'error during retrieving topic text'));
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
                            key = {item.menuItemId}
                            className={'hovering'}
                            onClick={() => {
                                request(item)
                            }}
                        >
                            {language === 'en' ? item.enText : item.kaText}
                        </Accordion.Body>

                    ))
                }
            </Accordion.Item>
        </Accordion>
    );
}