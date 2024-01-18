import Dice from "./Dice"
import {useState} from 'react';
import { getRolls } from "./utils";

export default function LuckyN({title="LuckyN",numDice=2, winCheck}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () =>{
        return setDice(getRolls(numDice));
    }
  return (
    <main className="LuckyN">
        <h1>{title} {isWinner && "- You Win!"}</h1>
        <Dice dice={dice}/>
        <button onClick={roll}>Re-Roll Dice</button>
    </main>
  )
}
