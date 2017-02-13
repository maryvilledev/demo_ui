import React from 'react'

const CodeChunk = ({concept, lang, children, onMouseEnter}) => (
  <div onMouseEnter={() => onMouseEnter(concept, lang)}>{children}</div>
)

CodeChunk.PropTypes = {
  concept: React.PropTypes.string,
  lang: React.PropTypes.string,
  children: React.PropTypes.element,
  onMouseEnter: React.PropTypes.func,
}

export default CodeChunk
