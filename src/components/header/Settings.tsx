import {  Select } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrency, setLang } from "../../app/SettingSlice";


  

export const SettingLangCurrency: React.FC = () => {
    const dispatch = useAppDispatch();
    const langDefault = useAppSelector(state => state.setting.lang);
    const currencyDefault = useAppSelector(state => state.setting.currency);

    const [language, setLanguage] = useState<string>(langDefault);
    const [curren, setCurren] = useState<string>(currencyDefault);
    const [openWindow, setOpenWindow] = useState<boolean>(false);

    const handleChangeLang = (value: string) => {
        console.log(`selected lang ${value}`);
        setLanguage(value);
        dispatch(setLang(value));
    };

    const handleChangeCurrency = (value: string) => {
        console.log(`selected currency ${value}`);
        setCurren(value);
        dispatch(setCurrency(value));
    };

    const handleOpen = () => {
        setOpenWindow(!openWindow);
    }


    return (
        <div className="header-setting">
            <div onClick={handleOpen} className="header-setting_lang">{language} / {curren}</div>
            {openWindow ? 
            <div className="header-setting_lang-select">
                <p>Choose language:</p>
                <Select
                    defaultValue={langDefault}
                    onChange={handleChangeLang}
                    options={[
                    { value: 'RU', label: 'Русский' },
                    { value: 'EN', label: 'English' },
        
                    ]}
                />
                <p>Currency</p>
                <Select
                    defaultValue={currencyDefault}
                    onChange={handleChangeCurrency}
                    options={[
                    { value: 'USD', label: 'USD' },
                    { value: 'EUR', label: 'EUR' },
                    { value: 'RUB', label: 'RUB' },
        
                    ]}
                />
                    
            </div>
            : ''
            }
        </div>
    )
}
