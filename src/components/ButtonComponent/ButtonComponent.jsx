import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  background: ${props => props.$backgroundColor || '#1677ff'};
  color: ${props => props.$textColor || '#fff'};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  width: ${props => props.$width || 'auto'};
  height: ${props => props.$height || 'auto'};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonComponent = ({ 
  children, 
  textColor, 
  backgroundColor, 
  width,
  height,
  disabled,
  onClick,
  ...props 
}) => {
  return (
    <ButtonStyle 
      $textColor={textColor}
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default ButtonComponent;