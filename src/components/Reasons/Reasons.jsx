import React from "react";
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import nike from "../../assets/nike.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"

const Reasons=()=>{

    return(
        <div className="Reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <div>
                <span className="stroke-text">why</span>
                <span id="choose">choose us?</span>
            </div>

            <div className="details-r">

                <div>
                    <img src={tick}/>
                    <span>OVER 140+ EXPERT COACHES</span>
                </div>

                <div>
                    <img src={tick}/>
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>

                <div>
                    <img src={tick}/>
                    <span>FREE PROGRAM FOR NEW MEMBER</span>
                </div>

                <div>
                    <img src={tick}/>
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span
                style={{
                    color:"#9c9c9c",
                    fontWeight:"normal",
                }}> OUR PARTNERS
            </span>
            <div className="partners">
                <img src={nb}/>
                <img src={adidas}/>
                <img src={nike}/>
            </div>
        </div>
        </div>
    )
}

export default Reasons