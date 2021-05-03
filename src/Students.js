import { useEffect, useState } from "react"




function Students(){
    const[students, setStudents] = useState([])

    async function fetchStudents(){
        const response = await fetch('http://hp-api.herokuapp.com/api/characters/students')
        const data = await response.json();
        setStudents(data)
    }

    useEffect(()=>{
        fetchStudents()
    },[])

    return(
        <div className="stafflist">
            <h3>Hogwarts Students</h3>
            <div className="staffPicture">
                {students.map((student, index) =>(
                    <div key={index}>
                        <img src={student.image} alt={student.name}/>
                        <p>{student.name}</p>
                    </div>
                ))}
            </div>
            


        </div>
    )
}
export default Students