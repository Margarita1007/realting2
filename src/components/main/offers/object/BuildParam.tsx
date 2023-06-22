import React from 'react';
import keys from '../../../../assets/icons/keys.svg';
import classes from '../../../../assets/icons/class.svg';
import storeys from '../../../../assets/icons/storeys-object.svg';
import korpus from '../../../../assets/icons/korpus.svg';
import type_build from '../../../../assets/icons/type-build.svg';
import height_ceiling from '../../../../assets/icons/height.svg';
import finish from '../../../../assets/icons/finishing.svg';
import parking from '../../../../assets/icons/parking.svg';

type BuildParamType = {
    id: number,
    img: string,
    text: string,
    value: string | string[]
}

const dataBuildParam: BuildParamType[] = [
    {
        id: 1,
        img: keys,
        text: 'Срок сдачи',
        value: '2024'
    },
    {
        id: 2,
        img: classes,
        text: 'Класс',
        value: 'Бизнес'
    },
    {
        id: 3,
        img: storeys,
        text: 'Этажность',
        value: '20'
    },
    {
        id: 4,
        img: korpus,
        text: 'Корпусов',
        value: '2'
    },
    {
        id: 5,
        img: type_build,
        text: 'Тип дома',
        value: 'Монолитно-кирпичный'
    },
    {
        id: 6,
        img: height_ceiling,
        text: 'Высота потолков',
        value: 'от 2 м до 3 м'
    },
    {
        id: 7,
        img: finish,
        text: 'Варианты отделки',
        value: ['Черновая', 'предчистовая']
    },
    {
        id: 8,
        img: parking,
        text: 'Парковка',
        value: 'Гостевая'
    },
]

const BuildParam: React.FC = () => {

    return (
        <div className='build-params'>
            {
             dataBuildParam.map((item) => (
                <div className='build-params_param' key={item.id}>
                    <div className='build-params_param_img'>
                        <img src={item.img} alt='keys'/>
                    </div>
                    <div className='build-params_param_text'>
                        <p>{item.text}</p>
                        <h5>{typeof item.value === 'string' ? item.value : item.value.join(', ')}</h5>
                    </div>
                </div>
             ))
            }
        </div>
    )
}

export default BuildParam;