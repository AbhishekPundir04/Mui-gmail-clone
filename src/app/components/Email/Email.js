import React from 'react'
import EmailListSetting from './EmailListSetting'
import './Email.scss'
import EmailType from './EmailType'
const Email = () => {
  return (
    <div className='email_list'>
        <EmailListSetting/>
        <EmailType/>

    </div>
  )
}

export default Email