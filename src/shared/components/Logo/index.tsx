import React from 'react';
import { ImageContainer } from './styles';
import logoPath from '../../../icons/logo.svg';

interface Props {
	width?: number;
}

const Logo: React.FC<Props> = ({ width }) => {
	return <ImageContainer src={logoPath} width={width} />;
};

export default Logo;
