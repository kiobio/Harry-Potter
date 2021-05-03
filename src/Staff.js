import { useEffect, useState } from "react"




function Staff(){
    const[characters, setCharacters] = useState([])

    async function fetchCharacter(){
        const response = await fetch('http://hp-api.herokuapp.com/api/characters')
        const data = await response.json();
        //console.log(data)
        setCharacters(data)
    }

    useEffect(() =>{
        fetchCharacter()
    },[])

    return(
        <div className="stafflist">
            <h3>Hogwarts staff</h3>
            <div className="staffPicture">
            {characters.map((person, index)=>(
                <div key={index}>
                    {person.hogwartsStaff &&
                    <div>                     
                     <img src={person.image} alt={person.name}/>
                     <p>{person.name}</p>
                     </div>
                    }                 
                </div>                
            ))}
            </div>

        </div>
    )
}
export default Staff