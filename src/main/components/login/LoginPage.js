import {Button, Card, Form} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import "../../style/LoginStyle.css";
import UserContext from "../../context/UserContext";
import "../../../App.css";

export default function LoginPage() {
    const {user} = useContext(UserContext);
    const [password, setPassword] = useState('');
    const code = "e28pL^ND0#6Yn#UMSUD@7Imh6!lL5#G!tU7@oy$!";

    useEffect(() => {
        authorization();
    }, [user]);

    const authorization = () => {
        if (password === code) {
            localStorage.setItem('password', 'Admin');
            window.location.replace("http://localhost:3000");
        }
        console.log(1);
    }

    return (
        <div className={'loginPageStyle app'}>
            <Card className={'rounded border-info'}>
                <Form>
                    <Form.Group className={'m-2 text-center'}>
                        <Form.Label className={'m-2'}>Password</Form.Label>
                        <Form.Control
                            placeholder={'type your password'}
                            type={'password'}
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </Form.Group>
                    <div className={'d-flex'}>
                        <div className={'flex-fill'}>
                            <Button variant={'outline-danger'} className={'m-2'} onClick={() => {
                                window.location.replace('http://localhost:3000')
                            }}>უკან დაბრუნება</Button>
                        </div>
                        <div className={''}>
                            <Button variant={'outline-primary'} className={'m-2'}
                                    onClick={authorization}>შესვლა</Button>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    );
}