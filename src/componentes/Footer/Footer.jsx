import React from "react";
import "./footer.css"
import { BiLogoInstagramAlt, BiSolidMap, BiSolidCopyright } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"

function Footer() {

    return(
        <>
            <div className="footerTextDiv">
            < BiSolidMap style={{height:"20.8px", color:"whitesmoke"}}/>
            <p className="footerText">Ciudad Autónoma de Buenos Aires, Argentina</p>
            </div>            

            <div className="footerTextDiv">
            < FaWhatsapp style={{height:"20.8px", color:"whitesmoke"}}/>
            <p className="footerText">+54 9 11 6614-2146</p>
            </div>
            
            <div className="footerTextDiv">
            < BiLogoInstagramAlt style={{height:"20.8px", color:"whitesmoke"}}/>
            <p className="footerText"> Instagram</p>
            </div>            
            <div className="footerTextDiv">
            <p className="footerText">Aegina Head Pieces Copyright 2023</p>
            < BiSolidCopyright style={{height:"20.8px", color:"whitesmoke"}}/>
            </div>
            
        </>
    )
}

export default Footer;