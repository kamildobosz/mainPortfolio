

const Skill = ({name, img, desc}) => {
    return ( <div className="skill" data-aos="zoom-in" data-aos-once="true">
                    <div className="img" >
                        <img src={img} alt=""/>
                     </div>
            </div> );
}
 
export default Skill;