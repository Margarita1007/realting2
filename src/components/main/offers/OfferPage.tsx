import { Breadcrumb, Col, Row  } from "antd";
import React, { useEffect} from "react";
import './offers.css';
import Object from "./object/Object";
import MapOffer from "./object/MapOffer";
import location from '../../../assets/icons/location.svg';
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { getCurrency, getPropertyStatus } from "../../functions";
import FooterComponent from "../../footer/Footer";

const OfferPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0,0)
        }
      , []);

    const { id } = useParams();
    const stateObj = useAppSelector(state => state.objects.objects);
    const obj = stateObj.find((card) => card.id === id);

    if (obj) {
        const objectCity = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город';
        const objectCountry = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна';
        const objectLocation = `${objectCity}, ${objectCountry}`;
        const objectName = obj.values['56'].value.length ? obj.values['56'].value : 'Название';
        const objectSquare =  obj.values['39'].value ? `${obj.values['39'].value}` : 'метраж';
        const objectTitleString = `${objectName} ${objectSquare} м² в ${objectLocation}`;
        const objectCurrency = getCurrency(obj.values['70'].value[0].recordTitle);
        const objectPrice: number | string = obj.values['27'].value ? (obj.values['27'].value).toLocaleString("en-US", {
            useGrouping: true,
          }) : '';
            
        const objectPriceCurrency = objectPrice ? `${objectCurrency} ${objectPrice}` : 'Цена не указана';

        return (
            <div className="offer-page-wrapper">
                <div className="offer-page-container">
                    <Breadcrumb         // домен -> 57 проперти статус -> 56 website title + 39 square + 10 city, 36 country
                    style={{fontSize: 20}}
                    items={[
                                            {
                        title: <Link to="/">Домен</Link>,
                        },
                        {
                            title: getPropertyStatus(obj.values['57'].value[0])
                        },
                        {
                            title: objectTitleString
                        },
                    ]}
                    />
                    <Row justify={'space-between'} className="offer-page-title">
                        <Col>
                            <h1 style={{margin: 0}}>{objectTitleString}</h1>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                                <img src={location} alt="location" style={{width: 20, height: 20, marginLeft: '-3px'}}/>
                                <span className="offer-page-title-location">
                                    {objectLocation}
                                </span>
                            </div>
                        </Col>
                        <Col className="price">
                            {objectPriceCurrency}        
                        </Col>
                    </Row>
                    <Row gutter={[30, 30]}>
                        <Col xs={24} xl={24}>
                            <Object/>
                            <div className="map-offer-container">
                                <h3>Местоположение</h3>
                                <h5>
                                    <img src={location} alt="location" style={{width: 30, height: 30, marginLeft: '-3px'}}/>
                                    <span>
                                        {objectLocation} 
                                    </span>
                                </h5>
                                <MapOffer/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <FooterComponent/>
            </div>
        )
    } else {
        return (
            <div>
                Не найдено
            </div>
        )
    }
   

}

export default OfferPage;