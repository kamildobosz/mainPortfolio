import { NavLink } from "react-router-dom";

const Project = ({name, photo}) => {

      
    return (<div className="wrap" >
           <NavLink to="/projects">
           <div className="project"  data-aos="fade-up" data-aos-offset="100" data-aos-once="true">
                        <h2>{name}</h2>
                     <span className='span'>Sprawdź</span>
                        <div className="projectPhoto">
                               <img src={photo} alt='project' />
                        </div>
                 </div>
           </NavLink>
               
         </div>  );
}   
 
export default Project;