import { NavLink } from "react-router-dom"
import { useState } from "react";

const Topbar = ({menuOpen, setMenuOpen}) => {
    const [indeks, setIndeks] = useState(false)

    const handleHamburger = ()=>{
    setMenuOpen(!menuOpen)
}

const handleMenu = ()=>{
    setMenuOpen(false);
}

const handleArrow = ()=>{
    window['scrollTo']({ top: 0, behavior: "smooth"})
}

 const changeIndeks = ()=>{
        (window.scrollY>200) ? setIndeks(true) : setIndeks(false)
        }
window.addEventListener('scroll', changeIndeks);

    return ( 
        <div className="mainTopbar">
             <div className={"topbar " +(menuOpen && "active")}>
                <NavLink to='/' >
                        <div className="logo" onClick={handleMenu} >
                             <span class="material-icons">
                                fitbit
                             </span>
                         <div className="description">
                             
                            <span className="name">Kamil Dobosz</span>
                            <span className="profession">Frontend Developer</span>
                         </div> 
                         </div>
                 </NavLink>
                
                
                <div className="right">
                    <span className='menuDesc' onClick={handleHamburger}>{menuOpen ? 'close' : 'menu'}</span>
                    <div className="hamburger" onClick= {handleHamburger}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>
            </div>
           
                <NavLink to='contact'>
                <div className="message">
                <span class="material-icons">
                            mail_outline
                        </span>  
                        <p>Napisz</p>  
                        </div>
                </NavLink>
                
                           
            
            <div className={"arrow " + (indeks && 'active') } onClick = {handleArrow} >
                 <span class={"material-icons" }>
                     arrow_upward
                </span>
            </div>
        </div>
     );
}
 
export default Topbar;