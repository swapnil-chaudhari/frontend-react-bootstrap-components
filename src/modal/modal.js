import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cx from 'classnames';
import Close from 'src/icons/close';
import './modal.scss';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(75, 75, 75, 0.74902)'
    }
};

const Modal = ({
    className,
    children,
    isOpen,
    headerLabel,
    onRequestClose,
    footer,
    zIndex = 3,
    shouldCloseOnOverlayClick = true
}) => {
    customStyles.overlay.zIndex = zIndex;

    return (
        <ReactModal
            className={ cx(className, 'ReactModal') }
            isOpen={ isOpen }
            style={ customStyles }
            onRequestClose={ onRequestClose }
            contentLabel="Modal"
            shouldCloseOnOverlayClick={ shouldCloseOnOverlayClick }
            ariaHideApp={ false }
            bodyOpenClassName="ReactModal-body-open"
        >
            <div className="ReactModal-content">
                { headerLabel &&
                    <header className="ReactModal-header">
                        <div className="ReactModal-close" onClick={ onRequestClose } >
                            <Close />
                        </div>
                        <h4 className="ReactModal-header-text">
                           { headerLabel }
                        </h4>
                    </header>
                }
                <div className="ReactModal-body">
                    { children }
                </div>
                { footer &&
                    <div className="ReactModal-footer">
                        { footer }
                    </div>
                }
            </div>
        </ReactModal>
    );
};

Modal.displayName = 'Modal';
Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    shouldCloseOnOverlayClick: PropTypes.bool,
    headerLabel: PropTypes.string,
    footer: PropTypes.any,
    zIndex: PropTypes.number
};
export default Modal;
