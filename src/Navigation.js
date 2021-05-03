import HP from "./img/HP4.png"
import Gryffindor from "./img/Gryffindor.png"
import Ravenclaw from "./img/Ravenclaw.png"
import Hufflepuff from "./img/Hufflepuff.png"
import Slytherin from "./img/Slytherin.png"
import Wands from "./img/Spells-pen.png"
import { useState } from 'react';
import { Link } from "react-router-dom";



function Navigation(){
    const[navigation, setNavigation] = useState("All characters")

    return(
        <div className="navigation" id={navigation}>
            
             <div>
               <Link to="/">
                <h1
                onClick={ () => {setNavigation("Characters")}}
                ><img src={HP} alt="Harry Potter"/> </h1>
                </Link>
               
               
            </div>
            
            <div className="Houses">
                <Link to="/gryffindor/">
                <div
                onClick={ () => {setNavigation("Gryffindor")}}
                >
                    <h2><img src={Gryffindor} alt="Gryffindor"/></h2>
                </div>
                </Link>

                <Link to="/ravenclaw/">
                <div
                 onClick={ () => {setNavigation("Ravenclaw")}}
                 >
                    <h2><img src={Ravenclaw} alt="Ravenclaw"/></h2>
                </div>
                </Link>
                
                <Link to="/hufflepuff/">
                <div
                 onClick={ () => {setNavigation("Hufflepuff")}}
                >
                    <h2><img src={Hufflepuff} alt="Hufflepuff"/></h2>
                </div>
                </Link>

                <Link to="/slytherin/">
                <div
                 onClick={ () => {setNavigation("Slytherin")}}
                 >
                    <h2><img src={Slytherin} alt="Slytherin"/></h2>
                </div>
                </Link>

                <Link to="/">
                <div
                onClick={ () => {setNavigation("All characters")}}
                >
                    <h2><img src={Wands} alt="Wand"/></h2>
                </div>
                </Link>
            </div>
                <p>{navigation}</p>
        </div>
    )
}
export default Navigation