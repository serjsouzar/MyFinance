import React from 'react'

const ResumeItem = ({title, Icon, value}) => {
  return (
    <div className="resume_item">
      <header className='resume_header'>
        {
        title === "Entradas" ? 
        (<p className='resume_title green_gradient'>{title}</p>)
        : title === "Saídas" ? 
          (<p className='resume_title orange_gradient'>{title}</p>)
        : (<p className='resume_title blue_gradient'>{title}</p>)
        } 
        <Icon />
      </header>
      <span className='resume_total'>{value}</span>
    </div>
  )
}

export default ResumeItem