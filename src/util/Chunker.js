import React from 'react'
import CodeChunk from '../components/CodeChunk'
import getColor from '../util/Highlighting'

const startTagRegex = /<!([^/]*?)>/
const endTagRegex = /<!\s*?\/>/

export default function chunk(code, onMouseEnter) {
  let chunks = [];  //Holds generated React elements
  let tagStart = startTagRegex.exec(code); //Find the first tag
  while (tagStart ) {
    //While we're still finding tags
    chunks.push(code.substr(0, tagStart.index)) //Push all the code before the tag
    let {lang, concept} = getParams(tagStart[1]) //Get the tag params
    code = code.substr(tagStart.index + tagStart[0].length); //Cut off the tag
    const endTag = endTagRegex.exec(code) //Find the end tag
                                        //TODO fix this to work with nested tags
    const innerCode = code.substr(0, endTag.index); //This is the code between the tags
    chunks.push(
      <CodeChunk
        lang={lang}
        concept={concept}
        color={getColor()}
        onMouseEnter={onMouseEnter}
        >{chunk(innerCode, onMouseEnter)}</CodeChunk>)
    code = code.substr(endTag.index + endTag[0].length)
    tagStart = startTagRegex.exec(code); //Move to the next start tag
  }
  chunks.push(code); //Add the tail code
  return <span>{chunks}</span>;
}

function getParams(tag) {
  const paramsRegex = /(\S*)=(\S*)/g
  let obj = {};
  let param;
  while ((param = paramsRegex.exec(tag)) !== null) {
    obj[param[1]] = param[2];
  }
  return obj;
}
