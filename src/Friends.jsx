import { use } from "react";
import Friend from "./Friend";

export default function Friends({friendPromise}) {

    const friends = use(friendPromise)

    return (
        <div className="card">
            <h3>Friend: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>
    );
};