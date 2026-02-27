import { useState } from "react";

export default function Bowler () {
    const [ball, setBall] = useState(0)
    const [noBall, setNoBall] = useState(0)
    const handleBall = () => {
        const ballCount = ball + 1;
        setBall(ballCount) 
    };
    const handleNoBall = () => {
        const updayeNoBall = noBall;
        setNoBall(updayeNoBall)
    };
    return (
        <div>
            <h1>Name: Mustafizur Rahman</h1>
            <p>Ball: {ball}</p>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleNoBall}>No Ball</button>
        </div>
    );
};