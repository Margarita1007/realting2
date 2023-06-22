import { Breadcrumb, Col, Row  } from "antd";
import React, { useEffect} from "react";
import './offers.css';
import Object from "./object/Object";
import MapOffer from "./object/MapOffer";
import location from '../../../assets/icons/location.svg';
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { getCurrency } from "../../functions";


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
                items={[
                                        {
                      title: <Link to="/">Подборка</Link>,
                    },
                    {
                      title: `${obj.values['61'].value.length ? obj.values['61'].value[0].recordTitle : ''} в Турции`,
                    },
                  ]}
                />
                <Row justify={'space-between'} className="offer-page-title">
                    <Col>
                        <h1 style={{margin: 0}}>

                             <span>{obj.values['61'].value.length ? obj.values['61'].value[0].recordTitle : ''}</span>
                             <span> </span>
                             <span>{ obj.values['39'].value ? `${obj.values['39'].value} м²` : ''}</span>
                             <span> </span>
                              в Каргыджак, Турция
                            </h1>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            <img src={location} alt="location" style={{width: 20, height: 20}}/>
                            <span>Текст местоположения</span>
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
                            <h5>Текст</h5>
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