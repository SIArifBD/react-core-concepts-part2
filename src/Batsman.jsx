import { useState } from "react";

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () =>{
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }
    const handleDouble = () => {
        const updateRuns = runs + 2;
        setRuns(updateRuns);
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    };
    const handleSix = () => {
        const updateRuns = runs + 6;
        setRuns(updateRuns)

        const countSixes = sixes + 1;
        setSixes(countSixes);
    };
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            {
                runs > 100 && <p>You score: 100+</p> 
            }
            <p><small>Sixes: {sixes}</small></p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleDouble}>Doubles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
};