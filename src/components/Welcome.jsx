import { useState } from "react"
import { NavLink } from "react-router-dom"

import Photo from "../images/photo.png"


const Welcome = () => {

    const [opa, setOpa] = useState(1)

    const changeOpacity = ()=>{
     setOpa(1-(window.scrollY/700))
    }

    window.addEventListener('scroll', changeOpacity)

const lineStyle = {
    opacity: opa
}

    return ( <div className="welcome" id="top">
        <div className="left">
            <h3>Kamil Dobosz</h3>
            <h1>Website and frontend developer</h1>
            <p>Po okołu roku nauki postanowiłem zdobyć swoją pierwszą pracę w branży IT. Nie posiadam jeszcze doświadczenia komercyjnego, jednak wykonane projekty powinny potwierdzić moją wiedzę, która przyda się na stanowisku juniorskim. </p>
            <div className="more">
                <NavLink to = '/projects'>Zobacz projekty</NavLink>
                <span>lub</span>
                <NavLink to ='/contact'>Napisz do mnie</NavLink>
            </div>
        </div>
        <div className="right">
            <img src={Photo} alt="me" className="photo" style ={lineStyle}/>
        </div>
        
    </div> );
}
 
export default Welcome;