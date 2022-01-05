const SingleWork = ({title, img, desc, live, code}) => {
    return ( <div className="singleWork" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000" data-aos-once="true">
        <div className="left">
        <img src={img} alt="" />
        </div>
        <div className="right">
        <h1>{title}</h1>
            <p >{desc} </p>
            <div className="links">
                <a href={live} target="_blank">Sprawdź</a>
                <a href={code} target="_blank">Kod</a>
                
            </div>
        </div>
    </div> );
}
 
export default SingleWork;