import React from 'react'

export default function Board({boardState, initialBoard}) {

  return (
    <table>
    {initialBoard.map((element, index) => (
      <tr key={index} id={`row-${index}`}>
        {element.map((value, subIndex) => (
          <td id={`cell-${index}-${subIndex}`}><input type="text" placeholder={value} maxLength='1' onKeyUp={(e) => console.log({key: e.target.value, position: `Y = ${index} | X = ${subIndex}`})} disabled={(initialBoard[index][subIndex] != 0) ? true : false}/></td>
        ))}
      </tr>
    ))}
    </table>
  )
}
