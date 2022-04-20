import { useContext } from 'react'
import { AppContext } from '../App'

const Letter = ({attemptedValue, letterPosition}) => {
    const {board} = useContext(AppContext)
    const letter = board[attemptedValue][letterPosition]

  return (
    <div className='letter'>{letter}</div>
  )
}

export default Letter