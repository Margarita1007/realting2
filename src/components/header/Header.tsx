import React from "react";
import './header.css';
import { QuestionCircleOutlined } from "@ant-design/icons";
import { SettingLangCurrency } from "./Settings";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.jpg';

const HeaderComponent: React.FC = () => {

   // logo selected https://www.selected-estate.com/images/selected-logo.png
    return (
        <header className="header">
            <Link to='/' style={{display: 'flex'}}>
                <div className="header-logo" style={{padding: '5px 0'}}>
                    <img src={logo} alt="logo"
                    style={{width: '100%', height: '100%'}}/>
                </div>
            </Link>
            
            <nav className="user-question">
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