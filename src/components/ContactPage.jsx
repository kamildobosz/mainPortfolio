
import { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';

import BeatLoader from "react-spinners/BeatLoader";


import LoadingPage from "./LoadingPage";


const Contact = () => {

const [loading, setLoading] = useState(false)
const [done, setDone] = useState(false)

    useEffect(
    ()=>{setLoading(true);
    const timer = setTimeout(()=> setLoading(false), 1800);
    }, [])

    const formRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_combw1p', 'template_rd4voal', formRef.current, 'user_MjqAfO9wAAoKJ0rkcsNKS')
        .then((result) => {
            console.log(result.text);
           setDone(true)
        }, (error) => {
            console.log(error.text );
        });

    }



    return (
        <>
        {loading ? <LoadingPage smallTitle={'hej'} bigTitle={"Napisz do mnie"}/> : <>
        
            <div className="contactPage">
             <div className="left">
                <h2>Dane kontaktowe</h2>
                <div className="name">
                    <span class="material-icons">
                            person_outline
                    </span>
                    <h3>Kamil Dobosz</h3>
                </div>
                <div className="phone">
                    <span class="material-icons">
                        phone_android
                    </span>
                    <h3>537 260 196</h3>
                    </div>
                <div className="email">
                     <span class="material-icons">
                        mail_outline
                    </span>
                    <h3>kamdobosz26@wp.pl</h3>
                </div>
        </div>
        <div className="right">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="user_name" required/>
                    <input type="text" placeholder='Subject' name="user_subject"/>
                    <input type="email" placeholder='Email' name="user_email" required/>
                    <input type="number" placeholder="Phone" name="user_phone"/>
                    <textarea rows= '6' placeholder="Message" name="message" required/>
                    {done ? <span className="done">Dziękuję za kontakt!</span>: <button>Wyślij</button>} 
                    
                </form>
        </div>  
    </div></>}
         
    </>
    
    );
}
 
export default Contact;