import React from "react";
import ReactDOM  from "react-dom";

import classes from './Modal.module.css';

const Backdrop = props =>{
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
        );
    };
    
    const ModalOverlay = props => {
        return (
            <div className={classes.modal}>
                <div className={classes.content}>
                    {props.children}
                </div>
            </div>

        );

};

const PortalElement = document.getElementById('overlay');

const Modal = props =>{
    
    return (
        <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,PortalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
        </React.Fragment>
    );
};


export default Modal;