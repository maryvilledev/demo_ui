import React from 'react'

const CodeChunk = ({concept, lang, color, children, onMouseEnter}) => (
  <span
    style={{backgroundColor: color}}
    onMouseEnter={() => onMouseEnter(lang, concept)}
    >{children}</span>
)

CodeChunk.propTypes = {
  color: React.PropTypes.string,
  concept: React.PropTypes.string,
  lang: React.PropTypes.string,
  children: React.PropTypes.any,
  onMouseEnter: React.PropTypes.func,
}

export default CodeChunk;
