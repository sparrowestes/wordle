import Key from './Key'

const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className='keyboard'>
        <div className='line1'>
            {keys1.map((key1) => {
            return <Key keyValue={key1} key={key1}/>
        })}
            </div>
        <div className='line2'>
            {keys2.map((key2) => {
            return <Key keyValue={key2} key={key2}/>
        })}
            </div>
        <div className='line3'>
            <Key keyValue={"ENTER"} bigKey/>
            {keys3.map((key3) => {
            return <Key keyValue={key3} key={key3}/>
        })}
         <Key keyValue={"DELETE"} bigKey/>
            </div>
    </div>
  )
}

export default Keyboard