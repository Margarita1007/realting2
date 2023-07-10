import React from "react";
import '../../assets/styles/footer.css';
import { cards } from "./footerImg";
import { useAppSelector } from "../../app/hooks";

const FooterComponent: React.FC = () => {
    const offer = useAppSelector(state => state.objects.objects[0]);
    const agency = offer ? offer.values['67'].value[0] : '';
    const agencyLogo = agency ? agency.recordValues['9'][0].url : '';
    return (
        <footer>
            <div className="footer__row1">
                <div>
                   <div className="footer__logo">
                        <img src={agencyLogo} alt="logo"/>
                   </div>
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