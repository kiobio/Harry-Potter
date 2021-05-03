import { useEffect, useState } from "react"





function Others(){
    const[others, setOthers] = useState([])

    async function fetchOthers(){
        const response = await fetch('http://hp-api.herokuapp.com/api/characters')
        const data = await response.json();
        setOthers(data)
    }

    useEffect(() =>{
        fetchOthers()
    },[])


    return(
        <div className="stafflist">
            <h3>Others</h3>
            <div className="staffPicture">
                {others.map((other, index) =>(
                    <div key={index}>
                        {other.hogwartsStudent || other.hogwartsStaff ?
                        <div>
                        </div>
                        :
                        <div className="New">
                            <img src={other.image} alt={other.name}/>
                            <p>{other.name}</p>
                        </div>}    
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Others