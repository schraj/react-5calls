import React, { PropTypes } from 'react'

const getKey = (line) => {
  return line.replace(/\s/g,'');
}

const ScriptLine = (line) => (
  	<p>{line}</p>
)

ScriptLine.propTypes = {
  line: PropTypes.string.isRequired,
}

export default ScriptLine
