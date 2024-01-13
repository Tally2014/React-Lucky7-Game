import './App.css'
import Dice from './Dice'

function App() {

  return (
    <>
      <Dice dice={[3,5,2]} color={'blue'}/>
      <Dice dice={[2,4]}/>
      <Dice dice={[1,3,6,2,5,4]} color={'green'}/>
    </>
  )
}

export default App
