import { Breadcrumb, Col, Row  } from "antd";
import React, { useEffect} from "react";
import './offers.css';
import Object from "./object/Object";
import MapOffer from "./object/MapOffer";
import location from '../../../assets/icons/location.svg';
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { getCurrency, getPropertyStatus } from "../../functions";


const OfferPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0,0)
        }
      , []);

    const { id } = useParams();
    const stateObj = useAppSelector(state => state.objects.objects);
    const obj = stateObj.find((card) => card.id === id);

    if (obj) {

        return (
            <div className="offer-page-container">
                <Breadcrumb
                style={{fontSize: 20}}
                items={[
                                        {
                      title: <Link to="/">Домен</Link>,
                    },
                    {
                        title: getPropertyStatus(obj.values['57'].value[0])
                    },
                    {
                        title: `${obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : ''}`
                    },
                    {
                      title: `и тд, потом доделаю`,
                    },
                  ]}
                />
                <Row justify={'space-between'} className="offer-page-title">
                    <Col>
                        <h1 style={{margin: 0}}>

                             <span>{obj.values['56'].value.length ? obj.values['56'].value : 'Название'}</span>
                             <span> </span>
                             <span>{ obj.values['39'].value ? `${obj.values['39'].value}` : 'метраж'}</span>
                             <span> м² </span>
                             <span> в </span> 
                              {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                              <span>, </span> 
                              {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'}
                        </h1>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            <img src={location} alt="location" style={{width: 20, height: 20}}/>
                            <span style={{fontSize: 20}}>
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                                <span>, </span>
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'} 
                            </span>
                        </div>
                    </Col>
                    <Col className="price">
                        {obj?.values['27'].value ? `${getCurrency(obj.values['70'].value[0].recordTitle)} ${obj.values['27'].value}` : 'Цена не указана'}
    
                    </Col>
                </Row>
                <Row gutter={[30, 30]}>
                    <Col xs={24} xl={24}>
                        <Object/>
                        <div className="map-offer-container">
                            <h3>Местоположение</h3>
                            <h5>
                                <span>
                                    {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                                    <span>, </span>
                                    {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'} 
                                </span>
                            </h5>
                            <MapOffer/>
                        </div>
                    </Col>
                </Row>
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