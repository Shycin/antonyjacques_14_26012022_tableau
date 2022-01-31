import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const lengthPageContext = React.createContext()

export const ContextLengthPageContextContextProvider = ({ children }) => {
  const [length, setLength] = useState(1)
  return (
    <lengthPageContext.Provider
      value={{
        length,
        setLength,
      }}>
      {children}
    </lengthPageContext.Provider>
  )
}

ContextLengthPageContextContextProvider.propTypes = {
  children: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.any])
  ).isRequired,
}