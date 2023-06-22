import { Layout, Space, Row, Col, Button, Modal } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ModalOfferImg from "./ModalOfferImg";
import ObjectGallery from "./ObjectGallery";
import { useAppSelector } from "../../../../app/hooks";
import BuildParam from "./BuildParam";


//import img4 from '../../../assets/img/img4.jpg';

const Object: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [isOpenModal, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const stateObj = useAppSelector(state => state.objects.objects);
    const obj = stateObj.find((card) => card.id === id);
    
    function openModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    function handlerLike(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        setLike(!like);
        if (dislike) {
            setDislike(false);
        }
        setIsModalOpen(true);
    }

    function handlerDislike(e: React.MouseEvent<HTMLSpanElement>) {
        e.preventDefault();
        setDislike(!dislike);
        if (like) {
            setLike(false)
        }
        setIsModalOpen(true);
    }


    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    if (obj) {
        return (
            <Layout className="object">
                {showModal ? <ModalOfferImg setShowModal={setShowModal}/> : <></>}
                <div onClick={openModal}>
                    <ObjectGallery {...obj.values['52']}/>
                </div>
                <Space direction="vertical" className="object-params">
                    <div className="location param">
                        <h3>Местонахождение</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12} >
                                <span>Страна:</span>
                                Турция ???
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Район:</span>
                                Алания ????
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Адрес:</span>
                                Gazipaza Cd ???
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Область/штат:</span>
                                Средиземноморский район ???
                            </Col>
                            <Col xs={24} sm={24} md={12} >
                                <span>Деревня:</span>
                                Каргыджак ???
                            </Col>
                        </Row>        
                    </div>

                    <div className="build param">
                        <h3>Параметры здания</h3>
                        {/* <Row>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Год сдачи:</span>
                                <img className="icon" src={keys} alt="keys"/>
                                2024 ???
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество этажей:</span>
                                6 ???
                            </Col>
                        </Row> */}
                    </div>

                    <BuildParam/>

                    <div className="apart param">
                        <h3>Параметры квартиры</h3>
                        <Row>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Этаж:</span>
                                {obj.values['38'].value ? obj.values['38'].value : ''}
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество спален:</span>
                                1 ???
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Общая площадь:</span>
                                {obj.values['39'].value ? obj.values['39'].value : ''} м²
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество комнат:</span>
                                2 ???
                            </Col>
                            <Col xs={24} sm={24} md={12}  >
                                <span>Количество ванных:</span>
                                {obj.values['75'].value ? obj.values['75'].value : ''}
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
                            <h3>Объекты на территории жилого комплекса</h3>
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
                    <Button className="btn" onClick={(e) => {handlerLike(e)}}>
                        Подходит
                    </Button>
                    <Button className="btn btn-not" onClick={(e) => {handlerDislike(e)}}>
                        Не подходит
                    </Button>
                </div>
                <Modal title='' open={isOpenModal} onOk={handleOk} onCancel={handleCancel}>
                    <div className="modal-feedback">
                        <p>Ваш комментарий поможет нам подобрать для вас лучший вариант</p>
                        <textarea placeholder="Enter your message..." cols={25} rows={5}></textarea>
                    </div>
                </Modal>
            </Layout>
        )
    } else {
        return (
            <div>Упс, не найдено</div>
        )
    }
    
}

export default Object;