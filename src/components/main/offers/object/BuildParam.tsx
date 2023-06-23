import React from 'react';
import { PropertyType } from '../../../../types';
import { getBuildParam, getDate } from '../../../functions';

const BuildParam: React.FC<PropertyType> = (props) => {

    //год дома
    const key1Date: string = props.values['55'].value.length && props.values['55'].value[0].recordValues['18'] ? props.values['55'].value[0].recordValues['18'] : 'Год дома';
    const key1: string = getDate(key1Date, 'month');
    //класс
    const key2: string = props.values['55'].value.length && props.values['55'].value[0].recordValues['42'].length ? props.values['55'].value[0].recordValues['42'][0].recordTitle : 'Класс/Category';
    //этажность
    const key3: string | number = props.values['55'].value.length ? props.values['55'].value[0].recordValues['19'] : 'total';
    const key4 = 'нет данных';
    const params = getBuildParam(key1, key2, key3, key4);

    return (
        <div className='build-params'>
            {
             params.items.map((item) => (
                <div className='build-params_param' key={item.id}>
                    <div className='build-params_param_img'>
                        <img src={item.img} alt='keys'/>
                    </div>
                    <div className='build-params_param_text'>
                        <p>{item.text}</p>
                        <h5>{item.value}</h5>
                    </div>
                </div>
             ))
            }
        </div>
    )
}

export default BuildParam;