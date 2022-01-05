import BeatLoader from "react-spinners/BeatLoader";




const LoadingPage = ({smallTitle, bigTitle}) => {
    return ( 
        <div className="loadingPage">
            <div className="logo">
                <span class="material-icons">
                    fitbit
                </span>
                <div className="description"> 
                    <span className="name">Kamil Dobosz</span>
                    <span className="profession">Frontend Developer</span>
                </div> 
            </div>
            <div className="spiner">
                <BeatLoader color='#878a8f' />
            </div>
            <div className="desc" >
                 <h3>{smallTitle}</h3>
                <h2>{bigTitle}</h2>
            </div>
            
    </div> )
}
 
export default LoadingPage;