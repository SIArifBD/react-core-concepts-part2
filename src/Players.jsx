import { useEffect, useState } from "react"

export default function Players () {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className="card">
            <h5>Players: {players.length}</h5>
            <ol>
                {
                    players.map(player => <li key={player.id}>{player.name}</li>)
                }
            </ol>
        </div>
    );
};