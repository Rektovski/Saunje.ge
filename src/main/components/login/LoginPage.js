import {Button, Card, Form, Spinner} from "react-bootstrap";
import {useContext, useState} from "react";
import "../../style/LoginStyle.css";
import "../../../App.css";
import LanguageContext from "../../context/LanguageContext";
import ka from "../../images/ka.gif";
import en from "../../images/en.gif";

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const {language, setLanguage} = useContext(LanguageContext);
    const [token, setToken] = useState(false);

    const code = "123";

    const authorization = () => {
        if (password === code) {
            setToken(true);
            localStorage.setItem('password', 'Admin');
            setTimeout(() => {
                window.location.replace("http://localhost:3000");
            }, 1000);
        }
        console.log(1);
    }

    return (
        <>
            {
                token ? (
                    <div className={'loading'}>
                        <Spinner
                            variant={'info'}
                            as="span"
                            animation="border"
                        />
                    </div>
                ) : (
                    <div className={'loginPageStyle app'}>
                        <Card className={'rounded border-info'}>
                            <Form>
                                <Form.Group className={'m-2 text-center'}>
                                    <Form.Label className={'m-2'}>
                                        {language === 'en' ? 'Password' : 'პაროლი'}
                                    </Form.Label>
                                    <Form.Control
                                        placeholder={`${language === 'en' ? 'type your password' : 'შეიყვანეთ პაროლი'}`}
                                        type={'password'}
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                </Form.Group>
                                <div className={'d-flex'}>
                                    <div className={'flex-fill'}>
                                        <Button variant={'outline-danger'} className={'m-2'} onClick={() => {
                                            window.location.replace('http://localhost:3000')
                                        }}>
                                            {language === 'en' ? '<- Go Back' : '<- უკან დაბრუნება'}
                                        </Button>
                                    </div>
                                    <div className={''}>
                                        <Button
                                            variant={'outline-primary'}
                                            className={'m-2'}
                                            onClick={authorization}
                                        >
                                            {language === 'en' ? 'Log in ->' : 'შესვლა ->'}
                                        </Button>
                                    </div>
                                </div>
                                <div className={'d-flex align-items-center justify-content-end'}>
                                    <div className={'me-3'}>
                                        {language === 'en' ? 'Change Language ' : 'ენის შეცვლა '}
                                    </div>
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
                            </Form>
                        </Card>
                    </div>
                )
            }
        </>
    );
}