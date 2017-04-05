import React, { PropTypes } from 'react'
import uuid from 'uuid'


const ScriptLine = (line) => (
  	<p key={uuid()}>{line}</p>
)

ScriptLine.propTypes = {
  line: PropTypes.string.isRequired,
}

export default ScriptLine
