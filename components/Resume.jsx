import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"

import React from 'react'
import ResumeItem from "./ResumeItem"

const Resume = ({income, outcome, total}) => {
  return (
    <div className="resume_container">
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={outcome}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </div>
  )
}

export default Resume