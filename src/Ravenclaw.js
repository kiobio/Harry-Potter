import Houses from './Houses.json';
import { useEffect, useState } from 'react';





function Ravenclaw(){
    const[ravens, setRavens] = useState([])

    async function fetchRavens(){
        const response = await fetch('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
        const data = await response.json();
        setRavens(data)
    }


    useEffect(()=>{
        fetchRavens()
    },[])
    return(
        <div className="Ravenclaw">
            <div className="House">
            {Houses.map((house, index)=>(
                <div key ={index}>
                    {house.name === "Ravenclaw" &&
                    <div>
                    <p className="values">{house.values} </p>
                    <p> Mascot: {house.mascot}</p>
                    <p> Head of house: {house.headOfHouse}</p>
                    <p> House Ghost: {house.houseGhost}</p>
                    <div>
                    <h4>Founder</h4>
                    <p>{house.founder}</p>
                    </div>
                    </div>
                    }
                </div>
            ))}
        </div>
        <div className="personCard">
             {ravens.map((person, index)=>(
                 <div key={index} className="Card" id="raven">
                     <div>
                         <img src={person.image} alt={person.name}/>
                         <h3>played by {person.actor}</h3>
                     </div>
                     <div className="info">
                     <div>
                         <h1>{person.name}</h1>
                         <p>Born in {person.yearOfBirth}</p>
                         <p>ancestry: {person.ancestry ? person.ancestry : "unknown"}</p>
                         <p>{person.species === "human" ?  <div></div> : person.species} </p>
                         <p>patronus: {person.patronus ? person.patronus : "no patronus"}</p>                        
                     </div>
                     <div className="wand">                     
                         <h2>Wand:</h2>
                         {person.wand ? 
                         <div>
                         <p>{person.wand.wood ? person.wand.wood : "unknown"} wood</p>
                         <p>{person.wand.core ? person.wand.core : "unknown"} core</p>
                         <p>length: {person.wand.length ? person.wand.length : "unknown"} inches</p>
                         </div>
                        :
                        <p>No wand</p>}
                     </div>
                     </div>
                     
                 </div>
             ))}
         </div>
        
        
        </div>
    )
}

export default Ravenclaw