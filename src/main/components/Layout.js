import {Button, Container, Form, Navbar} from "react-bootstrap";
import {Offcanvas} from "react-bootstrap";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import {RiSunLine as DayIcon} from 'react-icons/ri';
import "../style/layout.css";
import {BsMoonStars as NightIcon} from "react-icons/bs";
import mainHeaderImage from "../images/mainHeader.png";
import {Outlet} from "react-router";

export default function Layout() {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            <Navbar key={'lg'} expand={'lg'}
                    className={`
                    text-${theme === 'dark' ? 'light' : 'dark'} 
                    bg-${theme}
                    `}>
                <Container fluid>
                    <img
                        src={mainHeaderImage}
                        alt={'თქვენ ვერ ხედავთ "საუნჯე"-ს მთავარ ფოტოს'}
                        className={'mainHeaderImage'}
                        onClick={() => {
                            window.location.replace('http://localhost:3000')
                        }}
                    />

                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-lg`}
                        className={`navbar-${theme === 'dark' ? 'dark' : 'light'}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="bottom"
                    >
                        <Offcanvas.Header
                            closeButton
                            className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}
                        >
                        </Offcanvas.Header>
                        <Offcanvas.Body
                            className={`text-${theme === 'dark' ? 'light' : 'dark'} bg-${theme} text-center `}>
                            {
                                theme === 'light' ? (
                                    <Button
                                        className={'m-2 sunshine'}
                                        onClick={() => {
                                            setTheme('dark')
                                        }}
                                    >
                                        <div className={'d-flex align-items-center'}>
                                            <div className={'me-3'}>ღამე</div>
                                            <NightIcon/>
                                        </div>
                                    </Button>
                                ) : (
                                    <Button
                                        className={'m-2 moonlight'}
                                        onClick={() => {
                                            setTheme('light')
                                        }}
                                    >
                                        <div className={'d-flex align-items-center'}>
                                            <div className={'me-3'}>დღე</div>
                                            <DayIcon/>
                                        </div>
                                    </Button>
                                )
                            }
                            <Form className="d-flex align-items-center  m-1">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="mx-2"
                                />
                                <Button variant="outline-primary">Search</Button>
                            </Form>
                            <Navbar.Text
                                className={'d-grid flex-grow-1 align-items-center justify-content-end'}>
                                <Button variant={'warning'} onClick={() => {
                                    window.location.replace('http://localhost:3000/login')
                                }}>Authorization</Button>
                            </Navbar.Text>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}