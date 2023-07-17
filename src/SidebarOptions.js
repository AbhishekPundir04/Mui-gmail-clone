import React from 'react'
import './SidebarOptions.scss'

const SidebarOptions = ({Icon,title,number}) => {
  return (
    <div className='sideoptions-main'>
        <Icon className="icons"/>
        <p>{title}</p>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions