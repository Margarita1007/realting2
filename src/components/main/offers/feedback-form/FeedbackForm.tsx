import { Button, Checkbox, Form, Input, Layout, Select, Space } from 'antd';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SelectText from './SelectText';
import TextArea from 'antd/es/input/TextArea';

const FeedbackForm: React.FC = () => {
    return (
        <Layout className='feedback-form-container'>
            <Space direction='horizontal' className='seller-block'>
                <div className='seller-logo'>
                    Фотка
                </div>
                <div className='seller-info'>
                    Агент продавца
                </div>
            </Space>
            <Space direction='vertical'>
                <h3>Оставить заявку на объект</h3>
                <Form
                layout="vertical"
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Input
                            type='text'
                            placeholder="Ваше имя *" 
                            className='signup_input'
                            />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Input
                            type='text'
                            placeholder="Email *" 
                            className='signup_input'
                            />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <PhoneInput
                            country={'ru'}
                            // localization={ru}
                            //value={this.state.phone}
                        />
                    </Form.Item>
                    <Form.Item
                        name="language"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Select
                            placeholder="Предпочитаемый язык общения" 
                            className='signup_select signup_select_gender'
                        >
                            <Select.Option value="ru">Русский</Select.Option>
                            <Select.Option value="en">English</Select.Option>
                        </Select>
                    </Form.Item>
                    <SelectText/>
                    {/* <Form.Item
                        name="message"
                        label="Введите сообщение"
                        rules={[{ required: true, message: 'Введите сообщение' }]}
                        >
                        <TextArea rows={4} placeholder='Здравствуйте, мне интересно ваше объявление'/>
                    </Form.Item> */}
                    <Form.Item >
                        <Checkbox>
                            Я ознакомлен и согласен с правилами обработки персональных данных.
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' disabled>Связаться с продавцом</Button>
                    </Form.Item>
                    {/* <SelectText/> */}
                </Form>
            </Space>
        </Layout>
    )
}

export default FeedbackForm;