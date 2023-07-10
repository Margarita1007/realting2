import { Layout, Space, Row, Col } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ModalOfferImg from "./ModalOfferImg";
import ObjectGallery from "./ObjectGallery";
import { useAppSelector } from "../../../../app/hooks";
import BuildParam from "./BuildParam";
import { getDate, getSI } from "../../../functions";
import ContactButtons from "../../ContactButtons";
import ApartParam from "./ApartParam";


const Object: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const { id } = useParams();
    const stateObj = useAppSelector(state => state.objects.objects);
    const obj = stateObj.find((card) => card.id === id);
    
    function openModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    if (obj) {
        const updateDate = obj.values['63'].value ? obj.values['63'].value : 'дата';

        const objectCity = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['10'][0].recordTitle : 'Город';
        const objectCountry = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['36'][0].recordTitle : 'Страна';
        //const objectSquare =  obj.values['39'].value ? `${obj.values['39'].value}` : 'метраж';
        const distanceToSea = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['24'] : '0';
        const distanceToCenter = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['21'] : '0';
        
        // единица измерения расстояний из параметров здания(метры, футы)
        const buildMeasurementSystem = getSI(obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['46'][0] : '0');
        // единица измерения из параметров квартиры
       // const apartMeasurementSystem = obj.values['78'].value.length ? getSI(obj.values['78'].value[0]) : '';
        const complexInfrastructire = obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['30'].map((item: any) => item.recordTitle) : [];
    
        
        return (
            <Layout className="object">
                {showModal ? <ModalOfferImg setShowModal={setShowModal}/> : <></>}
                <div onClick={openModal}>
                    <ObjectGallery {...obj}/>
                </div>
                <ContactButtons/>
                <Space direction="vertical" className="object-params">
                    <div className="update_date">
                        <span>Обновлено: </span>
                        <span>
                            {getDate(updateDate, 'day')}
                        </span>
                    </div>
                    <div className="location param">
                        <h3>Местонахождение</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12} >
                                <span>Страна:</span>
                                {objectCountry}
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Город:</span>
                                {objectCity}
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Расстояние до моря:</span>
                                {distanceToSea}
                                <span>{buildMeasurementSystem}</span>
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Расстояние до центра:</span>
                                {distanceToCenter}
                                <span>{buildMeasurementSystem}</span>
                            </Col>
                        </Row>        
                    </div>

                    <div className="apart param">
                        <h3>Параметры квартиры</h3>
                        <ApartParam {...obj}/>
                        {/* <Row>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Тип:</span>
                                {obj.values['61'].value.length ? obj.values['61'].value[0].recordTitle : 'Тип'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество спален:</span>
                                {obj.values['62'].value.length ? obj.values['62'].value[0].recordTitle : 'layout'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Общая площадь:</span>
                                <span>
                                    {objectSquare}
                                    <span> </span>
                                    {apartMeasurementSystem}²
                                </span>
                            </Col>
            
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество ванных:</span>
                                {obj.values['75'].value ? obj.values['75'].value : ''}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Этаж:</span>
                                {obj.values['38'].value ? obj.values['38'].value : 'floor'}/
                                {obj.values['55'].value.length ? obj.values['55'].value[0].recordValues['19'] : 'total'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Вид:</span>
                                {obj.values['73'].value.length ? obj.values['73'].value[0].recordTitle : 'Вид'}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Мебель:</span>
                                {obj.values['72'].value.length ? obj.values['72'].value[0].recordTitle : 'Мебель'}
                            </Col>
                        </Row> */}
                    </div>

                    <div className="build param">
                        <h3>Параметры здания</h3>
                        <BuildParam {...obj}/>
                    </div>

                    <div className="description param">
                        <h3>Описание</h3>
                        <Row>
                            <Col span={24} className="summary">
                                <p>
                                    {obj.values['64'].value ? obj.values['64'].value : 'текст'}
                                </p>
                                {/* <span className="readmore">Узнать больше</span> */}
                            </Col>
                        </Row>
                    </div>
                    <div className="additional param">
                            <h3>Объекты на территории жилого комплекса</h3>
                            <Row>
                               {complexInfrastructire.length ? complexInfrastructire.map((item: string, index: number) => (
                                    <Col xs={24} sm={12} xl={8}  className="param-add" key={index}>
                                        {item}
                                    </Col>
                               ))
                               : ''
                            }
                            </Row>
                        </div>
                </Space>
            </Layout>
        )
    } else {
        return (
            <div>Упс, не найдено</div>
        )
    }
    
}

export default Object;