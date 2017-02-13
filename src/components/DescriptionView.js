import React from 'react'

const DescriptionView = ({description, active}) => {
  if (active) return (
  <div>
    <h1>{description.concept_name}</h1>
    <p>{description.description}</p>
    <pre>{description.syntax}</pre>
  </div>
  )
  else return (
    <h2> Hover over code to see a description of a concept here! </h2>
  );
}

DescriptionView.propTypes = {
  description: React.PropTypes.object,
  active: React.PropTypes.bool,
}

export default DescriptionView
