import React from 'react'
import CodeChunk from '../components/CodeChunk'
import getColor from '../util/Highlighting'

export default function chunk(code, node, onMouseEnter) {
  const lang = node.lang;
  const concept = node.concept;
  let begin = node.begin;
  let i = 0;
  const children = node.children.map((child) => {
    if (begin > child.begin) 
      throw new Error('Unordered children');
    const lang = node.lang;
    const concept = node.concept;

    const snippet = code.substring(begin, child.begin);
    const codeChunk = (
      <span key={i++}>
        <CodeChunk
          lang={lang}
          concept={concept}
          color={getColor()}
          onMouseEnter={onMouseEnter}
        >{snippet}</CodeChunk>
        {chunk(code, child, onMouseEnter)} 
      </span>
    );
    begin = child.end;
    return codeChunk;
  });

  return (
    <CodeChunk
      lang={lang}
      concept={concept}
      color={getColor()}
      onMouseEnter={onMouseEnter}
    >{children}{code.substring(begin, node.end)}</CodeChunk>
  );
}
