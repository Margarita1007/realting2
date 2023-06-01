import { CardType } from "../../../types";
const img1 = require("../../../assets/img/img1.jpg");
const img2 = require("../../../assets/img/img2.jpg");
const img3 = require("../../../assets/img/img3.jpg");
const img4 = require("../../../assets/img/img4.jpg");
const img5 = require("../../../assets/img/img5.jpg");
const img6 = require("../../../assets/img/img6.jpeg");
const img7 = require("../../../assets/img/img7.jpeg");
const img8 = require("../../../assets/img/img8.jpg");
const img9 = require("../../../assets/img/img9.jpg");
const img10 = require("../../../assets/img/img15.jpg");
const img11 = require("../../../assets/img/img11.jpg");
const img12 = require("../../../assets/img/img12.jpg");
const img13 = require("../../../assets/img/img13.jpeg");
const img14 = require("../../../assets/img/img14.jpg");


export const card1: CardType = {
    id: '111',
    geo: [53.396620, 50.187302],
    img: img1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa 
    veniam dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card2: CardType = {
    id: '222',
    geo: [53.094733, 50.168312],
    img: img2,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card3: CardType = {
    id: '333',
    geo: [53.093143, 50.161818],
    img: img3,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    optio tempore impedit?`
}

export const card4: CardType = {
    id: '444',
    geo: [53.186769, 50.200841],
    img: img4,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card5: CardType = {
    id: '555',
    geo: [53.194684, 50.209333],
    img: img5,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugites culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card6: CardType = {
    id: '666',
    geo: [53.191200, 50.192111],
    img: img6,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
}

export const card7: CardType = {
    id: '777',
    geo: [53.212348, 50.236103],
    img: img7,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}


export const card8: CardType = {
    id: '888',
    geo: [53.296310, 50.184362],
    img: img8,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa 
    veniam dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card9: CardType = {
    id: '999',
    geo: [53.094463, 50.168542],
    img: img9,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card10: CardType = {
    id: '1010',
    geo: [53.093323, 50.162828],
    img: img10,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    optio tempore impedit?`
}

export const card11: CardType = {
    id: '1111',
    geo: [53.186781, 50.222841],
    img: img11,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card12: CardType = {
    id: '1212',
    geo: [53.195664, 50.209533],
    img: img12,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugites culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const card13: CardType = {
    id: '1313',
    geo: [53.191211, 50.192151],
    img: img13,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
}

export const card14: CardType = {
    id: '1414',
    geo: [53.212668, 50.236263],
    img: img14,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sunt fugit illo atque nemo dolore voluptates culpa veniam 
    dolor vero ad sed possimus non dicta ullam ipsam quod, optio tempore impedit?`
}

export const cards: CardType[] = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14];

export const coordinates = cards.map((card) => card.geo);
