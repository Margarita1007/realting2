import React from "react";
import '../../assets/styles/header.css';
import { QuestionCircleOutlined } from "@ant-design/icons";
import { SettingLangCurrency } from "./Settings";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.jpg';
import { useAppSelector } from "../../app/hooks";

const HeaderComponent: React.FC = () => {
    const offer = useAppSelector(state => state.objects.objects[0]);
    const agency = offer ? offer.values['67'].value[0] : '';
    const agencyLogo = agency ? agency.recordValues['9'][0].url : '';
    const agencyPhone = agency ? agency.recordValues['3'][0].contact : '';

   // logo selected https://www.selected-estate.com/images/selected-logo.png
    return (
        <header className="header">
            <Link to='/' style={{display: 'flex'}}>
                <div className="header-logo" style={{padding: '5px 0'}}>
                    <img src={agencyLogo ? agencyLogo : logo} alt="logo"/>
                </div>
            </Link>
            
            <nav className="user-question">
                <div>
                    <p style={{fontSize: 16}}>{agencyPhone}</p>
                </div>
                <SettingLangCurrency/>
                <a href="/" className="nav-link nav-link-login" style={{display: 'none'}}>
                    <span style={{marginRight: 6}}>Задать вопрос</span>
                    <QuestionCircleOutlined />
                </a>
            </nav>
        </header>
    )
}

export default HeaderComponent