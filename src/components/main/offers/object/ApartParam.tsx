import React from 'react';
import { PropertyType } from '../../../../types';
import { getApartParam, getSI } from '../../../functions';

const ApartParam: React.FC<PropertyType> = (props) => {

    const type_apart = props.values['61'].value.length ? props.values['61'].value[0].recordTitle : 'Тип';  
    const objectSquare =  props.values['39'].value ? props.values['39'].value : 'метраж';
    const apartMeasurementSystem = props.values['78'].value.length ? getSI(props.values['78'].value[0]) : '';
    const square = `${objectSquare} ${apartMeasurementSystem}²`;
    const rooms = props.values['62'].value.length ? props.values['62'].value[0].recordTitle : 'layout';
    const bath = props.values['75'].value ? props.values['75'].value : '';
    const floor = props.values['38'].value ? props.values['38'].value : 'floor';
    const total_storeys = props.values['55'].value.length ? props.values['55'].value[0].recordValues['19'] : 'total';
    const storeys = `${floor}/${total_storeys}`;
    const view = props.values['73'].value.length ? props.values['73'].value[0].recordTitle : 'Вид';
    const furniture = props.values['72'].value.length ? props.values['72'].value[0].recordTitle : 'Мебель';

    const params = getApartParam([type_apart, square, rooms, bath, storeys, view, furniture]);

    return (
        <div className='build-params'>
            {
             params.items.map((item) => (
                <div className='build-params_param' key={item.id}>
                    <div className='build-params_param_img'>
                        <img src={item.img} alt='keys' style={{width: 40, height: 40}}/>
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

export default ApartParam;