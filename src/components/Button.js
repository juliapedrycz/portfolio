import React from 'react';
import '../styles/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--github', 'btn--linkedin', 'btn--resume', 'btn--test', 'btn--play'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
                         children,
                         type,
                         onClick,
                         buttonStyle,
                         buttonSize,
                         linkTo

                       }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <a rel={'external'} className='btn-mobile'
         target="_blank" href={linkTo} >
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
          {children}
        </button>
      </a>
  );
};