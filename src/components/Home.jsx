import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import SelectedProjects from "./SelectedProjects";
import MySkills from "./MySkills";
import Contact from "./Contact";
import LoadingPage from "./LoadingPage";


const Home = () => {

    const [loading, setLoading] = useState(false)

        useEffect(()=>{
        setLoading(true)
        const timer = setTimeout(()=> setLoading(false), 1800);
             }, [])
    



    return ( 
        <div className="home" >
            {loading ? <LoadingPage smallTitle={'Cześć'} bigTitle={'Uśmiechnij się'} /> : 
            <>

            <Welcome/>
            <SelectedProjects />
            <MySkills />
             <Contact />
            
            </>}

           
          
        
            
        </div> );
}
 
export default Home;