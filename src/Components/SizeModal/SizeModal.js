import React from 'react';
import './SizeModal.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const SizeModal = (props) => 
{
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalStyle = {
        color: 'var(--blue)',
        textAlign: 'center'
    };

    const buttonStyle = {
        color: "white", 
        position: "relative", 
        left: "40%", 
        top: "20px"
    }
    const body = (
        <div className="modalBody" style={modalStyle}>
            <Button style={buttonStyle}
                    onClick={handleClose}>
                    X
            </Button>
            <h2 id="sizeModal" style={{marginTop: 100}}>Small Screen Size</h2>
            <p id="modal-triggered-by-small-screens">
                This portfolio is best viewed on screens wider than 768 pixels.
            </p>
        </div>
    );

    return (
        <div className="modalContainer">
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="sizeModal"
                aria-describedby="modal-triggered-by-small-screen"
                style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}
                >
                {body}
            </Modal>
        </div>
    );
}

export default SizeModal;