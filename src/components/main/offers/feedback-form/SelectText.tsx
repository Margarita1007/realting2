import React, { useState } from 'react';
import { Button, Form, Radio }  from 'antd';
import type { RadioChangeEvent } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const dataText = [
    {
        id: 1,
        text: 'Хочу посмотреть этот объект'
    },
    {
        id: 2,
        text: 'Актуальна ли стоимость объекта?'
    },
    {
        id: 3,
        text: 'Хочу получить больше информации об объекте'
    },
    {
        id: 4,
        text: 'Какие условия покупки для иностранцев?'
    },
    {
        id: 5,
        text: 'Хочу посмотреть больше фото/видео'
    },
    {
        id: 6,
        text: 'Возможна ли покупка в кредит/ипотеку?'
    }
]

const SelectText: React.FC = () => {
    const [valueRadio, setValueRadio] = useState<number>(0);

    function handleRagio(e: RadioChangeEvent) {
        setValueRadio(e.target.value);
    }

    return (
        <div>
            <Form.Item
                name="message"
                label="Введите сообщение"
                rules={[{ required: true }]}
                >
                <Radio.Group onChange={handleRagio} value={valueRadio}>
                    <Radio value={1}>Выбрать из предложенного</Radio>
                    <Radio value={2}>Написать свой текст</Radio>
                </Radio.Group>
            </Form.Item>
        
            {
                valueRadio ? 
                    valueRadio === 1 ?
                    <div className='form-text-buttons'>
                        {dataText.map(item => (
                            <Button key={item.id}>{item.text}</Button>
                        ))}

                    </div> 
                    : 
                    <div className='form-text-area'>
                        <TextArea rows={4} placeholder='Здравствуйте, мне интересно ваше объявение'/>
                    </div>
                : ''
            }
        </div>
    )
}

export default SelectText;