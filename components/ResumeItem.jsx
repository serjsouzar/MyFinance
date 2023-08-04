import React from 'react'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <div className="resume_item">
      <header className='resume_header'>
        <p className='resume_title'>{title}</p>
        <Icon />
      </header>
      <span className='resume_total'>{value}</span>
    </div>
  )
}

export default ResumeItem