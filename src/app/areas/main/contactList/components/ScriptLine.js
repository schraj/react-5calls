import React, { PropTypes } from 'react'

const ScriptLine = (line) => (
  	<p>{line}</p>
)

ScriptLine.propTypes = {
  line: PropTypes.string.isRequired,
}

export default ScriptLine
