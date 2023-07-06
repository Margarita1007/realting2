import React from "react";
import './footer.css';
import { cards } from "./footerImg";

const FooterComponent: React.FC = () => {
    return (
        <footer>
            <div className="footer__row1">
                <div>
                   <p>Leads-Realty</p>
                   <p>© 2018 - 2023</p>
                   <p>All rights reserved</p>
                </div>
            </div>
            <div className="footer__row2">
                { cards.map((item, index) => (
                    <div key={index} className="footer__bank-card"> 
                        <img src={item} alt="bank-card"/>
                    </div>
                ))}
            </div>
            

        </footer>
    )
}

export default FooterComponent