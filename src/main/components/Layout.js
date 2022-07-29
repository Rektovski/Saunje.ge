import {Button, Container, Form, Navbar} from "react-bootstrap";
import {Offcanvas} from "react-bootstrap";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import {RiSunLine as DayIcon} from 'react-icons/ri';
import "../style/layout.css";
import {BsMoonStars as NightIcon} from "react-icons/bs";
import mainHeaderImage from "../images/mainHeader.png";
import {Outlet} from "react-router";
import ka from "../images/ka.gif";
import en from "../images/en.gif";
import LanguageContext from "../context/LanguageContext";

export default function Layout() {
    const {theme, setTheme} = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext);

    return (
        <div>
            <Navbar fixed={"top"} key={'lg'} expand={'lg'}
                    className={`
                    text-${theme === 'dark' ? 'light' : 'dark'} 
                    bg-${theme}
                    `}>
                <Container fluid className={"Navbar"}>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-lg`}
                        className={`navbar-${theme === 'dark' ? 'dark' : 'light'}`}
                    />
                    {/*<Navbar.Brand className={`text-${theme === 'dark' ? 'light' : 'dark'} bg-${theme} navbar-brand`}>*/}
                    {/*    {language === 'en' ? `Georgian Culture` : 'საქართველოს კულტურა'}*/}
                    {/*</Navbar.Brand>*/}
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="bottom"
                    >
                        <Offcanvas.Header
                            closeButton
                            className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}
                            closeVariant={`${theme === 'dark' ? 'white' : ''}`}
                        >
                        </Offcanvas.Header>
                        <Offcanvas.Body
                            className={`
                                text-${theme === 'dark' ? 'light' : 'dark'}
                                bg-${theme}`}>
                            <Form className={"d-flex align-items-center flex-fill m-1 Navbar"}>
                                <Form.Control
                                    type="search"
                                    placeholder={`${language === 'en' ? 'search' : 'ძებნა'}`}
                                    className="mx-2"
                                />
                                <Button variant="outline-primary">
                                    {`${language === 'en' ? 'search' : 'ძებნა'}`}
                                </Button>
                            </Form>
                            <div className={'d-flex justify-content-center align-items-center Navbar'}>
                                {
                                    theme === 'light' ? (
                                        <Button
                                            className={'m-2 moonlight'}
                                            onClick={() => {
                                                setTheme('dark')
                                            }}
                                        >
                                            <div className={'d-flex align-items-center'}>
                                                <div className={'me-3'}>
                                                    {language === 'en' ? 'Night' : 'ღამე'}
                                                </div>
                                                <NightIcon/>
                                            </div>
                                        </Button>
                                    ) : (
                                        <Button
                                            className={'m-2 sunshine'}
                                            onClick={() => {
                                                setTheme('light')
                                            }}
                                        >
                                            <div className={'d-flex align-items-center'}>
                                                <div className={'me-3'}>
                                                    {language === 'en' ? 'Day' : 'დღე'}
                                                </div>
                                                <DayIcon/>
                                            </div>
                                        </Button>
                                    )
                                }
                                <div className={'d-flex align-items-center justify-content-center'}>
                                    <div className={"image"}>
                                        <img
                                            src={ka}
                                            alt={`You can't see Georgian flag foto which translates text to Georgian`}
                                            style={{height: '1.5rem'}}
                                            onClick={() => {
                                                setLanguage('ka')
                                            }}
                                        />
                                    </div>
                                    <div className={"image"}>
                                        <img
                                            src={en}
                                            alt={`You can't see English flag foto which translates text to English`}
                                            style={{height: '1.5rem'}}
                                            onClick={() => {
                                                setLanguage('en')
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/*<Navbar.Text*/}
                            {/*    className={'d-grid flex-grow-1 align-items-center justify-content-end'}>*/}
                            {/*    <Button variant={'warning'} onClick={() => {*/}
                            {/*        window.location.replace('http://localhost:3000/login')*/}
                            {/*    }}>Authorization</Button>*/}
                            {/*</Navbar.Text>*/}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className={'d-flex justify-content-center marginFotoFromTop'}>
                <img
                    src={mainHeaderImage}
                    alt={'თქვენ ვერ ხედავთ "საუნჯე"-ს მთავარ ფოტოს'}
                    className={'mainHeaderImage'}
                    onClick={() => {
                        window.location.replace('http://localhost:3000')
                    }}
                />
            </div>
            <Outlet/>
        </div>
    )
}