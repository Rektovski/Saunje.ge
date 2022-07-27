import React, {useContext} from 'react';
import ThemeContext from "../../context/ThemeContext";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "react-pro-sidebar/dist/css/styles.css";
import "../../style/leftLayoutStyle.css";
import {Accordion} from "react-bootstrap";

export default function LeftLayout(props) {
    const {theme} = useContext(ThemeContext);

    return (
        <Accordion className={`menu m-2 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            {/*
            todo -
            dasamateblia serverze accordionis shesabamisi masivi,
             romelshic iqneba titoeul matganze mibmuli tito obieqti,
              romelshic iqneba shemdegi key
              id: tviton unda iqmnebodes unikaluri
              title: accordionis listis saxeli
              text: accordionis listis html formatshi dawerili text
              */}
            <Accordion.Item eventKey="0">
                <Accordion.Header className={'text-center'}>Menu</Accordion.Header>
                <Accordion.Body
                    className={'hovering'}
                    onClick={() => {
                        window.location.replace('http://localhost:3000')
                    }}
                >
                    მთავარი გვერდი
                </Accordion.Body>
                <Accordion.Body
                    className={'hovering'}
                    onClick={() => {
                        props.showSideBarInfo(true);
                        setTimeout(() => {
                            document.getElementById('sideBarComponent').innerHTML = 'ეპარქიები';
                            {/* todo dasamatebelia innerHtml-istvis obieqtis key rom serveridan wamoghebuli info gaarchios da sachiro info chados centrshi. */
                            }
                        }, 1);
                        {/* todo dasamatebelia serverze request-is gagzavna rom akordionis chamonatvalidan archeuli komponenti gaixsnas serverze arsebuli gamzadebuli html formatit */
                        }
                    }}
                >
                    ეპარქიები {/*AccordionBodyText == eparqiebi*/}
                </Accordion.Body>
                <Accordion.Body
                    className={'hovering'}
                    onClick={() => {
                        props.showSideBarInfo(true);
                        setTimeout(() => {
                            document.getElementById('sideBarComponent').innerHTML = 'მონასტრები';
                        }, 1);
                    }}
                >
                    მონასტრები
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        // <div id="header">
        // <ProSidebar className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
        // <SidebarHeader className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
        // <div className={'d-flex justify-content-center'}>Menu</div>
        // </SidebarHeader>
        // <SidebarContent className={`bodyChanger bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
        // <Menu iconShape="square">
        // <MenuItem className={'hovering'}>Home</MenuItem>
        // <MenuItem className={'hovering'}>Category</MenuItem>
        // <MenuItem className={'hovering'}>Favourite</MenuItem>
        // <MenuItem className={'hovering'}>Author</MenuItem>
        // <MenuItem className={'hovering'}>Settings</MenuItem>
        // </Menu>
        // </SidebarContent>
        // </ProSidebar>
        // </div>

// <Navigation
        //     // you can use your own router's api to get pathname
        //     activeItemId="/management/members"
        //     onSelect={({itemId}) => {
        //         // window.location.replace("http://localhost:3000" + itemId)
        //         props.showSideBarInfo();
        //         setTimeout(()=>{
        //             document.getElementById('sideBarComponent').innerHTML = itemId;
        //         },1);
        //     }}
        //
        //     items={[
        //         {
        //             title: 'ეპარქიები',
        //             itemId: '/eparqiebi',
        //         }, {
        //             title: 'ეკლესია-მონასტრები',
        //             itemId: '/management',
        //         }, {
        //             title: 'ციხე-ქალაქები',
        //             itemId: '/another',
        //         },
        //     ]}
        // />

    );
}