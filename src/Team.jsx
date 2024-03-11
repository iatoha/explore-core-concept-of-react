import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(11)
    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove  = ()=>{
        const remove = team - 1;
        setTeam(remove)
    }

    const teamStyle  = {
        border: '2px solid green',
        margin: '20px',
        padding: '15px',
        borderRadius: '20px'
    }
    return (
        <div style={teamStyle}>
            <h3>players:{team}</h3>
            <button onClick={handleAdd}>add player</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}