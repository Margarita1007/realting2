import { BuildParamType, PropertyType } from "../types";
// иконки параметров здания
import keys from '../assets/icons/keys.svg';
import classes from '../assets/icons/class.svg';
import storeys from '../assets/icons/storeys-object.svg';
import korpus from '../assets/icons/korpus.svg';
import type_build from '../assets/icons/type-build.svg';
import height_ceiling from '../assets/icons/height.svg';
import finish from '../assets/icons/finishing.svg';
import parking from '../assets/icons/parking.svg';

import pool from '../assets/icons/new/ПЛЯЖ UXWING 2.svg';

// иконки параметров квартиры
import type_apart from '../assets/icons/new/ТИП UXWING.svg';
import rooms from '../assets/icons/new/СПАЛЬНЯ UXWING.svg'
import square from '../assets/icons/new/ПЛОЩАДЬ ЦИАН.svg';
import bath from '../assets/icons/new/САНУЗЕЛ UXWING.svg';
// этаж - какая иконка?
import view from '../assets/icons/new/ВИД UXWING.svg';
import furniture from '../assets/icons/new/МЕБЕЛЬ UXWING.svg';

const noPhoto = require("../assets/img/nophoto.jpg");

export function getCurrency(currApi: string) {
    switch (currApi.toLowerCase()) {
        case 'usd':
            return '$';
          case 'eur':
            return '€';
          case 'gbp':
            return '£';
          case 'jpy':
            return '¥';
          case 'try':
            return '₺';
        default:
          return currApi;
      }
}

export const findCenter: (coordinates: [number, number][]) => [number, number] = (coordinates: [number, number][]) => {
  if (coordinates.length === 0) {
    return [0, 0];
  }

  let sumLat = 0;
  let sumLng = 0;

  for (let i = 0; i < coordinates.length; i++) {
    sumLat += coordinates[i][0];
    sumLng += coordinates[i][1];
  }

  const centerLat = sumLat / coordinates.length;
  const centerLng = sumLng / coordinates.length;

  return [centerLat, centerLng];
};

export const getImage = (obj: PropertyType) => {
  const imgTitle: string = obj.values['80'].value.length ? obj.values['80'].value[0].url : noPhoto;
  const imgInteriorArray = obj.values['82'].value.length ? obj.values['82'].value.map((item: any) => item.url) : [noPhoto, noPhoto];
  const imgExteriorArray = obj.values['55'].value.length && obj.values['55'].value[0].recordValues['31'].length ? obj.values['55'].value[0].recordValues['31'].map((item: any) => item.url) : [noPhoto];
  const imgArrayLength = (imgExteriorArray.length + imgInteriorArray.length).toString();
  const imgArray = [imgTitle].concat(imgInteriorArray, imgExteriorArray);
  return {
    id: obj.id,
    title: imgTitle,
    interior: imgInteriorArray,
    extrerior: imgExteriorArray,
    allImg: imgArray,
    allImgLength: imgArrayLength
  }
}

export function getPropertyStatus(status: string) {
  switch (status) {
    case '2':
        return 'Вторичка';
      case '1':
        return 'Новостройки';
    default:
      return status;
  }
}

export function getCitizenship(value: string) {
  switch (value) {
    case '1':
        return 'Да';
      case '2':
        return 'Нет';
    default:
      return value;
  }
}

export function getSI(value: string) {
  switch (value) {
    case '1' :
      return 'м';
    case '2' :
      return 'foot';
    case '3' :
      return 'inch';
    default: 
      return value
  }
}

export function getDate(data: string, format: string) {

  if (data === 'дата') {
    return 'дата'
  } else {
    const date = new Date(data);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
  
    const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
    const formattedMonth = `${month < 10 ? '0' : ''}${month}.${year}`;

    switch (format) {
      case 'day' :
        return formattedDate;
      case 'month' :
        return formattedMonth;
      default: 
        return formattedDate
    }
  }
  
}


export const dataBuildParam: BuildParamType[] = [
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

export function getApartParam(keys: (string | number)[]) {
  return {
    items: [{
      id: 1,
      img: type_apart,
      text: 'Тип',
      value: keys[0]
    },
    {
      id: 2,
      img: square,
      text: 'Площадь',
      value: keys[1]
    },
    {
      id: 3,
      img: rooms,
      text: 'Количество спален',
      value: keys[2]
    },
    {
      id: 4,
      img: bath,
      text: 'Количество санузлов',
      value: keys[3]
    },
    {
      id: 5,
      img: storeys,
      text: 'Этаж',
      value: keys[4]
    },
    {
      id: 6,
      img: view,
      text: 'Вид',
      value: keys[5]
    },
    {
      id: 7,
      img: furniture,
      text: 'Мебель',
      value: keys[6]
    },
  ]
  }
}

export function getBuildParam(key1: string | number, key2: string, key3: string | number, key4: string) {
  return {
    items: [{
        id: 1,
        img: keys,
        text: 'Срок сдачи',
        value: key1
      },
      {
        id: 2,
        img: classes,
        text: 'Класс',
        value: key2
      },
    {
        id: 3,
        img: storeys,
        text: 'Этажность',
        value: key3
    },
    {
        id: 4,
        img: pool,
        text: 'Бассейн',
        value: key4
    },
    //   {
    //     id: 5,
    //     img: type_build,
    //     text: 'Тип дома',
    //     value: key5
    //   },
    // {
    //     id: 6,
    //     img: height_ceiling,
    //     text: 'Высота потолков',
    //     value: key6
    //   },
    //   {
    //     id: 7,
    //     img: finish,
    //     text: 'Варианты отделки',
    //     value: key7
    //   },
    //   {
    //     id: 8,
    //     img: parking,
    //     text: 'Парковка',
    //     value: key8
    //   },
    ]
  }

}