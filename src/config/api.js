const apiRoutes = {

    // types of oil
    GET_ALL_CATEGORY:'category',

    // Products
    GET_ALL_PRODUCT:'product',
    GET_PRODUCT_DY_IDS:'product/byIds',
    GET_ONE_PRODUCT:'product/withParameters',
    GET_PRODUCT_WITH_DISCOUNT:'product/withDiscount',
    GET_PRODUCT_BY_SEARCH:'product/search',
    GET_PROMO_PRODUCTS:'product/promo',

    // News
    GET_NEWS: 'news',

    // Portfolio
    GET_PORTFOLIO: 'portfolio',

    // Services
    GET_ALL_SERVICES: 'service',

    // Information about us
    GET_INFORMATION:'settings',

    // Banner
    GET_BANNER:'banner/visible',

    // Order
    CREATE_ORDER:'order',

    // Connection
    CREATE_CONNECT:'callRequest',

    // Quiz
    GET_QUIZ:'quiz',
    POST_QUIZ:'quiz/pass',
    GET_QUIZ_INFO:'quiz/info/0188b54f-f4f8-7714-a325-9c24ed7e58b9',

}

const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
export {apiRoutes, BASE_URL, BASE_API_URL}
