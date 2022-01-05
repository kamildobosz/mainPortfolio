import { useEffect } from "react"

import Weather from "../images/weather.png"
import Quiz from "../images/quiz.png"
import Budget from "../images/budget.png"
import Portfolio from "../images/portfolio.png"
import Project from "./Project";
import Aos from "aos";
import 'aos/dist/aos.css'

const SelectedProjects = () => {


    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])


    const data = [
        {
            id: 1,
            name: 'Weather App',
            photo: Weather
         },
         {
            id: 2,
            name: 'Quiz App',
            photo: Quiz
         },
         {
            id: 3,
            name: 'Budget App',
            photo: Budget
         },
         {
            id: 4,
            name: 'Portfolio',
            photo: Portfolio
         },
    ]

    return ( <div className="selectedProjects" data-aos="fade-up" data-aos-offset="165" data-aos-once="true">
        <h3>zobacz moje</h3>
        <h1>Przykładowe projekty</h1>
        {data.map((item)=>(
            <Project key={item.id} name = {item.name} photo ={item.photo}/>
        ))}
    </div>  );
}
 
export default SelectedProjects;