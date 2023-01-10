import React, { useState, ReactNode } from 'react';
import { Modal as MaterialModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContainer, ModalTitle, CloseButton } from './styles';

interface Props {
	title?: string;
	children: ReactNode;
}

const Modal: React.FC<Props> = ({ title, children }) => {
	const [open, setOpen] = useState(false);
	// const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<MaterialModal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<ModalContainer>
				<CloseButton onClick={handleClose}>
					<CloseIcon />
				</CloseButton>
				<ModalTitle>{title}</ModalTitle>
				{children}
			</ModalContainer>
		</MaterialModal>
	);
};

export default Modal;
