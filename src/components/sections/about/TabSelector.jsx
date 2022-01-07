import * as React from 'react';
import styled from 'styled-components'

const ButtonStyles = styled.button`
    border-bottom: 2px solid ${props => (props.isActive ? 'black' : 'transparent')};
`

export const TabSelector = ({ isActive, children, onClick }) => (
	<ButtonStyles isActive={isActive} onClick={onClick}>
		{children}
	</ButtonStyles>
);
