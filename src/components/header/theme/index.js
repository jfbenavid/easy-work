import React from 'react'
import proptypes from 'proptypes'

export const Theme = ({ isDarkTheme, handleChangeTheme }) => {
  return (
    <label>
      <input type="checkbox" checked={isDarkTheme} onChange={handleChangeTheme} />
      {isDarkTheme ? 'Dark' : 'light'}
    </label>
  )
}

Theme.propTypes = {
  isDarkTheme: proptypes.bool,
  handleChangeTheme: proptypes.func
}
