import React from "react";
import { Card, Row, Col, Space, Divider } from 'antd';
import { CardType } from "../../../types";
import loc from '../../../assets/icons/location.svg';
import './card.css';
import rooms from '../../../assets/icons/unit-rooms.svg';
import square from '../../../assets/icons/unit-square.svg';
import storeys from '../../../assets/icons/unit-storeys.svg';
import { Link } from "react-router-dom";


const ShortCardTemplate: React.FC<CardType> = (props) => {
    const path: string = '/offers/' + props.id;

    return (
        <Link to={path} target="_blank">
            <Card
                className="teaser-tile"
                hoverable
                cover={<img alt="example" src={props.img} className="teaser-tile-img"/>}
            >
                <Space direction="vertical" className="desc">
                    <Row className="title">  
                        Квартира 2 комнаты 
                    </Row>
                    <Row className="geo">
                        <Col className="geo-icon">
                            <img src={loc} alt='icon-geo'/>
                        </Col>
                        <Col>
                        {props.geo}
                        </Col>
                    </Row>
                    <Row className="units">
                        <div className="unit-item">
                            <img src={rooms} alt="rooms"/>
                            <span>2</span>
                        </div>
                        <div className="unit-item">
                            <img src={square} alt="square"/>
                            <span>58 м²</span>
                        </div>
                        <div className="unit-item">
                            <img src={storeys} alt="storeys"/>
                            <span>2/5</span>
                        </div>
                    </Row>
                </Space>
                <Divider />
                <Row className="price">
                    $ 230,000
                </Row>
                <Divider />
                
                
            </Card>
        </Link>
    )
}

export default ShortCardTemplate;