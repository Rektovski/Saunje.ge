import React, {useContext, useEffect, useState} from 'react';
import ThemeContext from "../../context/ThemeContext";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "react-pro-sidebar/dist/css/styles.css";
import "../../style/leftLayoutStyle.css";
import {Accordion} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";

export default function LeftLayout(props) {
    const {theme} = useContext(ThemeContext);
    const [menu, setMenu] = useState([])
    const {language} = useContext(LanguageContext);

    useEffect(()=>{

        if (language === 'en') {
            setMenu([
                {
                    itemId: 0,
                    name: 'epa'
                }, {
                    itemId: 1,
                    name: 'monastery'
                }, {
                    itemId: 2,
                    name: 'church'
                }
            ])
        } else {
            setMenu([
                {
                    itemId: 0,
                    name: 'ეპარქიები'
                }, {
                    itemId: 1,
                    name: 'მონასტრები'
                }, {
                    itemId: 2,
                    name: 'ეკლესიები'
                }
            ])
        }



        //TODO: უნდა წამოიღოს სერვერიდან მერე

        // axios.get('serveris misamarti')
        //     .then((response)=>{
        //         setMenu(response.data)
        //     })
        //     .catch(error=>console.error(error, "error"))
    },[language])

    const request = (itemId) =>  {
        //TODO: გასაკეთებელია სერვერთან რექვესტის გაშვება
        props.showSideBarInfo(true);
        setTimeout(() => {
            document.getElementById('sideBarComponent').innerHTML = itemId;
        }, 1);
    }

    return (
        <Accordion className={`menu m-2 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <Accordion.Item eventKey="0">
                {/*//TODO: თარგმნე*/}
                <Accordion.Header className={'text-center'}>მენიუ</Accordion.Header>
                <Accordion.Body
                    className={'hovering'}
                    onClick={() => {
                        window.location.replace('http://localhost:3000')
                    }}
                >
                    {/*//TODO: თარგმნე*/}
                    მთავარი გვერდი
                </Accordion.Body>

                {
                    menu.map((item) => (

                        <Accordion.Body
                            key = {item.itemId}
                            className={'hovering'}
                            onClick={() => {
                                request(item.itemId)
                            }}
                        >
                            {item.name}
                        </Accordion.Body>

                    ))
                }
            </Accordion.Item>
        </Accordion>
    );
}