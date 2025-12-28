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
        <img src={icon} alt="Icon" className="btn-icon btn-icon-left" />
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && (
        <img src={icon} alt="Icon" className="btn-icon btn-icon-right" />
      )}
    </button>
  )
}

export default Button

