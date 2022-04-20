import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ({ keyValue, bigKey }) => {
    const {board, setBoard, currentAttempt, setCurrentAttempt} = useContext(AppContext)

    const selectLetter = () => {
        if (keyValue === 'ENTER') {
            if (currentAttempt.letterPosition !== 5) return
            setCurrentAttempt({attempt: currentAttempt + 1, letterPosition: 0})

        } else {
            if (currentAttempt.letterPosition > 4) return
            const newBoard = [...board]
            newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
            setBoard(newBoard)
            setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
        }
    }

  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>{keyValue}</div>
  )
}

export default Key