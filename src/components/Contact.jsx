import { NavLink } from "react-router-dom"

const Contact = () => {
    return ( <div className="contact">
        <h2  data-aos="fade-up" data-aos-offset="100" data-aos-duration='1000' data-aos-once="true">Potrzebujesz juniora?</h2>
        <NavLink to ="/contact">
        <h1>Zacznijmy pracować razem <span class="material-icons">
                            east
        </span></h1> 
         
        </NavLink>
        
    </div> );
}
 
export default Contact;