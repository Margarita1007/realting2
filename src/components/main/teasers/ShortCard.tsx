import React from "react";
import { Card, Row, Col, Space, Divider } from 'antd';
import { PropertyTypeWithGeo } from "../../../types";
import loc from '../../../assets/icons/location.svg';
import '../../../assets/styles/card.css';
import rooms from '../../../assets/icons/unit-rooms.svg';
import square from '../../../assets/icons/unit-square.svg';
import storeys from '../../../assets/icons/unit-storeys.svg';
import { Link } from "react-router-dom";
import { getCurrency, getImage } from "../../functions";


const ShortCardTemplate: React.FC<PropertyTypeWithGeo> = (props) => {
    const path: string = '/offers/' + props.id;
    // const noPhoto = require("../../../assets/img/nophoto.jpg");

    return (
        <Link to={path} target="_blank">
            <Card
                className="teaser-tile"
                hoverable
                cover={
                <img alt="example" src={getImage(props).title} className="teaser-tile-img"/>}
            >
                <Space direction="vertical" className="desc">
                    <Row className="title">  
                        {props.values['56'].value ? props.values['56'].value : ''} 
                    </Row>
                    <Row className="geo geo-shortcard">
                        <Col className="geo-icon">
                            <img src={loc} alt='icon-geo'/>
                        </Col>
                        <Col>
                            {props.values['55'].value.length ? props.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                            <span>, </span>
                            {props.values['55'].value.length ? props.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'}
                        </Col>
                    </Row>
                    <Row className="units">
                        <div className="unit-item">
                            <img src={rooms} alt="rooms"/>
                            <span>{props.values['62'].value.length ? props.values['62'].value[0].recordTitle : 'layout'}</span>
                        </div>
                        <div className="unit-item">
                            <img src={square} alt="square"/>
                            <span>{props.values['39'].value ? props.values['39'].value : 'square'} м²</span>
                        </div>
                        <div className="unit-item">
                            <img src={storeys} alt="storeys"/>
                            <span>
                                {props.values['38'].value ? props.values['38'].value : 'floor'}/
                                {props.values['55'].value.length ? props.values['55'].value[0].recordValues['19'] : 'total'}

                            </span>
                        </div>
                    </Row>
                </Space>
                <Divider />
                <Row className="price">
                {props.values['27'].value ? `${getCurrency(props.values['70'].value[0].recordTitle)} ${props.values['27'].value}` : 'Цена не указана'}
                </Row>
                <Divider />
                
                
            </Card>
        </Link>
    )
}

export default ShortCardTemplate;