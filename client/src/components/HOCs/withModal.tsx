import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateServer from '../../Server/CreateServer';

type BasicModalProps = {
    children: React.ReactNode
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    // height: 600,
    bgcolor: '#242429',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
    // animation: 'createServerAni 0.2s ease-in-out',
};

const withModal = (WrappedComponene: React.ComponentType<any>) => {

    return function ModalComponent({ children, ...props }: BasicModalProps) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <div>
                <div onClick={handleOpen}>{children}</div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <WrappedComponene {...props} handleClose={handleClose} />
                    </Box>
                </Modal>
            </div>
        );
    }
}

export default withModal