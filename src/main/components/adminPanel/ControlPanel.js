import {Accordion, Button, Container, Form, InputGroup} from "react-bootstrap";
import {useState, useContext, useRef} from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { Editor } from '@tinymce/tinymce-react';

export default function ControlPanel() {
    const {theme} = useContext(ThemeContext);
    const [newPostName, setNewPostName] = useState('');
    const [newPostText, setNewPostText] = useState('');
    const {language} = useContext(LanguageContext);
    const editorRef = useRef(null);

    //TODO: useEffect გვინდა სერვერიდან მენიუს წამოსაღებას

    return (
        <Container>
            <div className={'text-center my-3'}>
                <Button variant={'danger'} onClick={() => {
                    localStorage.clear('password');
                    window.location.replace('http://localhost:3000/login');
                }}>
                    {language === 'en' ? 'Exit' : 'გამოსვლა'}
                </Button>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0" className={'my-3'}>
                    <Accordion.Header className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        {language === 'en' ? 'Add Post' : 'პოსტის დამატება'}
                    </Accordion.Header>
                    <Accordion.Body className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        <Form className={'my-2 p-5'}>
                            <h1 className={'text-center'}>
                                {`${language === 'en' ? 'Add Post' : 'პოსტის დამატება'}`}
                            </h1>
                            {`${language === 'en' ? 'Title' : 'პოსტის სახელი'}`}
                            <InputGroup className="my-3">
                                <Form.Control
                                    placeholder={`${language === 'en' ? 'type post' : 'აკრიფეთ სახელი'}`}
                                    value={newPostName}
                                    onChange={event => setNewPostName(event.target.value)}
                                />
                            </InputGroup>
                            {`${language === 'en' ? 'Text' : 'პოსტის ტექსტი'}`}
                            <InputGroup className="my-3">
                                <Form.Control
                                    placeholder={`${language === 'en' ? 'type post' : 'აკრიფეთ ტექსტი'}`}
                                    as={'textarea'}
                                    style={{resize: "vertical", minHeight: 100, maxHeight: 400}}
                                    value={newPostText}
                                    onChange={event => setNewPostText(event.target.value)}
                                />
                            </InputGroup>
                            <div className={'d-flex justify-content-end'}>
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        //TODO : სერვერზე აიტვირთოს
                                        setNewPostText('');
                                        setNewPostName('');
                                    }}
                                >
                                    {`${language === 'en' ? 'Submit' : 'ატვირთვა'}`}
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={'my-3'}>
                    <Accordion.Header className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        {`${language === 'en' ? 'change menu' : 'მენიუს ცვლილება'}`}
                    </Accordion.Header>
                    <Accordion.Body className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        <Form className={'my-2 p-5'}>
                            <h1 className={'text-center'}>
                                {`${language === 'en' ? 'change menu' : 'მენიუს ცვლილება'}`}
                            </h1>
                            {`${language === 'en' ? 'Title' : 'პოსტის სახელი'}`}
                            <InputGroup className="my-3">
                                <Form.Control
                                    placeholder={`${language === 'en' ? 'type post' : 'აკრიფეთ სახელი'}`}
                                    value={newPostName}
                                    onChange={event => setNewPostName(event.target.value)}
                                />
                            </InputGroup>
                            {`${language === 'en' ? 'Text' : 'პოსტის ტექსტი'}`}
                            <InputGroup className="my-3">
                                <Form.Control
                                    placeholder={`${language === 'en' ? 'type post' : 'აკრიფეთ ტექსტი'}`}
                                    as={'textarea'}
                                    style={{resize: "vertical", minHeight: 100, maxHeight: 400}}
                                    value={newPostText}
                                    onChange={event => setNewPostText(event.target.value)}
                                />
                            </InputGroup>
                            <div className={'d-flex justify-content-end'}>
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        setNewPostText('');
                                        setNewPostName('');
                                    }}
                                >
                                    {`${language === 'en' ? 'Submit' : 'ატვირთვა'}`}
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={'my-3'}>
                    <Accordion.Header className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        {`${language === 'en' ? 'change menu text' : 'მენიუს ტექსტის რედაქტირება'}`}
                    </Accordion.Header>
                    <Accordion.Body className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                        <Form className={'my-2 p-5'}>
                            <h1 className={'text-center'}>
                                {`${language === 'en' ? 'change menu' : 'მენიუს ცვლილება'}`}
                            </h1>
                            {`${language === 'en' ? 'Title' : 'პოსტის სახელი'}`}
                            <InputGroup className="my-3">
                                <Form.Control
                                    placeholder={`${language === 'en' ? 'type post' : 'აკრიფეთ სახელი'}`}
                                    value={newPostName}
                                    onChange={event => setNewPostName(event.target.value)}
                                />
                            </InputGroup>
                            {`${language === 'en' ? 'Text' : 'პოსტის ტექსტი'}`}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                    ],
                                    toolbar: 'undo redo | blocks | ' +
                                        'bold italic forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            <div className={'d-flex justify-content-end'}>
                                <Button
                                    variant="success"
                                    onClick={() => {

                                        //TODO : სერვერზე აიტვირთოს
                                        if (editorRef.current) {
                                            console.log(editorRef.current.getContent());
                                        }


                                        setNewPostText('');
                                        setNewPostName('');
                                    }}
                                >
                                    {`${language === 'en' ? 'Submit' : 'ატვირთვა'}`}
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </Container>
    )
}