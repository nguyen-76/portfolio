import React from 'react'

function Header({title, subTitle}) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  )
}

export default Header
