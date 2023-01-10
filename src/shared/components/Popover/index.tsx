import React, { ReactNode } from 'react';
import { Container, MaterialPopover, PopoverController } from './styles';
import CloseIcon from '@mui/icons-material/Close';
interface Props {
	children: ReactNode;
	popoverAnchor: HTMLButtonElement | null;
	setPopoverAnchor: Function;
}

const Popover: React.FC<Props> = ({
	children,
	popoverAnchor,
	setPopoverAnchor,
}) => {
	const handleClose = () => {
		setPopoverAnchor(null);
	};

	return (
		<MaterialPopover
			id={popoverAnchor ? 'simple-popover' : undefined}
			open={Boolean(popoverAnchor)}
			anchorEl={popoverAnchor}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
		>
			<Container>
				<PopoverController onClick={handleClose}>
					<CloseIcon />
				</PopoverController>
				{children}
			</Container>
		</MaterialPopover>
	);
};

export default Popover;
