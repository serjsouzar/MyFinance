import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"

import React from 'react'
import ResumeItem from "./ResumeItem"

const Resume = () => {
  return (
    <div className="resume_container">
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={1000}/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={1000}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={1000}/>
    </div>
  )
}

export default Resume