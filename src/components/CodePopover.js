import React from 'react'
import { Popover } from 'react-bootstrap'

const CodePopover = ({ description }) => {
  if (description) return (

  <Popover id='popover' title={description.concept_name}>
      <p>{description.description}</p>
      <pre>{description.syntax}</pre>
  </Popover>

  )
  
  else return null;
}


export default CodePopover;
