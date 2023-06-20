import { Layout, Space, Row, Col, Button } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "../../teasers/data";
import ModalOfferImg from "./ModalOfferImg";
import ObjectGallery from "./ObjectGallery";


//import img4 from '../../../assets/img/img4.jpg';

const Object: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const { id } = useParams();
    const obj = cards.find((card) => card.id === id);

    function openModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    if (obj) {
        return (
            <Layout className="object">
                {showModal ? <ModalOfferImg setShowModal={setShowModal}/> : <></>}
                <div onClick={openModal}>
                    <ObjectGallery {...obj}/>
                </div>
                <Space direction="vertical" className="object-params">
                    <div className="location param">
                        <h3>Местонахождение</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12} >
                                <span>Страна:</span>
                                Турция
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Район:</span>
                                Алания
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Адрес:</span>
                                Gazipaza Cd
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Область/штат:</span>
                                Средиземноморский район
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Деревня:</span>
                                Каргыджак
                            </Col>
                        </Row>        
                    </div>

                    <div className="build param">
                        <h3>Параметры здания</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Год сдачи:</span>
                                2024
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество этажей:</span>
                                6
                            </Col>
                        </Row>
                    </div>

                    <div className="apart param">
                        <h3>Параметры квартиры</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Этаж:</span>
                                6
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество спален:</span>
                                1
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Общая площадь:</span>
                                50 м²
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество комнат:</span>
                                2
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество ванных:</span>
                                1
                            </Col>
                        </Row>
                    </div>

                    <div className="description param">
                        <h3>Описание</h3>
                        <Row>
                            <Col span={24} className="summary">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Excepturi id adipisci earum numquam impedit error 
                                    itaque rerum voluptatibus ullam sunt aliquid dolor, 
                                    totam enim consectetur esse eos provident suscipit ipsum.
                                    
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Excepturi id adipisci earum numquam impedit error 
                                    itaque rerum voluptatibus ullam sunt aliquid dolor, 
                                    totam enim consectetur esse eos provident suscipit ipsum.
                                </p>
                                <span className="readmore">Узнать больше</span>
                            </Col>
                        </Row>
                    </div>
                    <div className="additional param">
                            <h3>Дополнительно</h3>
                            <Row>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Мебель
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Кондиционер
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Ремонт
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Видеонаблюдение
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Стеклопакеты
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Консьерж
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Лифт
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Бытовая техника
                                </Col>
                                <Col xs={24} sm={12} xl={8}  className="param-add">
                                    Балкон
                                </Col>
                            </Row>

                        </div>

                </Space>
                <div className="object-contact">
                    <Button className="btn">
                        Задать вопрос
                    </Button>
                </div>
            </Layout>
        )
    } else {
        return (
            <div>Упс, не найдено</div>
        )
    }
    
}

export default Object;