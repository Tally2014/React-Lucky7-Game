import Dice from "./Dice"
import {useState} from 'react';
import { getRolls } from "./utils";

export default function LuckyN({numDice=2, goal=7}) {
    const [dice, setDice] = useState(getRolls(numDice));
  return (
    <main className="LuckyN">
        <h1>Lucky{goal}</h1>
        <Dice dice={dice}/>
    </main>
  )
}
