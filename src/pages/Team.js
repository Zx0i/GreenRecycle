import React from 'react';
import '../pages/Team.css'
import img_1 from "../images/img1.PNG"
import img_2 from "../images/img2.PNG"
import img_3 from "../images/img3.PNG"

function Team() {
    return (
        <body>
            <div className='team'>
                <h1>Team</h1>

            </div>
            <div class="container">
                <div class="card bright-orange">
                    <img src={img_1} alt="" />
                    <h3>Zai Li</h3>
                    <p>
                        Computer Science
                    </p>
                    <button class="btn"><a href="https://www.linkedin.com/in/zai-li-3a7b4369/">Learn More</a></button>
                </div>

                <div class="card dark-cyan">
                    <img src={img_2} alt="" />
                    <h3>Mir Humaira</h3>
                    <p>
                        Computer Science
                    </p>
                    <button class="btn"><a href="https://www.linkedin.com/in/mirahumaira23/">Learn More</a></button>
                </div>

                <div class="card very-dark-cyan">
                    <img src={img_3} alt="" />
                    <h3>Kristina</h3>
                    <p>
                        Computer Science
                    </p>
                    <button class="btn">Learn More</button>
                </div>
            </div>


        </body>
    );
}

export default Team;
