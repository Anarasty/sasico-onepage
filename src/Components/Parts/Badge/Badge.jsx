import React from 'react'
import './Badge.scss'

const Badge = ({ children, className = '' }) => {
  return (
    <h3 className={`badge ${className}`}>
      {children}
    </h3>
  )
}

export default Badge
