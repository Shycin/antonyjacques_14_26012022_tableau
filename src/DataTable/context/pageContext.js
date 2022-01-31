import PropTypes from 'prop-types'
import React, { useState } from 'react'

export const pageContext = React.createContext()

export const ContextPageContextProvider = ({ children }) => {
  const [page, setPage] = useState(1)
  return (
    <pageContext.Provider
      value={{
        page,
        setPage,
      }}>
      {children}
    </pageContext.Provider>
  )
}

ContextPageContextProvider.propTypes = {
  children: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.any])
  ).isRequired,
}