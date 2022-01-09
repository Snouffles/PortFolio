import Button from "../components/button/Button";

import {useState, useEffect} from "react";


function BasicCounter(){

    
    const [playerList, setPlayerList] = useState([]);
    const [playerName, setPlayerName] = useState("");
    const [valueToAdd, setValueToAdd] = useState("1");
    const [test, setTest] = useState("");
   
   

    useEffect(()=> {
        console.log("2");
        setTest(test);
    },[test])


    function addPlayer () {
        setPlayerList([...playerList, {"player" : `Player ${playerList.length+1}`,  "name" : playerName, "score" : "0"}])
        setTest("");
    }

    function removePlayer(id) {
        
        setPlayerList(playerList.filter((val) =>{
            return val.player !== id; 
        }))
    }

    function addPoint(id) {
        console.log("1" + isNaN(valueToAdd));
        setPlayerList(playerList.map((val)=> {
            return val.player === id ? {
                "player" : val.player,
                "name" : val.name,
                "score" : parseInt(val.score) + parseInt(valueToAdd)
            }: val;
        }))
    }
    
    function removePoint(id) {
        
           console.log("oui")
            setPlayerList(playerList.map((val)=> {
                return val.player === id ? {
                    "player" : val.player,
                    "name" : val.name,
                    "score" : parseInt(val.score) - parseInt(valueToAdd)
                }: val;
            }))
    
    }




    return(
        
        <div className="basicCounterContainer">
            <Button btnTitle={"Ajouter un joueur"} disabled={playerName === "" || playerList.length > 7 } onClick={addPlayer}/>
            <input defaultValue={test} onChange={(e) => {const newPlayerName = e.target.value; setPlayerName(newPlayerName)}}></input>
            <div className="playerCard">
                { playerList.length > 0 ? 
                    playerList.map((val)=> (
                    <div className="playerCard__player" key={val.player}> 
                        <div className="playerCard__playerInfo">
                            <div className="playerCard__playerInfo--player">{val.player}
                                <div className="playerCard__playerInfo--name" >{val.name}</div>
                                <div className="playerCard__playerInfo--score" >{val.score}</div>
                            </div>
                        </div>
                        <div className="playerCard__addPoint">
                            <Button btnTitle={"+"} className={"btn__point"} disabled={null}  onClick={() => addPoint(val.player)} />
                            <input className="playerCard__addPoint--input" type="number" min="1" defaultValue="1" onChange={(e) => {const newValueToAdd = e.target.value; setValueToAdd(newValueToAdd);}}></input>
                            <Button btnTitle={"-"} className={"btn__point"}  disabled={null} onClick={() => removePoint(val.player)}/>
                        </div>
                        <Button btnTitle={"remove"} className={"btn__point"}  onClick={() => removePlayer(val.player)} />
                    </div>
                    )) 
                : 
                null
                }

            </div>
        </div>
    )
    
}

export default BasicCounter;