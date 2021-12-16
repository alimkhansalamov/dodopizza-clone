import React from 'react';
import classNames from 'classnames';


const Button = ({ className, outline, children, random}) => {
  return (
    <button
      onClick={() => random()}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;