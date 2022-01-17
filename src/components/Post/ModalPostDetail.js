import { Modal, Button } from 'react-bootstrap';
import parse from "html-react-parser";


const ModalPostDetail = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.showItem && props.showItem.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.showItem && parse(props.showItem.description)}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalPostDetail;

