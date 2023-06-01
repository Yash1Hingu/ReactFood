import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    );
}

const ModalBox = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const backdropItem = document.getElementById('backdrop');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,backdropItem)}
        {ReactDOM.createPortal(<ModalBox>{props.children}</ModalBox>,backdropItem)}
    </Fragment>
}

export default Modal;