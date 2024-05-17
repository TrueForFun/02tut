import React from 'react'

const Square = ({colorValue, hexValue, setHexValue, isDarkText}) => {
  return (
    <section
    className='square'
    style={{backgroundColor: colorValue,
      color: isDarkText ? '#000' : "#FFF"
    }}
    >

    <p>{colorValue ? colorValue : "Empty Value"}</p>
    <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}
Square.defaultProps = {
  colorValue: 'Emty Color Value'
}

export default Square