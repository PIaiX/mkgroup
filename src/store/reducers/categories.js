import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            id: 0,
            imgUrl: 'imgs/img2.jpg',
            title: 'Ангары'
        },
        {
            id: 1,
            imgUrl: 'imgs/img3.jpg',
            title: 'Склады'
        },
        {
            id: 2,
            imgUrl: 'imgs/img2.jpg',
            title: 'Фермы'
        },
        {
            id: 3,
            imgUrl: 'imgs/img2.jpg',
            title: 'Офисы'
        },
        {
            id: 4,
            imgUrl: 'imgs/img2.jpg',
            title: 'Промышленные здания'
        },
        {
            id: 5,
            imgUrl: 'imgs/img2.jpg',
            title: 'Торговые центры'
        },
        {
            id: 6,
            imgUrl: 'imgs/img2.jpg',
            title: 'СТО и Автосервисы'
        },
        {
            id: 7,
            imgUrl: 'imgs/img2.jpg',
            title: 'Быстровозводимые здания'
        },
        {
            id: 8,
            imgUrl: 'imgs/img2.jpg',
            title: 'Кафе и рестораны'
        },
        {
            id: 9,
            imgUrl: 'imgs/img2.jpg',
            title: 'Центры логистики'
        },
        {
            id: 10,
            imgUrl: 'imgs/img2.jpg',
            title: 'Эстакады'
        },
        {
            id: 11,
            imgUrl: 'imgs/img2.jpg',
            title: 'Силосы'
        },
        {
            id: 12,
            imgUrl: 'imgs/img2.jpg',
            title: 'Опоры ЛЭП'
        },
        {
            id: 13,
            imgUrl: 'imgs/img2.jpg',
            title: 'Спорткомплексы'
        },
        {
            id: 14,
            imgUrl: 'imgs/img2.jpg',
            title: 'Мосты'
        }]
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        SetCategories(state, action) {
           state.categories=action.payload
        }
    }
})

export const { SetCategories } = categoriesSlice.actions
export default categoriesSlice.reducer