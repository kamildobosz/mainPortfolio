import HTML from "../images/html.png"
import CSS from "../images/css.png"
import JS from "../images/js.png"
import React from "../images/react.png"
import TS from "../images/ts.png"
import GIT from "../images/git.png"
import GITHUB from "../images/github.png"
import WP from "../images/wp.png"

import Skill from "../components/Skill"

const data = [{id: 1,
                img: HTML,
},
{id: 2,
    img: CSS,
},
{id: 3,
    img: JS,
},
{id: 4,
    img: React,
},
{id: 5,
    img: TS,
},
{id: 6,
    img: GIT,
},
{id: 7,
    img: GITHUB
},
{id: 8,
    img: WP

}
]

const MySkills = () => {
    return ( <div className="mySkills"  data-aos="fade-down" data-aos-offset="100" data-aos-duration='1000' data-aos-once="true">
        <h3>Co już znam?</h3>
        <h1>Technologie, z których korzystam</h1>
        {data.map((item)=>(
            <Skill key={item.id}  img = {item.img}  />
        ))}
        
    </div>  );
}
 
export default MySkills;