import Dice from "./Dice"
import {useState} from 'react';
import { getRolls, sum } from "./utils";

export default function LuckyN({numDice=2, goal=7}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === goal;
  return (
    <main className="LuckyN">
        <h1>Lucky{goal} {isWinner && "- You Win!"}</h1>
        <Dice dice={dice}/>
    </main>
  )
}
