import React from 'react'

const Accordion = ({title,desc}) => {
  return (
    <div>
        <span>{title}</span>
        <span>{desc}</span>
    </div>
  )
}

export default Accordion