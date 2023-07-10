import React from "react";
import { Card, Row, Col, Space, Divider } from 'antd';
import { PropertyType } from "../../../types";
import loc from '../../../assets/icons/location.svg';
import '../../../assets/styles/card.css';
import rooms from '../../../assets/icons/unit-rooms.svg';
import bath from '../../../assets/icons/unit-baths.svg';
import square from '../../../assets/icons/unit-square.svg';
import storeys from '../../../assets/icons/unit-storeys.svg';
import { Link } from "react-router-dom";
import ObjectGallery from "../offers/object/ObjectGallery";
import { getCitizenship, getCurrency, getSI } from "../../functions";
import ContactButtons from "../ContactButtons";

const CardTemplate: React.FC<PropertyType> = (props) => {
    const path: string = '/offers/' + props.id;

    const distanceToSea = props.values['55'].value.length ? props.values['55'].value[0].recordValues['24'] : '0';
    // единица измерения расстояний из параметров здания(метры, футы)
    const buildMeasurementSystem = getSI(props.values['55'].value.length ? props.values['55'].value[0].recordValues['46'][0] : '0');
    const distance = `${distanceToSea} ${buildMeasurementSystem}`;

    const ikamet = getCitizenship(props.values['31'].value ? props.values['31'].value[0] : '0');
    const citizenship = getCitizenship(props.values['32'].value ? props.values['32'].value[0] : '0');

    const objectCurrency = getCurrency(props.values['70'].value.length ? props.values['70'].value[0].recordTitle : '');
    const objectPrice: number | string = props.values['27'].value ? (props.values['27'].value).toLocaleString("en-US", {
        useGrouping: true,
      }) : '';
    const objectPriceCurrency = objectPrice ? `${objectCurrency} ${objectPrice}` : 'Цена не указана';
    
    return (
        
        <Card
            className="teaser-tile"
            hoverable
        >
            <Link to={path} style={{color: '#606873'}}>
                <ObjectGallery {...props} />
                <Space direction="vertical" className="desc">
                    <Row className="title">  
                        {props.values['56'].value ? props.values['56'].value : ''} 
                        {/* {props.values['61'].value.length ? props.values['61'].value[0].recordTitle : ''} */}
                    </Row>
                    <Row className="geo">
                        <Col className="location">
                            <div className="geo-icon">
                                <img src={loc} alt='icon-geo'/>
                            </div>
                            <div>
                                {props.values['55'].value.length ? props.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город'}
                                <span>, </span>
                                {props.values['55'].value.length ? props.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна'}
                            </div>
                        </Col>
                        <Col className="distance">
                            <span style={{color: '#98a3b2'}}>Расстояние до моря: </span>
                            <span>{distance}</span>
                        </Col>
                    </Row>
                    <Row className="citizenship">
                        <div>
                            <span style={{color: '#98a3b2'}}>ВНЖ: </span>
                            <span>{ikamet}</span>
                        </div>
                        <div>
                            <span style={{color: '#98a3b2'}}>Гражданство: </span>
                            <span>{citizenship}</span>
                        </div>
                    </Row>
                    <Row className="units">
                        <div className="unit-item">
                            <img src={rooms} alt="rooms"/>
                            <span>
                                {props.values['62'].value.length ? props.values['62'].value[0].recordTitle : 'layout'}
                            </span>
                        </div>
                        <div className="unit-item">
                            <img src={bath} alt="baths"/>
                            <span>{props.values['75'].value ? props.values['75'].value : 'bath'}</span>
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
                    {objectPriceCurrency}
                </Row>
                <Divider />
                <Row className="text">
                    {props.values['64'].value ? props.values['64'].value : 'текст'}
                </Row>
                </Link>
                <ContactButtons/>
            </Card>
    )
}

export default CardTemplate;