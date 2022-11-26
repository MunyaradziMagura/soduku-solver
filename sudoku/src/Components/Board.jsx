import React from 'react'

export default function Board({boardState}) {
  return (
    <table>
    {boardState.map((element, index) => (
      <tr key={index} id={`row-${index}`}>
        {element.map((value, subIndex) => (
          <td><input id={`cell-${index}-${subIndex}`} type="text" placeholder={value} maxLength='1' disabled={(value != 0) ? true : false}/></td>
        ))}
      </tr>
    ))}
    </table>
  )
}
