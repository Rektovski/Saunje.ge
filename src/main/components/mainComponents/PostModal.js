import {Modal} from "react-bootstrap";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

export default function PostModal(props) {
    const {theme} = useContext(ThemeContext);

    return (
        <Modal {...props} size={'xl'}>
            <Modal.Header closeButton className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                <Modal.Title className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    {props.data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}  rounded`}>
                {props.data.text}
            </Modal.Body>
        </Modal>
    );
}