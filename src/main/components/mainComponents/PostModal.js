import {Modal} from "react-bootstrap";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import Text from "../../textDocumentsExample/Text";

export default function PostModal(props) {
    const {theme} = useContext(ThemeContext);

    return (
        <Modal {...props} size={'xl'}>
            <Modal.Header closeButton className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                <Modal.Title className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    პოსტის სახელი - დავით აღმაშენებელი
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}  rounded`}>
                <Text/>
            </Modal.Body>
        </Modal>
    );
}