import React from 'react'
import CodeChunk from '../components/CodeChunk'
import getColor from '../util/Highlighting'

const startTagRegex = /<!([^/]*?)>/
const endTagRegex = /<!\s*?\/>/

export default function chunk(code, onMouseEnter) {
  return <span>{chunkInner(code, onMouseEnter)}</span>
}

function chunkInner(code, onMouseEnter) {
  let chunks = [];
  //Enter a loop to iterate over the code
  let startTag = startTagRegex.exec(code);
  while(startTag) {
    //Chop off all before it, so as long as it has length
    if(startTag.index > 0) {
      chunks.push(<span key={chunks.length}>{code.substr(0, startTag.index)}</span>);
      code = code.substr(startTag.index);
    }

    //Get position of it's mate
    let endTag = findMate(code);
    //Slice out the inner bit
    let innerCode = code.substring(startTag[0].length, endTag.index);
    //Wrap it in a code chunk
    const {concept, lang} = getParams(startTag[1])
    const chunk = (
      <CodeChunk
        key={chunks.length}
        concept={concept}
        lang={lang}
        color={getColor()}
        onMouseEnter={onMouseEnter}>
          {chunkInner(innerCode, onMouseEnter)}
        </CodeChunk>
    );
    chunks.push(chunk);
    //Slice off the inner code and tags
    code = code.substr(endTag.index + endTag[0].length);
    //Find the next start tag
    startTag = startTagRegex.exec(code);
  }
  //If there is anything left, wrap it and add it
  if (code.length > 0) {
    chunks.push(<span key={chunks.length}>{code}</span>)
  }
  return chunks;
}

function findMate(code) {
  const startTagRegexLocal = /<![^/]*?>/g
  const endTagRegexLocal = /<!\s*?\/>/g
  //Find first start tag, just ignore it
  startTagRegexLocal.exec(code);
  //Find each tag until we've found more close tags than open tags
  let counter = 0;
  let nextStartTag = startTagRegexLocal.exec(code)
  let nextEndTag = endTagRegexLocal.exec(code)
  while (true) {
    if (nextStartTag === null || nextEndTag.index < nextStartTag.index) {
      if(counter <= 0) {
        return nextEndTag;
      }
      counter--;
      nextEndTag = endTagRegexLocal.exec(code)
    } else if (nextStartTag.index < nextEndTag.index) {
      counter++;
      nextStartTag = startTagRegexLocal.exec(code);
    }
  }
}

function getParams(tag) {
  const paramsRegex = /(\S*)=(\S*)/g;
  let obj = {};
  let param;
  while ((param = paramsRegex.exec(tag)) !== null) {
    obj[param[1]] = param[2];
  }
  return obj;
}
