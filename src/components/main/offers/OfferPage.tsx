import { Col, Row  } from "antd";
import React from "react";
import './offers.css';
import Object from "./object/Object";
import MapOffer from "./object/MapOffer";


const OfferPage: React.FC = () => {
    return (
        <div className="offer-page-container">
            <Row justify={'space-between'} className="offer-page-title">
                <Col>
                    <h1>Квартира 1 спальня 50 м² в Каргыджак, Турция</h1>
                </Col>
                <Col className="price">
                    $ 230,000
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
}

export default OfferPage;