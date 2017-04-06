import React, { PropTypes } from 'react'

const DebugButton = (isDebug, debugFunc) => (
   <span>
       {isDebug && 
        <button onClick={debugFunc}>
                Reset
            </button>
       }
    </span>
)

DebugButton.propTypes = {
  isDebug: PropTypes.bool.isRequired,
  debugFunc: PropTypes.func.isRequired,
}

export default DebugButton
