import { useState, useEffect } from "react";

import SingleWork from "./SingleWork";

import shop from "../images/shop.png"
import portfolio from "../images/portfolio.png"
import quiz from "../images/quiz.png"
import weather from "../images/weather.png"
import budget from "../images/budget.png"
import portfolio2 from "../images/portfolio2.png"
import refleks from "../images/refleks.png"
import partyboys from "../images/partyboys.png";
import inne from "../images/inne.png"
import LoadingPage from "./LoadingPage";

const works = [
   
    { 
        title: 'Portfolio',
        img: portfolio,
        desc: "Wizytówka, którą właśnie przeglądasz. Powstała, aby pomóc mi w poszukiwaniu pierwszej pracy. W jej tworzeniu wykorzystałem przede wszystkim React.js oraz SCSS. Oprócz tego użyłem chociażby react-router oraz bibliotekę AOS do animowania elementów. ",
        live: 'https://www.instagram.com/',
        code: 'https://github.com/'

},
{ 
    title: 'Quiz',
    img: quiz,
    desc: "Klasyczna gra, w której do wyboru mamy jedną z 4 odpowiedzi. Błędne zaznaczenie lub upływ czasu kończą grę. Gra napisana z wykorzystaniem Reacta. Skupiłem się tu przede wszystkim na logice, dlatego do wykonania zostały mi wersje responsywne, które pojawią się w ciągu kilku dni.",
    live: 'https://gallant-lamport-fe8168.netlify.app/',
        code: 'https://github.com/kamildobosz/quiz'


},
{
    title: 'Weather App',
    img: weather,
    desc: 'Prosta aplikacja pogodowa, w której możemy sprawdzić aktualną pogodę w wybranym mieście. Głównym celem powstania była nauka pracy z API. Do napisnia tego projektu użyłem Reacta. ',
    live: 'https://gracious-kilby-3067c5.netlify.app/',
        code: 'https://github.com/kamildobosz/weather'


},
{ 
    title: 'Budget App',
    img: budget,
    desc: 'Aplikacja, w której możemy dodawać nasze wydatki i przychody. Kwoty te są na bieżąco sumowane. Celem była nauka wykorzystania Reacta.',
    live: 'https://stupefied-goodall-fca6cf.netlify.app/',
        code: 'https://github.com/kamildobosz/budget'


},
{
    title: 'Sklep',
    img: shop,
    desc: "Obecny projekt, nad którym pracuję. Będzie to klasyczny sklep internetowy, dzięki któremu poznam podstawy beckendu. Do tej pory użyłem tu przede wszystkim React i Styled Components. Oprócz tego, wykorzystam między innymi Node.js i MongoDB. ",
    live: 'https://elastic-rosalind-d5af3d.netlify.app/',
     code: 'https://github.com/kamildobosz/shop'
},
{ 
    title: 'Portfolio2',
    img: portfolio2,
    desc: 'Jedna z moich pierwszych stron napisana przy wykorzystaniu Recta i SCSSa. Uczyłem się tu wspomnianych wcześniej dwóch technologii. ',
    live: 'https://adoring-pasteur-e3509a.netlify.app',
        code: 'https://github.com/kamildobosz/portfolio'


},
{ 
    title: 'Gra refleks',
    img: refleks,
    desc: 'Jedna z pierwszych aplikacji, które napisałem przy użyciu JS, będąca jednocześnie zadaniem rekrutacyjnym na stanowisko juniorskie. Co sekundę podświetla się losowy kwadrat. Po kliknięciu go, dostajemy punkt; po kliknięciu złego – tracimy życie.Gra kończy się wraz z upływem czasu lub utratą ostatniej szansy',
    live: 'https://hopeful-brattain-c959f0.netlify.app/',
    code: 'https://github.com/kamildobosz/-recruitingGame'


},
{ 
    title: 'Partyboys',
    img: partyboys,
    desc: 'Strona internetowa wykonana dla znajomych z wykorzystaniem WordPressa. Celem była przede wszystkim nauka korzystania z wcześniej wspomnianej technologii oraz zapoznanie się z hostingiem.',
    live: 'https://partyboys.pl/',
        code: 'https://github.com/kamildobosz'


},
{ 
    title: 'Inne',
    img: inne,
    desc: 'Są to mniejsze projekty, pisane na początku mojej przygody z programowniem. Należy do nich między innymi gra memory, prosty quiz, stoper itd.',
    live: 'https://focused-hugle-542b7f.netlify.app/',
        code: 'https://github.com/kamildobosz/memo'


}
]






const Works = () => {

    const [loading, setLoading] = useState(false)

    useEffect(
    ()=>{setLoading(true);
    const timer = setTimeout(()=> setLoading(false), 1800);
    }, [])




    return ( <>

            {loading ? <LoadingPage smallTitle={'projekty'} bigTitle={'Oceń, który jest najlepszy'} /> 
            :
            <div className="works" >
                <div className="intro">
                    <h3>Moje prace</h3>
                    <p className="main"> Przedstawiam listę projektów, które zrelizowałem do tej pory. Należy pamiętać, że nie umieszam tu mniejszych prac, które wykonywałem na samym początku, aby wejść w świat programowania. 
                     </p>
                    <p>Obecnie pracuję przy projekcie sklepu internetowego. Dzięki temu poznam kolejne technologie, a te, które nie są mi obce, utrwalę. Gdy tylko będzie gotowy, chętnie podzielę się rezultatami. </p>
                </div>
                
                {works.map((work)=>(
                    <SingleWork key={work.title} title = {work.title} desc={work.desc} img={work.img} live={work.live} code={work.code}/>
                 ))}
                </div>
        }
    </>
        );
}
 
export default Works;