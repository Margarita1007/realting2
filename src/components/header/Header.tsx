import React from "react";
import './header.css';
import { QuestionCircleOutlined } from "@ant-design/icons";

const HeaderComponent: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo" style={{padding: '5px 0'}}>
                <img src="https://www.selected-estate.com/images/selected-logo.png" alt="logo"
                style={{width: '100%', height: '100%'}}/>
            </div>
            
            <nav className="user-question">
                <a href="/" className="nav-link nav-link-login">
                    <span style={{marginRight: 6}}>Задать вопрос</span>
                    <QuestionCircleOutlined />
                </a>
            </nav>
        </header>
    )
}

export default HeaderComponent