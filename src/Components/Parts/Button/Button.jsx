import React from 'react'
import './Button.scss'

const Button = ({ 
  children, 
  icon, 
  iconPosition = 'left', 
  className = '', 
  ...props 
}) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {icon && iconPosition === 'left' && (
        <span className="btn-icon btn-icon-left">
          <img src={icon} alt="Icon" />
        </span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="btn-icon btn-icon-right">
          <img src={icon} alt="Icon" />
        </span>
      )}
    </button>
  )
}

export default Button

