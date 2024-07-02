import React from 'react'
import "./Programs.css";
import { programsData } from './Programs-data';
import rightArrow from '../../assets/rightArrow.png'


const Programs=()=>{

    return(
        <div className="programs" id='programs'>
            
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            
            <div className="programs-category">
                {programsData.map((program)=>
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                    <span>Join</span><img src={rightArrow}/>
                    </div>
                </div>
                )}


            </div>
        </div>
    )
}
export default Programs